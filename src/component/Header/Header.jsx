import React from 'react';
import './Header.css'
import profile from '../../image/profile.png'
const Header = () => {
    return (
        <div className='header'>
            <h1>Dev <span className='logo'>Knowledge</span> </h1>
            <div className='manu'>
                <div>
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    <a href="/logout">Logout</a>
                </div>
                <div>
                    <img src={profile} alt="profile-image" />
                </div>
            </div>

        </div>
    );
};

export default Header;