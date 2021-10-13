import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import './MenuBar.css';
import img from '../../images/logo.jpg';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={img}
                    width="200"
                    height="50"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
                <Nav>
                    <Stack direction="horizontal" gap={4}>
                        <NavLink className="manu"
                            to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Home
                        </NavLink>
                        <NavLink className="manu"
                            to="/courses"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Courses
                        </NavLink>
                        <NavLink className="manu"
                            to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            About Us
                        </NavLink>
                        <NavLink className="manu"
                            to="/contact"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Contact Us
                        </NavLink>
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MenuBar;