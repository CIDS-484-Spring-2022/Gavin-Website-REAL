import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Year by Year/YbYr Banner.PNG";
import './Styles.css'
import arrowIcon from "./Pictures/arrowIcon.png";

const YbYR = () => {
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    return(
        <div>
            <p className="universal-home"><Link to ="/">Andrew Spreck</Link></p>
            <p className="banner"><img src={Banner} alt="File not Found"/></p>
            <p className="title">YbYR</p>
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
            <body className="YbYR-body">
            <h2>Reviews of years past</h2>
            <h3>2016 was another low-key year in the performance category. I took time away from gigs to attend to some long-running physical issues that were threatening my ability to play music as well as impacting life in general.  I underwent physical therapy for tendinitis in both elbows and forearms.  After that, neck therapy. The elbows and forearms feel better and I can play pain-free most of the time. I think the neck is going to take much longer, but I keep doing what I can.</h3>
            <h3>I wrote 2 new songs- “Sunflower dream” is a love song I gave my wife on Valentine’s day. “Joshua Tree 1973” is a song about the strange events following the death of Gram Parsons and the burning of his body in Joshua Tree National Park.</h3>
            <h3>I put together a re-mastered cd of songs from my days in The Resistors. It contains 4 songs I wrote from our 2001 release “Eleven” and one previously un-released song from our 2005 sessions.</h3>
            <h3>I also started “Songwriters in the round” at Hallberg Center For The Arts in Wyoming, MN. Each “round” brings together 3 songwriters telling stories and playing their original music. There is so much talent out there and I enjoy providing an opportunity to make original music the main attraction. It’s another way to keep music LIVE.</h3>
            <h3>2015 was the first year I slowed down since beginning my acoustic journey in 2011. With over 160 acoustic gigs under my belt to this point, I was becoming frustrated and burned out by the lack of progress I was making and the feeling of under-appreciation. The game of booking agent was becoming tedious and it was easier to ignore it than get motivated. The result was only 31 gigs for the year including 2 appearances on KBEK Live From Studio J in addition to my regular venues and some random appearances.</h3>
            <h3>Although I started writing some new songs, I did not complete any for the year.</h3>
            <h3>I turned my attention towards the recording project that I started the previous year. This will eventually be my 3rd solo release and it is going to be an electric rock album.</h3>
            <h3>I also began teaching myself how to fingerpick. I have done some fingerpicking in my earlier blues days on electric lead guitar and slide, however haven’t done a lot of it as an acoustic artist.</h3>
            <h3>The first quarter of 2014 was dedicated to finishing up my studio recording project. I even started laying down electric guitar, bass and drums for 7 more songs with the idea of recording one acoustic and one electric album. As spring was quickly approaching, I put the electric songs on hold to focus on finishing the acoustic album that would become “Devotion”.</h3>
            <h3>Unlike “In the distance”, which is a sampling of different genres and sounds, Devotion is a true snapshot of this life that I’ve been living since going out as a solo acoustic artist. Roughly half of the songs on Devotion were born directly from the solo acoustic experience with the exception of Booya Bowl which was recorded prior to In the distance. I decided to include it as a bonus song on Devotion in memory of Booya Joe who sadly passed away in June as mixing of the album was wrapping up.</h3>
            <h3>Devotion was released in August of 2014. The cost of mixing and cd production was financed solely by my gig income throughout the year. Another milestone I am very proud of.</h3>
            <h3>I did plenty of live gigs in 2014 with more than half of my engagements as standing monthly gigs at a handful of venues. It’s nice to be able to book a whole year’s worth of gigs at a venue in one shot.</h3>
            <h3>I also did lots of one off gigs at local city celebrations and other venues around the metro area. Bob and I were hired to play a private party on the Majestic Star yacht out of Stillwater, MN. It was interesting getting the gear to the boat and then up 5 flights of stairs, but the performance more than made up for the hard work. It was a lot of fun playing for a full boat.</h3>
            <h3>In September, I loaded my gear for that night’s gig and headed to Luck, Wisconsin for the afternoon to sample ribs in a contest that my in-laws were competing in. It was pretty quiet there and they talked me into playing. I set up un-plugged in the middle of the cook off, put out my tip jar and played the rest of the afternoon before heading to my gig in Woodbury that evening. Another great day in this life that I’ve been living.</h3>
            <h3>My songwriting output for the year was a little more than the previous year however still quite small. I wrote 2 brand new songs; “Highway” and “I should be drinking now”. I finished one that had been kicking around for a couple of years called “Depressing John”. I also reworked an old song that I never really liked called “Dancing girl”. When it was done, I had changed key, tempo, music, bridge and vocal melody while keeping a majority of the lyrics. I am really happy with the results. Listen for it at my live gigs next year.</h3>
            <h3>And so it goes, another year down the road.</h3>
            <h3>The main focus for 2013 was playing live which I did a lot of. I put on over 4100 miles playing 50 gigs around the Twin Cities, not including my “surprise” in Milwaukee. I played plenty of bar/restaurants and lots of one-off gigs at various events. One of my favorite new venues from the year was Lift Bridge Brewing Tap Room in Stillwater. The atmosphere is perfect for what I play and it doesn’t hurt that the folks there are friendly and the beer is amazing. Beertender Bryan commented “your original music is really refreshing”. Thanks, I appreciate that.</h3>
            <h3>I found some time throughout the year to record "new" original songs in my studio. They are new in the sense that I have not recorded or released them, however they are road tested and ready for a good polish. It has been a pleasure to have talented friends come to spice things up on my studio recordings. I have 5 songs completed with plans to finish a couple more and release them early in 2014.</h3>
            <h3>I did my second video shoot for The Minnesota Association of Songwriters cable TV show ”Minnesingers” with percussionist Bob Colbert. There are currently 24 episodes of Minnesingers playing on 40 cable stations in 7 states with new stations picking up the show all the time. Each episode contains performances from a variety of M.A.S. members. My day had gone off the rails and I showed up at the studio without my harmonicas, which I was going to use on 2 of the 5 songs we rehearsed. We ended up skipping those 2 and choosing a couple of others for a total of six songs. Look for Minnesingsers on your local public access cable station or you can view my performances on my Youtube channel.</h3>
            <h3>In addition to the Minnesingers videos, I uploaded roughly 20 more videos to Youtube. Most of them are taken from my many live performances. I also made a photo-montage video for the song “Shake ‘n howdy” from my cd and a visual diary of this life I’ve been living for the song “Devotion” which I am very proud of.</h3>
            <h3>With all of the other demands on my time, there wasn’t a lot of time left over for songwriting. I started writing a couple of songs, but sadly never finished them. Last time I checked, I am wearing at least a dozen hats, including booking agent, accountant, salesman, marketer, roadie, sound guy and the list goes on. I guess songwriter has slipped to the bottom of the list for the time being.</h3>
            <h3>In July, I was one of nearly 500 people who auditioned for the Minnesota State Fair Talent Contest. Only 60 are chosen in 3 divisions. Pre-teen, teen and over 19 open. The talent contest occurs over 10 nights of the fair at the Leinenkugels Band Shell. I played “Wagon wheel” by bluegrass group “Old Crow Medicine Show”. It was a rush to play in front of a huge crowd, but the judges did not think my performance was good enough to go on to the finals in the Grand Stand. I guess a middle-aged guy with gray in his beard can’t compete with cute young ladies. My son took video of the performance. The crowd support at 2:50 is priceless. It gives me goosebumps when I go back and watch it.</h3>
            <h3>Between Sept. 26-29, my wife Beth and I attended Truth & Salvage Co. shows in Minneapolis, Chicago and Milwaukee. This is one of our favorite bands who we go to see whenever they are in the Midwest. The band is very friendly and we have been fortunate to get to know them over the past few years.</h3>
            <h3>Beth and I had just arrived at our hotel in Chicago, when Scott from T&S sent me a text asking me if I wanted to open the show for them the next night at Shank Hall in Milwaukee. I did not have my guitar, harmonicas or cds as this was a recreational trip and I was not expecting to do any playing. OF COURSE I’LL DO IT! Is this for real? The next day, we found a Guitar Center near Milwaukee to pick up a harp, a harp rack (the thing that holds the harp while playing guitar) and a new tambourine for Walker, who had broken his in 2 pieces the night before. I needed a new shirt too. All I brought for the trip was t-shirts. Tim Jones let me use his Martin acoustic for my set which consisted of 4 originals and 2 covers. My performance got a warm reception from the crowd and the band alike. Tim thought I sounded like John Fogerty when I sang my song “Water under the bridge”. What a great compliment. This gig by far has been the highlight of my 2 1/2 years as a solo acoustic artist. I have a few photos here from the show.</h3>
            <h3>Despite not writing any new songs, I am really happy with how the year played out and I look forward to what lies ahead.</h3>
            <h3>2012 is in the rear-view mirror now, but it was a great journey for me and my music. The previous year I was willing to play any gig I could just to get out, get my music heard and become more comfortable as a solo artist. Now, with numerous gigs, cable tv video shoots and several open mics and jam sessions under my belt, I have the luxury of choosing the gigs I want to play and passing on some less desirable ones.</h3>
            <h3>I played many new venues in 2012 including The Forest Lake American Legion, Hurricane Grill & Wings, Al’s Center Saloon, Joseph Wolf Brewery, Sunrise River Farm and The Minnesota State Fair. I also played Lindstrom Karl Oskar Days, Wyoming Stagecoach days, a wedding reception, some private parties and a fundraiser luncheon for over 600 people. Sometimes I still can’t believe I am doing this.</h3>
            <h3>Many of my live shows in 2012 were augmented by additional musicians. Percussionist Bob Colbert became a regular at many of my gigs. His hand drumming adds texture to the mellower songs and really drives the more rocking stuff. Sometimes it sounds like I am playing with a full band. Casey Meyerding brings my shows to a whole different level with mandolin, keyboards and trumpet. I am humbled by his wonderful talent.</h3>
            <h3>My many adventures included learning to play harmonica, watching my youtube view count exceed 1200 views, joining the Wyoming Area Creative Arts Community, joining the Minnesota Association of Songwriters and selling cd’s at my gigs to people hearing my music for the first time. It is such a thrill when I make a musical connection with a stranger and they are moved enough by what I am playing to buy my cd.</h3>
            <h3>2011 was an exciting and ground-breaking year in my music career. The release of my cd, “In the distance” in April was a huge accomplishment that fueled the ambition to play my songs live. The release marked the transition from playing in rock and blues cover bands to performing as a solo artist.</h3>
            <h3>I played out nearly 30 times at various bars and coffee houses, selling a number of cds along the way.</h3>
            <h3>Playing solo after years of playing in a band is like learning a whole new game. There is no one to lean on or cover your mistakes!</h3>
            <h3>I hosted an open mic twice a month at Café Zia in Roseville. Through the open mic, I met a diverse group of talented people from the Twin Cities with every artist bringing their own blend of talent. You never know who is going to show up to play at an open mic and that makes every evening unique and fun.</h3>
            <h3>Through all of the activity I even found time to write some new songs, which I worked into my set list.</h3>
            <h2>2007 – 2010</h2>
            <h3>After The Resistors disbanded, I started jamming with a bassist and organ player and what turned out to be a string of 6 drummers. We called it The Rumblekats. We did blues covers and some deep blues-influenced rock. Blues was one of the biggest influences on my early guitar playing. The Rumblekats setting allowed me to really dig deep into the blues and push my guitar playing to its limits. It was an organic musical experience with some shining moments but we never found chemistry with a drummer and eventually it burned out.</h3>
            <h2>1994 - 2006</h2>
            <h3>See The Resistors</h3>
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

export default YbYR;
