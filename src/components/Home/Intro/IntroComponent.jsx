import React from 'react';
import { Link } from 'react-router-dom';


const IntroComponent = ({ data, classStyle }) => {
    return (
        <div key={data.id} style={{ backgroundImage: `url(${data.img})`}} className={classStyle} >
            <Link to={`/${data.category}/${data.id}`}>
                <div className='intro-title'>
                        <div className='intro-title-head'>{data.title}</div>

                    <div className='intro-title-subhead'>{data.category} / {data.date}</div>
                </div>
            </Link>
        </div>

    )
}

export default IntroComponent;