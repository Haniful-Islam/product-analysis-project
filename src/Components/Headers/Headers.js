import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Headers = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/reviews">Reviews</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Headers;