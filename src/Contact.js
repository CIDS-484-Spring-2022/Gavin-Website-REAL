import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Contact/Contact Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const Contact = () => {
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
            <p className="title">Contact</p>

            <body className="contact-body">
            <center><h3>Looking to hire me for an event? Send me a message with your name and email address so I know you're interested.</h3></center>
            <form action="https://submit-form.com/ZzZdc5Zl">
                <center><label htmlFor="name">Please Enter Your Name</label>
                <br></br>
                <input type="text" id="name" name="name" placeholder="Name" required=""/>
                <br></br>
                <br></br>
                <label htmlFor="email">Email</label>
                <br></br>
                <input type="email" id="email" name="email" placeholder="Email" required=""/>
                <br></br>
                <br></br>
                <label htmlFor="message">Message</label>
                <br></br>
                <textarea id="message" name="message" placeholder="Message" required=""></textarea>
                <br></br>
                <br></br>
                <button type="submit">Send</button>
                </center></form>
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
