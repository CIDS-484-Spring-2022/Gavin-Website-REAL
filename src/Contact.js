import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Contact/Contact Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const Contact = () => {
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    return(
        <div>
            <p className="universal-home"><Link to ="/">Andrew Spreck</Link></p>
            <p className="banner"><img src={Banner} alt="File not Found"/></p>
            <p className="title">Contact</p>
        <header>
            <br /> {/*Line Break */}
            <ul className="nav">
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/Dates">Dates</Link>
                </li>
                <li>
                    {/* Endpoint to route to Hire Me component */}
                    <Link to="/HireMe">Hire Me</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact component */}
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    {/* Endpoint to route to Photos component */}
                    <Link to="/Photos">Photos</Link>
                </li>
                <li>
                    {/* Endpoint to route to Videos component */}
                    <Link to="/Videos">Videos</Link>
                </li>
                <li>
                    {/* Endpoint to route to YbYR component */}
                    <Link to="/YbYR">YbYR</Link>
                </li>
                <li>
                    {/* Endpoint to route to Resistors component */}
                    <Link to="/Resistors">Resistors</Link>
                </li>
            </ul>
            </header>
            <body className="contact-body">

            </body>
            <div className="scrollToTop">
                <div onClick={scroll}>
                    <img src={arrowIcon} alt='Go to top'/>
                </div>
            </div>
            <footer className="footer"><center>All music and content ©Andrew J. Spreck, all rights reserved, unauthorized use is a violation of applicable laws.</center></footer>
        </div>
    );
};

export default Contact;
