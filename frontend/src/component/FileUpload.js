import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function FileUpload() {
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const [responseMessage, setResponseMessage] = useState('');

    const handleImageInputChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleUploadButtonClick = () => {
        const formData = new FormData();
        formData.append('image', image, 'image.pdf');

        axios.post('http://localhost:8080/withImg', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(res => {
            setResponseMessage(res.data.firstMessage);
            navigate('/chat', { state: { responseMessage: res.data.firstMessage } });
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <Form className="mt-5">
                <h1 style={{fontSize: '3em'}} className="my-5 d-flex justify-content-center align-items-center">이력서 첨부</h1>
                <Form.Group controlId="formFile" className="mb-2">
                    <Form.Control type="file" onChange={handleImageInputChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleUploadButtonClick} className="mt-3">면접보러가기</Button>
            </Form>
        </div>
    );
}

export default FileUpload;

