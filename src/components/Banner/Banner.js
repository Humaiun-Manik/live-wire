import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCourse from '../hooks/useCourses';
import PopularCourses from '../PopularCourses/PopularCourses';
import './Banner.css';

const Banner = () => {
    const [courses] = useCourse();
    const popularCourses = courses.slice(0, 6);

    return (
        <>
            <div className="banner-container mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <h1 className="title">Be a Certified Ethical Hacker</h1>
                            <h4 className="text-white mt-3">Beginners / Intermediate Courses by Livewire</h4>
                            <Link to="/contact">
                                <button className="mt-5 view-btn">Contact Us</button>
                            </Link>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="mb-5 popular-courses">
                    <h3 className="text-center">OUR POPULAR COURSES</h3>
                    <p className="text-center">Here you can find our all latest courses. Choose some of them and try to grow up your skills.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        popularCourses.map(course => <PopularCourses
                            key={course.courseCode}
                            course={course}
                        ></PopularCourses>)
                    }
                </Row>
            </div >
            <div className="container text-center">
                <Link to="/courses">
                    <button className="all-courses-btn btn-regular">View All Courses</button>
                </Link>
            </div>
        </>
    );
};

export default Banner;