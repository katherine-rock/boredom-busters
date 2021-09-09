import React from 'react';
import header_icon from '../../images/header_icon.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="title_with_image">
                <h1 className="main_heading">Boredom Busters</h1>
                <img src={header_icon} alt="Bee" />
            </div>

            <div className="intro_text">
                <p>Looking for something to do?</p>
                <p>Choose a category below to get a suggested activity.</p>
            </div>
        </div>
    )
}

export default Header;