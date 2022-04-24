import React, { useState } from 'react';
import BlogData from './../../BlogData';
import LatestStoriesComponent from './LatestStoriesComponent';
import './LatestStories.css';

const LatestStories = () => {

    const [postNumber, setPostNumber] =useState(10)

    return (
        <div className='LatestStories'>
            <div className='latest-stories-box'>
                <div className='latest-stories-heading'>Latest Stories</div>
                <div className='latest-stories-flex'>
                    {
                        BlogData.slice(7, postNumber).map((data, index) => (
                            <LatestStoriesComponent data={data} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className='view-more'onClick={() => setPostNumber(postNumber + 3)}>
                VIEW MORE <i> &#x2192;</i>
            </div>
        </div>
    );
}

export default LatestStories;