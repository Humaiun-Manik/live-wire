import React from 'react';
import './PopularCourses.css';
import { Card, Col } from 'react-bootstrap';


const PopularCourses = (props) => {
    const { courseName, duration, price, img } = props.course;

    return (
        < Col >
            <Card className="box">
                <Card.Img style={{ height: '250px' }} variant="top" src={img} />
                <Card.Body>
                    <h3>{courseName}</h3>
                    <p>Duration: {duration}</p>
                    <h5>Price: {price}$</h5>
                    <button className="btn-regular">Join Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PopularCourses;