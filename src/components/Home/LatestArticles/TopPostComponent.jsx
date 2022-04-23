import React from 'react';
import { Link } from 'react-router-dom';

const TopPostComponent = ({data}) => {
    return (
        <div key={data.id} className='TopPostComponent'>
            <img src={data.img} alt="top-post" />
            <div className='top-post-flexbox'>
                <div>
                    <Link to={`/${data.category}/${data.id}`}>
                        <div className='top-post-title'>
                            {data.title.substring(0, 42)}
                        </div>
                    </Link>
                </div>
                <div>
                    <span className='top-post-type'>{data.category}</span>
                    <span className='top-post-date'>{data.date}</span>
                </div>
            </div>
        </div>
    );
}

export default TopPostComponent;