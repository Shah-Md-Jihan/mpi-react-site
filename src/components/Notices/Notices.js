import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SingleNotice from '../SingleNotice/SingleNotice';

const Notices = ({ notices }) => {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <Card className='mt-5'>

                        <Card.Body>
                            <Card.Title>
                                <h4 className='text-start pb-3'>Latest Notice</h4>
                            </Card.Title>
                            <Card.Text>

                                {
                                    notices.slice(0, 10).map(notice => <SingleNotice key={notice.id} notice={notice}></SingleNotice>)
                                }
                            </Card.Text>
                            <Button variant="primary">Load More</Button>
                        </Card.Body>

                    </Card>
                </Col>
                <Col sm={4} className='py-5'>
                    <Card className='w-100'>
                        <Card.Img variant="top" src="https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6941.jpg?w=740&t=st=1665399348~exp=1665399948~hmac=b5c00b5912ad33b3ae082f1e9b0c637c9dfb140580bb72faff468ca5c86f0090" />
                        <Card.Body>
                            <Card.Title>Mr. Nasir Jamshed</Card.Title>
                            <Card.Text>
                                principal of MPI Institute & Technology.
                            </Card.Text>
                            <Button variant="info text-white">View More</Button>
                        </Card.Body>
                    </Card>
                    <Card className='w-100 mt-4'>
                        <Card.Title className='pt-2'>National Anthem</Card.Title>
                        <Card.Body>
                            <audio controls src='./audio/audio.mp3'></audio>
                        </Card.Body>
                    </Card>
                    <Card className='w-100 mt-4'>
                        <Card.Title className='pt-2'>Video Gallery</Card.Title>
                        <Card.Body>
                            <div class="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Notices;