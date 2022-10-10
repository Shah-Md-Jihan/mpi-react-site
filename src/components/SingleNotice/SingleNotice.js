import React from 'react';
import { Link } from 'react-router-dom';
import './SingleNotice.css';

const SingleNotice = ({ notice }) => {
    const { title, body } = notice;
    return (
        <div className='border border-info mb-2 text-start p-3 rounded-2'>
            <h5>{title}</h5>
            <p>{body}</p>
            <div className='nc_button'>
                <Link className='text-decoration-none text-danger'>Read More...</Link>
            </div>
        </div>
    );
};

export default SingleNotice;