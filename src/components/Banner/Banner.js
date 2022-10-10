import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className="background-content">
                <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='text-white mt-5'>Welcome to MPI Institute & Technology!</h1>
                        <p className='text-white fs-5'>To grow up your knowledge you can join us. We provide you best educational process to gain your goal.</p>
                        <Button variant="outline-info" className='text-white'>Get Admitted</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;