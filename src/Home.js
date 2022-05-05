import React, {useState} from 'react';
import {Link } from "react-router-dom";
import Banner from "./Pictures/Home/Banner.PNG";
import './Styles.css'
import {images} from "./CarouselData";
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import arrowIcon from "./Pictures/arrowIcon.png";


const Home = () => {
    const [currImg, setCurrImg] = useState(2)
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    {/* useState sets it so that I can have a certain stated number that can be changed while rotating through images on the carousel */}

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
            <p className="title">Home Page</p>

            <body className="home-body">
            <h2><center>Check Out My New CD "Where I'm From"</center></h2>
            <h3><center>Available now on your favorite streaming service along with my entire catalog!</center></h3>

            <center><div className="carousel">
                <div className="carouselInner" style={{backgroundImage: `url(${images[currImg].img})`}}>
                    <div className="left" onClick={()=> {currImg > 0 && setCurrImg(currImg-1)}}>
                        <ArrowBackIcon />
                    </div>
                    <div className="center"> </div>
                    <div className="right" onClick={()=> {currImg < 2 && setCurrImg(currImg+1)}}>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </div></center>

            <h4 className="home-text">Singer/songwriter Andrew Spreck digs deep into classic rock, folk rock, classic country…anything with soul and passion to deliver a lively, inspiring blend of original material and cover songs.
                Andrew “keeps music live” by averaging 30 live shows a year—frequently accompanied by a percussionist—with 30+ original songs rotating throughout his performances and more songs than he can play in one sitting, Andrew’s set list changes with every show.
                Spreck is in his 30th year as a performing musician. In 2011 he transitioned from lead guitarist/lead vocalist playing in rock & blues cover bands to blossom into an outstanding solo acoustic artist.
                While his first solo cd of original music titled “In the distance” is reminiscent of his electric rock background, it also foreshadows the future with a handful of acoustic-driven songs. The follow-up “Devotion”, released mid-2014 is a true snapshot of the life he’s been living. Roughly half of the songs on Devotion were born directly from the solo acoustic experience. His 3rd release, “Where I’m From” is a return to his electric guitar roots. It consists of original, gritty, blues-rock songs delivered with a full-band sound like back in his early days, bending strings and making the electric guitar wail, cry and sing.
                In this electronic age of limitless personal jukeboxes, Andrew’s music is down-home, celebrating a simpler time when music was honest, earthy and came from the heart and soul.
                Thanks for listening and “Keep music LIVE!”
                Andrew</h4>
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

export default Home;
