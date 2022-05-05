import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Dates/Dates Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const Dates = () => {
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}

    return(
        <div>
            <div className="new-nav-container"><center>
                <div className="new-nav"><Link to="/">Home Page</Link></div>
                <div className="new-nav"><Link to="/AboutMe">About Me</Link></div>
                <div className="new-nav"><Link to="/Dates">Dates</Link></div>
                <div className="new-nav"><Link to="/HireMe">Hire Me</Link></div>
                <div className="new-nav"><Link to="/Contact">Contact</Link></div>
                <div className="new-nav"><Link to="/Photos">Photos</Link></div>
                <div className="new-nav"><Link to="/Videos">Videos</Link></div>
                <div className="new-nav"><Link to="/YbYR">Year By Year Review</Link></div>
                <div className="new-nav"><Link to="/Resistors">Resistors</Link></div>
            </center></div>
            <p className="universal-home"><Link to ="/">Andrew Spreck</Link></p>
            <p className="banner"><img src={Banner} alt="File not Found"/></p>
            <p className="title">Dates</p>

            <body className="dates-body">
            <h2>2022:</h2>
            <h3><a href="/HireMe">Hire me</a> for your event! Solo or duo with percussionist</h3>
            <h3>Thur. Feb 17 - <a href="https://wyomingcreativearts.org/upcoming-events-calendar1/282-wyoming-creative-area-arts-community-10th-anniversary" target="_blank" rel="noreferrer">Wyoming Area Creative Arts Community 10th Anniversary Celebration</a></h3>
            <h3>Hallberg Center For The Arts; I will be playing short sets between 5 and 7pm.</h3>

            <h3>Thur. Apr. 21 - <a href="https://fireside-getaway.com/" target="_blank" rel="noreferrer">Fireside Getaway</a> - Forest Late; 7-9</h3>

            <h3>Thur. June 9 - <a href="http://rushriverbeer.com/" target="_blank" rel="noreferrer">Rush River Brewing</a> Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>

            <h3>Thur. July 21 - <a href="http://rushriverbeer.com/" target="_blank" rel="noreferrer">Rush River Brewing</a> Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>

            <h3>Thur. Aug 18 - <a href="http://rushriverbeer.com/" target="_blank" rel="noreferrer">Rush River Brewing</a> Farmer's Market *ALL ORIGINAL SHOW*</h3>
            <h3>River Falls, WI; 5:50-7:30</h3>

            <h3>Thur. Sept 29 - <a href="http://rushriverbeer.com/" target="_blank" rel="noreferrer">Rush River Brewing</a> Farmer's Market *ALL ORIGINAL SHOW*</h3>
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
