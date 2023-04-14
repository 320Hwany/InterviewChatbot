import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function Feedback() {
    const [chatFeedbackList, setChatFeedbackList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/feedback')
            .then((response) => {
                setChatFeedbackList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
            <h2 style={{ color: '#555', marginBottom: '20px', textAlign: "center" }}>GPT Feedback List</h2>
            <Table striped bordered hover>
                <thead>
                <tr style={{ backgroundColor: '#e0e0e0', color: '#444' }}>
                    <th>User Message</th>
                    <th>Feedback Message</th>
                </tr>
                </thead>
                <tbody>
                {chatFeedbackList.map((chatFeedback) => (
                    <tr key={chatFeedback.id}>
                        <td>{chatFeedback.userMessage}</td>
                        <td>{chatFeedback.feedbackMessage}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Feedback;
