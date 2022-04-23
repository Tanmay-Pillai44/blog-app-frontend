import React from 'react';
import Intro from './Intro/Intro';
import Latest from './Latest/Latest';

const Home = () => {
    return (
        <div className='Home'>
            <Intro />
            <Latest />
        </div>
    )
}

export default Home;