import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function FileUpload() {
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileInputChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUploadButtonClick = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:8080/setting', formData);
            navigate('/chat');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Form>
                <h1 className="mt-5 d-flex justify-content-center align-items-center">Interview Chatbot</h1>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>파일 선택</Form.Label>
                    <Form.Control type="file" onChange={handleFileInputChange} />
                </Form.Group>
                <Button variant="primary" onClick={handleUploadButtonClick}>면접보러가기</Button>
            </Form>
        </div>
    );
}

export default FileUpload;
