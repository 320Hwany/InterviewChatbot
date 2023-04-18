import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './Chat.css'
import {Link, useLocation} from "react-router-dom";

function Chat() {
    const [userMessage, setUserMessage] = useState('');
    const [conversation, setConversation] = useState([]);
    const conversationContainer = useRef(null);
    const gptQuestionRef = useRef('');

    const location = useLocation();

    useEffect(() => {
        if (location.state.responseMessage) {
            const newConversation = [{ text: location.state.responseMessage, isMe: false },
                ...conversation];
            setConversation(newConversation);
        }
    }, [location.state.responseMessage]);

    const saveConversation = (e) => {
        e.preventDefault();
        const newMessage = { text: userMessage, isMe: true };
        setConversation((prevConversation) => [...prevConversation, newMessage]);
        setUserMessage('');

        const lastConversation = conversation.slice(-1)[0];
        const gptQuestion = lastConversation && !lastConversation.isMe ? lastConversation.text : '';

        axios
            .post('http://localhost:8080/chat', { userMessage, gptQuestion }, {})
            .then((res) => {
                const newMessage = { text: res.data.gptQuestion, isMe: false };
                setConversation((prevConversation) => [...prevConversation, newMessage]);
            })
            .catch((err) => {
                console.log(err);
            });
    };



    useEffect(() => {
        conversationContainer.current.scrollTop = conversationContainer.current.scrollHeight;
    }, [conversation]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            saveConversation(e);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="col-md-9">
                <h1 className="mt-5 d-flex justify-content-center align-items-center">채팅창</h1>
                <Form className="my-3" onSubmit={saveConversation}>
                    <Form.Group className="mb-3" controlId="formBasicSubject">
                        <Form.Label>대화창</Form.Label>
                        <div className="conversation-container" ref={conversationContainer}>
                            {conversation.map((message, index) => (
                                <div key={index} className={`message ${message.isMe ? 'isMe' : 'isOther'}`}>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAnswer">
                        <Form.Label>입력</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="userMessage"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Send a message.."
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        전송하기
                    </Button>
                    <Link to="/feedback" className="btn btn-danger mx-3">
                        면접 종료
                    </Link>
                </Form>
            </div>
        </Container>
    );

}

export default Chat;
