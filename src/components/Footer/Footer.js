import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-content'>
                <div className='container socials'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-google-plus-g"></i>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="container pt-5 pb-5">
                    <Row xs={1} md={3} className="g-4">
                        <Col className="col-md-6 address">
                            <p><i className="fas fa-map-marker-alt"></i>Plashbari, Gaibantha, Bangladesh</p>
                            <p><i className="fas fa-envelope"></i>Official: livewire@gmail.com</p>
                            <p><i className="fas fa-phone-alt"></i>Helpline: 01774446071 (Available: 10:00am to 09:00pm)</p>
                        </Col>
                        <Col className="col-md-3">
                            <Stack direction="vertical" gap={4}>
                                <Link to='/home' className="menu-item">Home</Link>
                                <Link to='/courses' className="menu-item">Courses</Link>
                                <Link to='/about' className="menu-item">About Us</Link>
                                <Link to='/contact' className="menu-item">Contact Us</Link>
                            </Stack>
                        </Col>
                        <Col className="col-md-3">
                            <img className="pay-with" src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                        </Col>
                    </Row>
                    <hr className="horizontal-line" />
                    <p className="copyright">© 2021 Livewire Learning Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;