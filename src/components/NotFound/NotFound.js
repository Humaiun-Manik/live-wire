import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <Link className="back-btn" to="/home">
                    <button>Return to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;