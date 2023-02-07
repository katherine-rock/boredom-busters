import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>          
            <div className="ApiInfoSection">
                <p>All the activities listed here are supplied by Bored API.</p>
                <p>You can learn more at:</p>
                <a 
                    href="https://www.boredapi.com/documentation"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://www.boredapi.com/documentation</a>
            </div>

            <div className="copyrightSection">
                <p>Copyright &copy; Katherine Rock 2023</p>
                <br />
            </div>
        </div>
    )
}

export default Footer;