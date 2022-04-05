import React from 'react';
import { useNavigate } from 'react-router-dom';
import Car from '../../assets/Images/Car.jpg'
import useReviews from '../../hooks/useReviews'
import './Home.css';


const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate()

    return (
        <div>
            <div className='car-section'>
                <div className="banner-left">
                    <h2 className='text-3xl md:text-6xl font-bold'>Your next Cars</h2>
                    <h2 className='text-3xl md:text-6xl font-bold text-red-600 my-6'>Your Best Car</h2>
                    <p>It is my Dream Car.The car is very Beautiful. I am Car Lover...</p>
                    <button className="live-demo-btn">Live Demo</button>
                </div>
                <div className="img-right">
                <img width="80%" height=""src={Car} alt="" />
                    
                </div>
            </div>
            <div className='my-6'>
                <h2 className='text-center text-2xl md:text-5xl font-bold mb-6'>Customer Reviews (3)</h2>
                <div className='review-container'>
                    {
                        reviews.slice(0, 3).map(review => (
                            <div key={review._id} className='p-5 m-5 border-2 border-red-600 rounded bg-red-100'>
                                <h1 className='text-xl font-bold'>{review.name}</h1>
                                <p className='my-3'>{review.comment}</p>
                                <p>Ratting: <span className='text-red-600 font-bold'>{review.ratting}</span></p>
                            </div>
                        ))
                    }
                </div>
                <button onClick={() => navigate("/reviews")} className='all-reviews-btn'>View All Reviews</button>
            </div>
        </div>

    );
};

export default Home;