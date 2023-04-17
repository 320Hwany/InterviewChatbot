import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {
    return (
        <div className="container py-5">
            <h1
                className="mt-5 d-flex justify-content-center align-items-center"
                style={{ fontSize: '4rem' }}>
                Interview Chatbot
            </h1>
            <div className="d-flex justify-content-center align-items-center my-5">
                <Link to="/home" className="btn btn-primary mx-3">
                    간편 면접보러가기
                </Link>
                <Link to="/fileUpload" className="btn btn-primary mx-3">
                    이력서 기반 면접보러가기
                </Link>
            </div>
        </div>
    );
}

export default Welcome;
