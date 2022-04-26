import React from 'react';
import BlogData from '../../BlogData';
import IntroComponent from './IntroComponent';
import './intro.css';


const Intro = () => {

    return (
        <div className='Intro'>
            {
                BlogData.filter((item) => item.id === 0).map((data, index) => (
                    <IntroComponent data={data} classStyle='classStyle1' key={index} />
                ))
            }
            {
                BlogData.slice(1, 3).map((data, index) => (
                    <IntroComponent data={data} classStyle='classStyle2' key={index} />
                ))
            }
        </div>
    )
}

export default Intro;