import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Resistors/Resistors Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const Resistors = () => {
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
            <p className="title">Resistors</p>

            <body className="resistors-body">
            <h1>The Resistors</h1>
            <h3>The vision that would become The Resistors came to realization in April of 1994 when drummer John Hill joined Jeff, Andy and Mark Ruud in a jam session at Andy's house. John was the final piece needed to complete the group. Rooted in bluesy double-guitar rock, the guitar work between Jeff and Andy would be the driving force in the early Resistors sound. As the band started gigging and built up a small following at smoky roadhouses, the focus would widen to include harmony vocals between John and Andy.</h3>
            <h3>In April of 1997, Jeff left the band to spend more time with his growing family. Acting quickly, long-time friend Greg Ristow stepped in with rhythm guitar in hand. Bringing his raunchy, thick sound to the band, the rhythm section of the Resistors was transformed to allow Andy to concentrate more on guitar leads and singing. Greg also brought a desire to write and perform original music. The guys began rehearsing several original tunes for the set list.</h3>
            <h3>June of 1999 saw the addition of soundman Steve Ryan. Stevo's expertise elevated the band's live sound to the next level.</h3>
            <h3>In January of 2001 the band headed to Stevo’s 10db Recording Studios to start laying down basic tracks for their debut cd. Along the way Greg's increasingly busy work schedule was making it difficult for him to bring his energy to the band. Greg decided to leave the band midway through the year. John, Mark and Andy continued rehearsing and recording new original material for the cd which was completed late in 2001 with a marathon 16 hour studio mixing session. "Eleven" was released in January 2002.</h3>
            <h3>Late 2002 and early 2003 saw the addition of "Banjo" Bob Huber on rhythm guitar and the departure of bassist Mark Ruud who was replaced by Tom Doran. Once again the band evolved and the set list went through a major overhaul. The band began gigging again with renewed enthusiasm.</h3>
            <h3>2004 got off to a busy start and would turn out to be the busiest year in the history of the band. The guys played at several clubs for the first time including The Pullman in Shakopee, Floyd's in Victoria and Hook's Roadhouse in East Bethel. Along the way they met many new friends and "partied like they never partied before!" The band also got its first radio airplay on KWOM 1600 AM to promote a gig at the Hollywood Sports Complex. The 12 minute promo featured 4 songs from their cd. To wind down the year, the band took a few months off from gigging to welcome a new baby and used the break to work up 17 new originals.</h3>
            <h3>The Resistors really hit their stride in 2005. In addition to the regular gigs, the band played in Jordan for the annual "Pork in the park". It was a fun afternoon filled with music and BBQ. Another highlight of the year was a tropical July evening at Canterbury Park playing between horse races. The momentum carried the band into the studio in December to lay down the basic tracks for 6 original tunes that had been kicking around the set lists for the past couple of years. The recording went well and the guys anticipated a great follow-up cd.</h3>
            <h3>2006 had many highs and lows, but unlike past years, the lows would be devastating. It started great. Each member of the band headed to the studio for a day or two of overdubs on the recording. The guys continued gigging and working on new material to add to the cd, but the steep decline of bar customers was becoming very noticeable and un-inspiring.</h3>
            <h3>The Richfield Legion continued to be a high point every time the band took the stage. The regulars were always very appreciative and fun to play for. In sharp contrast the guys played their share of gigs at other bars for less than a handful of people. At one gig, the sparse crowd gave an uncharacteristic round of applause between songs. Stevo informed the band during a break that it was a lady packing her cigarettes. Time for a reality check. "Why are we doing this?" Given the amount of time and effort going into the band, "what are we getting back?" The decision was made to call it quits. Not an easy choice but it was time. With the breakup the guys managed to keep their friendship intact, which was a high priority.</h3>
            <h3>The band has retired from the "bar band" scene but hopes to stay in touch and jam from time to time. They intend to finish the studio cd and get it out to their fans as well as a dvd of the farewell performance.</h3>
            <h3>The Resistors would like to thank everyone who has come to the shows over the years, and who came to see our final performances November 10 & 11, 2006. It was wonderful to have original members, Jeff and Mark sit in on a couple tunes Friday. Saturday was very emotional, but a great time nonetheless. It was a night none of us will ever forget!</h3>
            <h3>There were reunion gigs in July 2007 and May 2008 at Canterbury Park. The rust was shaken off quickly and it was like a trip back in time. The gigs were a blast! "We should do this more often" is a phrase that was used repeatedly by the band and their fans, but it was the end of the line.</h3>
            <h3>Thank You - Good Night</h3>
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

export default Resistors;
