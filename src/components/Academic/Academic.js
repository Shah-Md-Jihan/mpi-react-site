import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
                                    <Card.Title>
                                        <Link className='text-decoration-none text-dark' to="/academic">{ac_data.title}</Link>
                                    </Card.Title>
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