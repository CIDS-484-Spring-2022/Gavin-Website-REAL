import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/About Me/AboutMe Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css'

const AboutMe = () => {
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
            <p className="title">About Me</p>

            <body className="aboutMe-body">
                <h4>
                    Can you pinpoint one single event in your life that has defined every step you have taken since? Mine was a broadcast of the original Woodstock movie on public television when I was about 14.
                    Coming from a family that was not particularly musical, my childhood memories consist of soft rock on the am radio while riding in the car with my mom. It was just on for “background noise”. Until the Woodstock movie, I had never before felt a connection to music. Hearing Joe Cocker, Sly & the Family Stone, Santana and Jimi Hendrix was a huge awakening for me. I knew I HAD to play guitar. I begged my parents for guitar lessons for a couple of years, but they avoided the topic. When I was 17, I signed up for group guitar lessons. Beyond that, I am self-taught. I took some music theory classes at the community college, but that was of zero interest to me. I wanted to play from deep down inside, not boring notes on a page.
                </h4>
                <h4>
                    The best thing that came out of music theory class was connecting with my friend Jeff. We started playing guitar together, and I started going to an open blues jam that he had been playing at. For those unfamiliar with this, you show up, wait your turn and then play with the house band, a group of people you typically don’t know at first. Sometimes it turns out great and once in a while it can be a train wreck. At any rate it was an incredible learning experience. Wow, I was starting to find out what this music thing is all about. It was the beginning of a life-long adventure.
                </h4>
                <h4>
                    For me, the rush of playing live is unparalleled. I could not get enough. The next hurdle to jump was singing in public. The first time I sang at the blues jam, I was so nervous my knees were knocking and I couldn’t catch my breath. When the song was over, I wanted to do it again!
                </h4>
                <h4>
                    Over the next couple of years I played at the jam every Saturday, played some Monday and Thursday jams, worked at K-mart, went to trade school, started a career, found my soul mate, bought a house and joined a cover band that would turn into “The Resistors”. It was a busy and defining period in my life.
                </h4>
                <h4>
                    In the mid 90’s, I jammed with Greg Ristow and his buddies from time to time. They were writing all of their own songs and I was really impressed with the results. This is when the writing bug really hit me. “If these guys can do it, why can’t I?” The desire to create has always been in the back of my mind, but it took a long time to discover that my “medium” is writing music and performing live.
                </h4>
                <h4>
                    Eventually Greg joined The Resistors and we started playing more original tunes at our gigs. I always found it interesting what elements of songs people picked up on. At gigs, people would come up and ask about an original song; “who did that song, was that ________?” The range of artists that they compared our originals to told me I was doing something right.
                </h4>
                <h4>
                    “The outlaw” was the first song I wrote that was ever performed in public. It was played at a majority of Resistors gigs throughout the twelve year run of the band and has found it’s way into my solo acoustic set as well. The outlaw was released in 2001 on “Eleven”. The debut cd which consisted of all original music written by myself and the other members of the band.
                </h4>
                <h4>
                    My main influences include The Black Crowes, Allman Brothers, The Band, Jimi Hendrix, Ryan Bingham, Truth & Salvage Co, a long list of blues guitarists and anything involving Gram Parsons. Although my songs don’t always sound like those of my influences, I pick up on various elements of their style from songwriting to vocal delivery. Nuances that naturally come out when I perform.
                </h4>
                <h4>
                    I continually seek out music with “feel”. Be it blues, rock, soul, Americana or even classic country. There is something in a passionately delivered vocal that I can relate to. Why do sad songs make me feel good?
                </h4>
                <h4>
                    I enjoy studying the bands I listen to. I research their musical influences and it branches out like a family tree. I have “discovered” many great bands and artists this way. Many of them will never be a household name.
                </h4>
                <h4>
                    In the fall of 2008 I decided it was time to start recording some of my original songs that never really fit into the format of the bands I had played with. Most of the songs I was preparing to record are a drastic departure from classic rock and blues with more emphasis on acoustic guitars, unique chord changes and lyrics that tell a story. I started the project just so I would have something to do over the winter. At the time, I didn’t expect it to turn into anything. The recording process was fun and a great learning experience. I was able to apply much of the knowledge I gained recording the 2 Resistors cds. The final vocal tracks for the cd were finished the day after Thanksgiving 2009.
                </h4>
                <h4>
                    The tracks for “In the distance” sat idle for over 13 months as I explored my options for getting the tracks mixed and mastered. The expense of professional mixing was a shock that I was not prepared for. It was one of the biggest factors that led to the long delay. In January of 2011 I decided to pull the trigger and get it mixed and mastered. "In the distance" was released in late April 2011.
                </h4>
                <h4>
                    Since then, I keep busy playing live gigs, writing and recording new songs and making music videos.
                </h4>
                <h4>
                    Follow <a href="/YbYr">this link</a> for more detailed reviews of years past.
                </h4>
                <h4>
                    Member: <a href="https://mnsongwriters.org/" target="_blank" rel="noreferrer">Minnesota Association of Songwriters</a>
                </h4>
                <h4>
                    Member: <a href="https://www.mnmusiccoalition.org/#/" target="_blank" rel="noreferrer">Minnesota Music Coalition</a>
                </h4>
                <h4>
                    Member: <a href="https://wyomingcreativearts.org/" target="_blank" rel="noreferrer">Wyoming Area Creative Arts Community</a>
                </h4>
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

export default AboutMe;
