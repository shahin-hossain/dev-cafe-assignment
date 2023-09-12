import React from 'react';
import './Bookmark.css'
const Bookmarks = ({ bookmarks }) => {


    return (
        <div>
            <div className='bookmark-container'>
                <h2>Bookmark Blogs: {bookmarks.length} </h2>
                {bookmarks.map(blog => <p className='bookmark-blogs' key={blog.id}>{blog.title} </p>)}
            </div>
        </div>
    );
};

export default Bookmarks;