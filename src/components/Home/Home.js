import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Notices from '../Notices/Notices';

const Home = () => {
    const notices = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Notices notices={notices}></Notices>
        </div>
    );
};

export default Home;