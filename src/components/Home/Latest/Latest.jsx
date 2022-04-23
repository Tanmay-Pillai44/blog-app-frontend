import React from 'react';
import './Latest.css';
import LatestComponent from './LatestComponent';
import BlogData from '../../BlogData';

const Latest = () => {
    return (
        <div className='Latest'>
            <div className='latest-box'>
                <div className='latest-heading'>The Latest</div>
                <div className='latest-flex-container'>
                    {
                        BlogData.filter((item) => item.id === 0).map(
                            (data, index) => (
                                <LatestComponent data={data} key={index} />
                            )
                        )
                    }
                    {
                        BlogData.filter((item) => item.id === 12).map(
                            (data, index) => (
                                <LatestComponent data={data} key={index} />
                            )
                        )
                    }
                    {
                        BlogData.filter((item) => item.id === 21).map(
                            (data, index) => (
                                <LatestComponent data={data} key={index} />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Latest;