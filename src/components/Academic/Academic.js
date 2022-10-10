import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Academic.css';

const Academic = () => {
    const academicsDatas = useLoaderData();
    return (
        <div className='container mt-5 pt-5'>
            <Row xs={1} md={2} className="g-4">
                {
                    academicsDatas.map(ac_data =>
                        <Col key={ac_data.id}>
                            <Card>
                                <Card.Img variant="top" className='ac_image' src={ac_data.img} />
                                <Card.Body>
                                    <Card.Title>{ac_data.title}</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default Academic;