import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Dates/Dates Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const Dates = () => {
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    return(
        <div>
            <p className="universal-home"><Link to ="/">Andrew Spreck</Link></p>
            <p className="banner"><img src={Banner} alt="File not Found"/></p>
            <p className="title">Dates</p>
        <header>
            <br />
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
                    {/* Endpoint to route to Contact Us component */}
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
            <body className="dates-body">
            <h2>2022:</h2>
            <h3>Hire me for your event! Solo or duo with percussionist</h3>
            <h3>Thur. Feb 17 - Wyoming Area Creative Arts Community 10th Anniversary Celebration</h3>
            <h3>Hallberg Center For The Arts; I will be playing short sets between 5 and 7pm.</h3>

            <h3>Thur. Apr. 21 - Fireside Getaway - Forest Late; 7-9</h3>

            <h3>Thur. June 9 - Rush River Brewing Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>

            <h3>Thur. July 21 - Rush River Brewing Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>

            <h3>Thur. Aug 18 - Rush River Brewing Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>

            <h3>Thur. Sept 29 - Rush River Brewing Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>
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

export default Dates;
