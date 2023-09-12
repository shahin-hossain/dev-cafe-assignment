import React, { useEffect, useState } from 'react';
import './Blog.css'
import Content from '../Content/Content';
import Bookmarks from '../Bookmarks/Bookmarks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]); //bookmark added state
    const [min, setMin] = useState(0); // spend time state
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    // bookmark handle function
    const bookmarkHandle = (blogItem) => {
        const newBookmark = blogs.find(blog => blog.id === blogItem.id);
        const oldBookmark = bookmarks.find(blog => blog.id === blogItem.id);

        if (newBookmark !== oldBookmark) {
            setBookmarks([...bookmarks, newBookmark]);
            toast.success('Bookmark Added', { //success toast
                position: 'bottom-right',
                hideProgressBar: true,
            })
        }
        else {
            toast.warn('You Have Already Bookmarked This Blog', { //warning toast
                position: 'bottom-right',
                hideProgressBar: true,
            })
        }
    }
    //spend Time Function from ( Mark as read) button
    const spentTimeHandle = (blog) => {

        setMin(min + blog.readTime)
    }

    return (
        <div className='blogs'>
            <div>
                {blogs.map(blog => <Content blog={blog} key={blog.id} bookmarkHandle={bookmarkHandle} spentTimeHandle={spentTimeHandle}></Content>)}

            </div>
            <div>
                <h2 className='spent-read-time'>Spent time on read: {min} min</h2>

                <Bookmarks bookmarks={bookmarks}></Bookmarks>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Blog;