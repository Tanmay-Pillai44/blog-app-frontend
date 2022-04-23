import React from 'react';
import { Link } from 'react-router-dom';

const LatestComponent = ({ data }) => {
    return (
        <div className='LatestComponent' key={data.id} >
            <img src={data.img} alt="latest-post" />
            <Link to={`/${data.category}/${data.id}`}>
                <div className='latest-post-title'>{data.title}</div>
            </Link>
            <p>{data.description.substring(0, 150)}</p>
            <div>
                <span className='latest-post-type'>{data.category} </span>
                <span className='latest-post-date'>/ {data.date}</span>
            </div>
        </div>
    );
}

export default LatestComponent;