import React from 'react';
import { Link } from 'react-router-dom';

const LatestArticlesComponent = ({ data }) => {
    return (
        <div className='LatestArticlesComponent' key={data.id}>
            <img src={data.img} alt="latest-article" />
            <div className='latest-article-flexbox'>
                <div>
                    <Link to={`/${data.category}/${data.id}`}>
                        <div className='latest-article-title'>
                            {data.title}
                        </div>
                    </Link>
                    <p>{data.description.substring(0, 150)}</p>
                </div>
                <div>
                    <span className='latest-article-type'>{data.category} </span>
                    <span className='latest-article-date'>/ {data.date}</span>
                </div>
            </div>
        </div>
    );
}

export default LatestArticlesComponent;