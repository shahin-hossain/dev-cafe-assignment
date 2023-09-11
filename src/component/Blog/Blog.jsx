import React, { useEffect, useState } from 'react';
import './Blog.css'
import Content from '../Content/Content';
import Bookmarks from '../Bookmarks/Bookmarks';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='blogs'>
            <div>
                {blogs.map(blog => <Content blog={blog} key={blog.id}></Content>)}
            </div>
            <div>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Blog;