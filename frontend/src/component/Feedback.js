import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function Feedback() {
    const [chatFeedbackList, setChatFeedbackList] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8080/feedback")
            .then((response) => {
                setChatFeedbackList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const groupedChatFeedbackList = chatFeedbackList.reduce((result, current) => {
        (result[current.userMessage] = result[current.userMessage] || []).push(
            current
        );
        return result;
    }, {});

    const handleShow = (feedback) => {
        setSelectedFeedback(feedback);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <div style={{backgroundColor: "#f5f5f5", padding: "20px"}}>
            <h2 style={{color: "#555", marginBottom: "20px", textAlign: "center"}}>
                GPT Feedback List
            </h2>
            <Table striped bordered hover>
                <thead>
                <tr style={{backgroundColor: "#e0e0e0", color: "#444"}}>
                    <th>GPT Question</th>
                    <th>User answer</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {Object.keys(groupedChatFeedbackList).map((userMessage) => (
                    <React.Fragment key={userMessage}>
                        {groupedChatFeedbackList[userMessage].map((feedback) => (
                            <tr key={feedback.id}>
                                <td>{feedback.gptQuestion}</td>
                                <td>{feedback.userMessage}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleShow(feedback)}>
                                        Details
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Feedback Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><b>GPT Message:</b> {selectedFeedback.gptMessage}</p>
                    <p><b>Feedback Message:</b> {selectedFeedback.feedbackMessage}</p>
                    <p><b>Mix Message:</b> {selectedFeedback.mixMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer></Modal>
        </div>
    );
}

export default Feedback;