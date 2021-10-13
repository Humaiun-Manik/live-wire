import React from 'react';
import './CoursesCard.css';
import { Card, Col } from 'react-bootstrap';

const CoursesCard = (props) => {
    const { courseName, duration, price, img } = props.course;

    return (
        < Col >
            <Card className="single-course box">
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

export default CoursesCard;