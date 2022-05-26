import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import BlogData from '../BlogData';
import AuthorDetailsComponent from './AuthorDetailsComponent';
// import RelatedReadComponent from './RelatedReadComponent';
import './PostPage.css';
import axios from 'axios';
import SpinnerComp from '../Spinner/SpinnerComp';

const PostPage = () => {
    const { category, id } = useParams();
    const [blogData, setBlogData] = useState({});
    const [blogTags, setBlogTags] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        axios.get(`https://sheltered-fjord-87205.herokuapp.com/api/article/${id}`)
            .then(response => {
                setBlogData(response.data.data);
                setBlogTags(response.data.data.tags)
                setLoading(true)
            })
            .catch(err => {
                console.log(err);
            })

    }, [category, id]);

    return (
        <>
            {
                loading ?
                <div className='PostPage'>
                {
                    blogData ? <div>
                            <div key={blogData.id} className='post-page-box'>
                                <div className='post-page-title'>
                                    {blogData.title}
                                    <div className='author-flexbox'>
                                        <AuthorDetailsComponent data={blogData} classStyle='written-by-hide' />
                                        <div className='social-btns'>
                                            <a href="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter-square"></i></a>
                                            <a href="https://www.facebook.com/login.php/" target="blank"><i className="fab fa-facebook-square"></i></a>
                                            <a href="https://www.instagram.com/accounts/login/" target="blank"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <img src={blogData.img} className="post-page-img" alt="blogData-img" />
                                    <div className='post-page-para' dangerouslySetInnerHTML={{__html: blogData['para'] }}></div>
                                    <div className='post-page-tags-box'>
                                        {
                                            blogTags.map((item, index) => (
                                                <span key={index}>{item}</span>
                                            ))
                                        }
                                    </div>
                                    {/* add likes later */}
                                    <div className='written-by-box'>
                                        <AuthorDetailsComponent data={blogData} classStyle='written-by' />
                                    </div>
                                </div>
                            </div>
                            {/* <div className='related-read-box'>
                                <div className='related-read-innerbox'>
                                    <div className='more-from-siren'>More From The Siren</div>
                                    <div className='related-read-flexbox'>
                                        {
                                            BlogData.filter((item) => item.author === blogData.author).slice(1, 4).map((data, index) => (
                                                <RelatedReadComponent data={data} key={index}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div> */}
                        </div> : null
                }
            </div> : <SpinnerComp />
            }
        </>
    );
}

export default PostPage;