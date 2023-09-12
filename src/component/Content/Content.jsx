import React from 'react';
import './Content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Content = ({ blog, bookmarkHandle, spentTimeHandle }) => {
    const { coverImage, title, author, readTime, publishDate } = blog;


    return (
        <div className='blog'>
            <img src={coverImage} alt="Cover Image" />

            <div className='author-info'>
                <div className='author-details'>
                    <img src={author.image} alt="" />
                    <div >
                        <h5 className='author-name'>{author.name}</h5>
                        <p className='publish-date'>{publishDate}</p>
                    </div>
                </div>
                <div className='bookmark'>
                    <p>{readTime} min read </p>
                    <button onClick={() => bookmarkHandle(blog)} className='btn-bookmark'> <FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
            <h2>{title}</h2>
            <a onClick={() => spentTimeHandle(blog)} className='read-mark' style={{ textAlign: 'start', display: 'block', cursor: 'pointer' }}>Mark as read  </a>
        </div>
    );
};

export default Content;