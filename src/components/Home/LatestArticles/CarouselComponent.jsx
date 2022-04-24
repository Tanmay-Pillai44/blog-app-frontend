import React from 'react';
import BlogData from '../../BlogData';
import { Link } from 'react-router-dom';

const CarosuelComponent = () => {
    return (
        <div id="CarouselComponent" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
                <li data-target="#CarosuelComponent" data-slide-to="0" className="active"></li>
                <li data-target="#CarosuelComponent" data-slide-to="1"></li>
                <li data-target="#CarosuelComponent" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={BlogData[13].img} alt="Slide1" width="800" height="450" />
                    <div className="carousel-caption">
                        <Link to={`/${BlogData[13].category}/${BlogData[13].id}`}><h3>{BlogData[13].title}</h3></Link>
                        <p>{BlogData[13].category} {BlogData[13].date}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={BlogData[14].img} alt="Slide1" width="800" height="450" />
                    <div className="carousel-caption">
                        <Link to={`/${BlogData[14].category}/${BlogData[14].id}`}><h3>{BlogData[14].title}</h3></Link>
                        <p>{BlogData[14].category} {BlogData[14].date}</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={BlogData[15].img} alt="Slide1" width="800" height="450" />
                    <div className="carousel-caption">
                        <Link to={`/${BlogData[15].category}/${BlogData[15].id}`}><h3>{BlogData[15].title}</h3></Link>
                        <p>{BlogData[15].category} / {BlogData[15].date}</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#CarosuelComponent" data-slide="prev" >
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#CarosuelComponent" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    )
}

export default CarosuelComponent;

