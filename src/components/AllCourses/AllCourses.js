import React from 'react';
import { Row } from 'react-bootstrap';
import CoursesCard from '../CoursesCard/CoursesCard';
import useCourse from '../hooks/useCourses';

const AllCourses = () => {
    const [courses] = useCourse();

    return (
        <div style={{ backgroundColor: "#dddddd" }} className="all-courses pb-5">
            <div className="container">
                <h1 className="text-center pt-5 pb-4">Our All Courses</h1>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <CoursesCard
                            key={course.courseCode}
                            course={course}
                        ></CoursesCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default AllCourses;