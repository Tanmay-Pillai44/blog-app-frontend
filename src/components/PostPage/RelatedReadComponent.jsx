import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthorDetailsComponent from './AuthorDetailsComponent';

const RelatedReadComponent = ({ data }) => {

    const navigate =useNavigate();

    const clickHandler = () => {
        navigate(-1);
    }

    return (
        <div className='RelatedReadComponent' key={data.id}>
            <div className='related-reads-text'>Related reads</div>
            <img src={data.img} alt="related-read-img" className='related-read-img' />
            <Link onClick={clickHandler} to={`${data.category}/${data.id}`}>
                <div className='related-read-title'>
                    {data.title}
                </div>
            </Link>
            <AuthorDetailsComponent data={data} classStyle='written-by-hide' />
        </div>
    );
}

export default RelatedReadComponent;