import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [fields, setFields] = useState('');
    const [age, setAge] = useState('');
    const [career, setCareer] = useState('');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();
    const [responseMessage, setResponseMessage] = useState('');


    const handleSetting = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8080/setting', { fields, age, career, company })
            .then((res) => {
                setResponseMessage(res.data.firstMessage);
                navigate('/chat', { state: { responseMessage: res.data.firstMessage } });
                console.log(res.data.firstMessage);
            })
            .catch((err) => {
                navigate('/chat');
            });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="col-md-4">
                <h1 className="mt-5 d-flex justify-content-center align-items-center">Interview Chatbot</h1>
                <Form className="my-3" onSubmit={handleSetting}>
                    <Form.Group className="mb-3" controlId="formBasicFields">
                        <Form.Label>분야</Form.Label>
                        <Form.Control
                            type="fields"
                            name="fields"
                            value={fields}
                            onChange={(e) => setFields(e.target.value)}
                            placeholder="분야를 입력하세요"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAge">
                        <Form.Label>나이</Form.Label>
                        <Form.Control
                            type="age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="나이를 입력하세요."
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCareer">
                        <Form.Label>경력 및 프로젝트 사항</Form.Label>
                        <Form.Control
                            type="career"
                            name="career"
                            value={career}
                            onChange={(e) => setCareer(e.target.value)}
                            placeholder="경력을 입력하세요."
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCompany">
                        <Form.Label>지원 회사</Form.Label>
                        <Form.Control
                            type="company"
                            name="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="회사를 입력하세요."
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        면접보러가기
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Home;