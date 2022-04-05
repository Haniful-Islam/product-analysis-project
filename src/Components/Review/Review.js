import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className='all-review-container'>
            <div className='p-5 m-5 border-2 border-lime-600 rounded bg-purple-100'>
                <h2 className='text-xl font-bold'>{name}</h2>
                <p className='my-3'>{comment}</p>
                <p>Ratting: <span className='text-black-600 font-bold'>{rating}</span></p>
            </div>
        </div>
    );
};

export default Review;