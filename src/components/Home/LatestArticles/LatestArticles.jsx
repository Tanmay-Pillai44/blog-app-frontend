import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LatestArticles.css';
import BlogData from '../../BlogData';
import LatestArticlesComponent from './LatestArticlesComponent';
import CarouselComponent from './CarouselComponent';
import TopPostComponent from './TopPostComponent';

const LatestArticles = () => {

    const [postNumber, setPostNumber] = useState(7);

    return (
        <div className='LatestArticles'>
            <div className='latest-articles-heading'>Latest Articles</div>
            <div className='latest-articles-box'>
                <div className='latest-articles-left'>
                    {
                        BlogData.slice(3, postNumber).map((data, index) => (
                            <LatestArticlesComponent data={data} key={index} />
                        ))
                    }
                    <div className='load-more' onClick={() => setPostNumber(postNumber + 2)}>
                        <i>&#x2193; </i>  LOAD MORE
                    </div>
                    <CarouselComponent />
                </div>
                <div className='latest-articles-right'>
                    <div className='advertisement-box'>Advertisement</div>
                    <div className='top-post-heading'>Top Posts</div>
                    <div className='top-post-flexbox'>
                        <img src={BlogData[16].img} alt="top-post" />
                        <Link to={`/${BlogData[16].category}/${BlogData[16].id}`}>
                            <div className='top-post-title'>{BlogData[16].title}</div>
                        </Link>
                        <div className='top-post-details'>
                            <span className='top-post-type'>{BlogData[16].category} </span>
                            <span className='top-post-date'>/ {BlogData[16].date}</span>
                        </div>
                        {
                            BlogData.slice(4, 7).map((data, index) => (
                                <TopPostComponent data={data} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticles;