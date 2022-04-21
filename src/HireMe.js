import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Hire Me/Hire Me Banner.PNG";
import ReactPlayer from "react-player";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const HireMe = () => {
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    return(
        <div>
            <p className="universal-home"><Link to ="/">Andrew Spreck</Link></p>
            <p className="banner"><img src={Banner} alt="File not Found"/></p>
            <p className="title">Hire Me</p>
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
            <body className="hire-me-body">
            <h2>Live Performance</h2>
            <h3>I am a solo acoustic singer/songwriter/guitarist/harmonica player. I play all kinds of venues from coffee shops & cafes to tap rooms, bars, restaurants, wineries, house concerts, private parties, special events and more. I play an average of 30 shows per year with over 30 years of live performance experience.</h3>
            <h3>I perform a lively, inspiring blend of originals spanning classic rock/folk rock/Americana and some classic country. I also cover The Rolling Stones, Neil Young, Bob Dylan, The Band, The Allman Brothers and an array of familiar tunes in my own signature style.</h3>
            <h3>Check out some video performances of my original songs.</h3>
            <h3>I currently play solo acoustic with the option to add a hand drummer/percussionist at your request.</h3>
            <h3>Here is a short video montage of some popular songs that I cover.</h3>
            <ReactPlayer url={'https://www.youtube.com/watch?v=lDe8o981R1s'}>covers promo video</ReactPlayer>
            <h3>Reasonable rates- I can provide live music for much less than a full band. I can bring my own p.a. or use your house system.</h3>
            <h3>If you have any cancellations, I would be happy to fill in pending availability.</h3>
            <h2>Studio Sessions</h2>
            <h3>I play electric guitar as well as acoustic. If you need a soulful, gritty, bluesy, rock lead guitar track on your song, I can handle it. Most of my years of experience were playing classic rock and blues in bar bands. I can also add vocals and some harmonica. I have recorded several studio projects including recording "In the distance", "Devotion" and "Where I'm From" myself in my home studio. Send me a mix of your basic tracks, I'll send you back a WAV file of guitar or vocal.</h3>
            <h3>"You did a great job", "you have increased my pride in the tune", "I've got some good comments on it" -Tom Engelhardt, Song for Bernard, Into the nothin'</h3>
            <h2>Music Licensing</h2>
            <h3>If you are interested in using my songs for Movie, TV, Commercials or if you are an artist looking to record one of my songs, I will listen to your offer.</h3>
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

export default HireMe;
