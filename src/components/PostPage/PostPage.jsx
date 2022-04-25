import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogData from '../BlogData';
import AuthorAvatar from './../../images/avatar.png';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const PostPage = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        let blog = BlogData.find(blog => blog.id === parseInt(id));
        if (blog) {
            setBlog(blog);
        }
    }, [id]);

    return (
        <div className='PostPage'>
            {
                blog ? <div>
                        <div key={blog.id} className='post-page-box'>
                            <div className='post-page-title'>
                                {blog.title}
                                <div className='author-flexbox'>
                                    <div className='author-details-flexbox'>
                                        <div className='author-avatar'>
                                            <Stack direction="row" spacing={2}>
                                                <Avatar src={AuthorAvatar}></Avatar>
                                            </Stack>
                                        </div>
                                        <div className='author-details'>
                                            <Link to={`/${blog.category}/${blog.id}/${blog.author}`}>
                                                <div className='author-name'>{blog.author}</div>
                                            </Link>
                                            <div className='author-date'>
                                                {blog.date} . {blog.readTime}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='social-btns'>
                                        <a href="https://twitter.com/i/flow/login" target="blank"><i className="fab fa-twitter-square"></i></a>
                                        <a href="https://www.facebook.com/login.php/" target="blank"><i className="fab fa-facebook-square"></i></a>
                                        <a href="https://www.instagram.com/accounts/login/" target="blank"><i class="fa fa-instagram"></i></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> : null
            }
        </div>
    );
}

export default PostPage;