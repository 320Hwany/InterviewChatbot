import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [fields, setFields] = useState('');
    const [age, setAge] = useState('');
    const [career, setCareer] = useState('');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');

    const handleImageInputChange = (e) => {
        if (!e.target.files.length) {
            setImage(new File([], "empty"));
        } else {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSetting({
            fields: fields || '',
            age: age || '',
            career: career || '',
            company: company || '',
        }, image || new File([], "empty"));
    };

    const handleSetting = (chatSetting, imageFile) => {
        const formData = new FormData();

        const json = JSON.stringify(chatSetting);
        const blob = new Blob([json], { type: "application/json" });
        formData.append('chatSetting', blob);

        if (imageFile !== '') { // 이미지가 선택된 경우에만 formData에 추가
            formData.append('image', imageFile);
        }

        axios
            .post('http://localhost:8080/setting', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => {
                setResponseMessage(res.data.firstMessage);
                navigate('/chat', { state: { responseMessage: res.data.firstMessage } });
            })
            .catch((err) => {
                navigate('/chat');
            });
    };


    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div className="col-md-4">
                <h1 className="mt-5 d-flex justify-content-center align-items-center">Interview Chatbot</h1>
                <Form className="my-3" onSubmit={handleSubmit}>
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

                    <Form.Group className="mt-5" controlId="formFile">
                        <h2 className="my-4 d-flex justify-content-center align-items-center">이력서를 첨부해주세요</h2>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" onChange={handleImageInputChange} />
                        </Form.Group>
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