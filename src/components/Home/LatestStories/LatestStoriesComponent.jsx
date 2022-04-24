import React from 'react';
import { Link } from 'react-router-dom';

const LatestStoriesComponent = ({ data }) => {
    return (
        <div className='LatestStoriesComponent' key={data.id} >
            <Link to={`/${data.category}/${data.id}`}>
                <div className='latest-stories-title'>{data.title}</div>
            </Link>
            <p>{data.description}</p>
            <div className='latest-stories-details'>
                <span className='latest-stories-type'>{data.category} </span>
                <span className='latest-stories-date'>/ {data.date}</span>
            </div>
        </div>
    );
}

export default LatestStoriesComponent;