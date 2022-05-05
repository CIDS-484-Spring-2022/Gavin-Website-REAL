import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Photos/Banner.PNG";
import A2016 from "./Pictures/Photos/2016/2016-1.jpg"
import A20162 from "./Pictures/Photos/2016/2016-2.jpg"
import A20163 from "./Pictures/Photos/2016/2016-3.jpg"
import A20164 from "./Pictures/Photos/2016/2016-4.jpg"
import B2015 from "./Pictures/Photos/2015/2015-1.jpg"
import B20152 from "./Pictures/Photos/2015/2015-2.jpg"
import B20153 from "./Pictures/Photos/2015/2015-3.jpg"
import B20154 from "./Pictures/Photos/2015/2015-4.jpg"
import B20155 from "./Pictures/Photos/2015/2015-5.jpg"
import B20156 from "./Pictures/Photos/2015/2015-6.jpg"
import C2014 from "./Pictures/Photos/2014/2014-1.jpg"
import C20142 from "./Pictures/Photos/2014/2014-2.jpg"
import C20143 from "./Pictures/Photos/2014/2014-3.jpg"
import C20144 from "./Pictures/Photos/2014/2014-4.jpg"
import C20145 from "./Pictures/Photos/2014/2014-5.jpg"
import C20146 from "./Pictures/Photos/2014/2014-6.jpg"
import C20147 from "./Pictures/Photos/2014/2014-7.jpg"
import TnS from "./Pictures/Photos/Shank Hall, Milwaukee, WI/ShankHall-1.jpg"
import TnS2 from "./Pictures/Photos/Shank Hall, Milwaukee, WI/ShankHall-2.jpg"
import TnS3 from "./Pictures/Photos/Shank Hall, Milwaukee, WI/ShankHall-3.jpg"
import TnS4 from "./Pictures/Photos/Shank Hall, Milwaukee, WI/ShankHall-4.jpg"
import TnS5 from "./Pictures/Photos/Shank Hall, Milwaukee, WI/ShankHall-5.jpg"
import D2013 from "./Pictures/Photos/2013/2013-1.jpg"
import D20132 from "./Pictures/Photos/2013/2013-2.jpg"
import D20133 from "./Pictures/Photos/2013/2013-3.jpg"
import D20134 from "./Pictures/Photos/2013/2013-4.jpg"
import D20135 from "./Pictures/Photos/2013/2013-5.jpg"
import Dunn from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-1.jpg"
import Dunn2 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-2.jpg"
import Dunn3 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-3.jpg"
import Dunn4 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-4.jpg"
import Dunn5 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-5.jpg"
import Dunn6 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-6.jpg"
import Dunn7 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-7.jpg"
import Dunn8 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-8.jpg"
import Dunn9 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-9.jpg"
import Dunn10 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-10.jpg"
import Dunn11 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-11.jpg"
import Dunn12 from "./Pictures/Photos/Dunn Bros, Roseville with Casey Meyerding . The Acadia Cafe with Bob Colbert/Dunn-12.jpg"
import PL from "./Pictures/Photos/Playin Live/Live-1.jpg"
import PL2 from "./Pictures/Photos/Playin Live/Live-2.jpg"
import PL3 from "./Pictures/Photos/Playin Live/Live-3.jpg"
import PL4 from "./Pictures/Photos/Playin Live/Live-4.jpg"
import PL5 from "./Pictures/Photos/Playin Live/Live-5.jpg"
import PL6 from "./Pictures/Photos/Playin Live/Live-6.jpg"
import PL7 from "./Pictures/Photos/Playin Live/Live-7.jpg"
import PL8 from "./Pictures/Photos/Playin Live/Live-8.jpg"
import PL9 from "./Pictures/Photos/Playin Live/Live-9.jpg"
import PL10 from "./Pictures/Photos/Playin Live/Live-10.jpg"
import Distance from "./Pictures/Photos/InTheDistance/Recording InTheDistance.jpg"
import Distance1 from "./Pictures/Photos/InTheDistance/Recording InTheDistance-1.jpg"
import Distance2 from "./Pictures/Photos/InTheDistance/Recording InTheDistance-2.jpg"
import Distance3 from "./Pictures/Photos/InTheDistance/Recording InTheDistance-3.jpg"
import Past from "./Pictures/Photos/Resistors/1.jpg"
import Past2 from "./Pictures/Photos/Resistors/2.jpg"
import Past3 from "./Pictures/Photos/Resistors/3.jpg"
import Past4 from "./Pictures/Photos/Resistors/4.jpg"
import Past5 from "./Pictures/Photos/Resistors/5.jpg"
import Past6 from "./Pictures/Photos/Resistors/6.jpg"
import Past7 from "./Pictures/Photos/Resistors/7.jpg"
import Past8 from "./Pictures/Photos/Resistors/8.jpg"
import Past9 from "./Pictures/Photos/Resistors/9.jpg"
import Past10 from "./Pictures/Photos/Resistors/10.jpg"
import Past11 from "./Pictures/Photos/Resistors/11.jpg"
import Past12 from "./Pictures/Photos/Resistors/12.jpg"
import Past13 from "./Pictures/Photos/Resistors/13.jpg"
import arrowIcon from "./Pictures/arrowIcon.png";
import './Styles.css';

const Photos = () => {
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
            <p className="title">Photos</p>

            <body className="photos-body">
            <h1><center>2016</center></h1>
            <center><div className="sec1">
                <div className="sec1Inner">
                    <img src={A2016} alt="File not Found"/>
                    <h5>Wyoming Area Creative Arts Community Songwriters in the round series with Greg Stein & Paul Dennison February - Photo by: Ben Andersen</h5>
                </div>
                <div className="sec1Inner">
                    <img src={A20162} alt="File not Found"/>
                    <h5>Photo by: Ben Andersen</h5>
                </div>
            </div></center>
            <center><div className="sec1">
                <div className="sec1Inner">
                    <img src={A20163} alt="File not Found"/>
                    <h5>Photo by: Ben Andersen</h5>
                </div>
                <div className="sec1Inner">
                    <img src={A20164} alt="File not Found"/>
                </div>
            </div></center>
            <h1><center>2015</center></h1>
            <center><div className="sec2">
                <div className="sec2Inner">
                    <img src={B2015} alt="File not Found"/>
                    <h5>Breathe Easy Music Festival - Acoustic Stage. Photo by: Love4Pictures</h5>
                </div>
                <div className="sec2Inner">
                    <img src={B20152} alt="File not Found"/>
                    <h5>Breathe Easy Music Festival - Acoustic Stage. Photo by: Neil Schloner</h5>
                </div>
            </div></center>
            <center><div className="sec2">
                <div className="sec2Inner">
                    <img src={B20153} alt="File not Found"/>
                    <h5>Live from Studio J - August</h5>
                </div>
                <div className="sec2Inner">
                    <img src={B20154} alt="File not Found"/>
                    <h5>Live from Studio J - August</h5>
                </div>
            </div></center>
            <center><div className="sec2">
                <div className="sec2Inner">
                    <img src={B20155} alt="File not Found"/>
                    <h5>Wyoming Area Creative Arts Community art show - April</h5>
                    </div>
                <div className="sec2Inner">
                    <img src={B20156} alt="File not Found"/>
                </div>
            </div></center>

            <h1><center>2014</center></h1>
            <center><div className="sec3r">
                <div className="sec3Inner">
                    <img src={C20142} alt="File not Found"/>
                    <h5>Bob and I made the Chisago County Press - Wyoming Area Creative Arts Community Art Show</h5>
                </div>
                <div className="sec3Inner">
                    <img src={C2014} alt="File not Found"/>
                    <h5>Taking the new hat for a test drive - Karl Oskar Days - Lindstrom, MN</h5>
                </div>
                <div className="sec3Inner">
                    <img src={C20143} alt="File not Found"/>
                    <h5>"Devotion" cds are ready to go!</h5>
                </div>
            </div></center>
            <center><div className="sec3r">
                <div className="sec3Inner">
                    <img src={C20147} alt="File not Found"/>
                    <h5>BBQ Cookoff - Luck, WI</h5>
                </div>
                <div className="sec3Inner">
                    <img src={C20145} alt="File not Found"/>
                    <h5>You never know what you'll find when cleaning out an old barn. Flyer from '96</h5>
                </div>
            </div></center>
            <center><div className="sec3r">
                <div className="sec3Inner">
                    <img src={C20146} alt="File not Found"/>
                    <h5>Wyoming Stagecoach Days</h5>
                </div>
                <div className="sec3Inner">
                    <img src={C20144} alt="File not Found"/>
                    <h5>Ki Chi Saga Days - Chisago City, MN</h5>
                </div>
            </div></center>

            <h1><center>On Sept. 29, 2013 I had the honor of opening for Truth & Salvage Co. at Shank Hall in Milwaukee, Wi.</center></h1>
            <center><div className="sec4">
                <div className="sec4Inner">
                    <img src={TnS} alt="File not Found"/>
                </div>
                <div className="sec4Inner">
                    <img src={TnS2} alt="File not Found"/>
                </div>
            </div></center>
            <center><div className="sec4">
                <div className="sec4Inner">
                    <img src={TnS3} alt="File not Found"/>
                </div>
                <div className="sec4Inner">
                    <img src={TnS4} alt="File not Found"/>
                    <h5>My set list for the show</h5>
                </div>
                <div className="sec4Inner">
                    <img src={TnS5} alt="File not Found"/>
                </div>
            </div></center>
            <h1><center>2013</center></h1>
            <center><div className="sec5">
                <div className="sec5Inner">
                    <img src={D2013} alt="File not Found"/>
                    <h5>Chisago City Farmers Market</h5>
                </div>
                <div className="sec5Inner">
                    <img src={D20132} alt="File not Found"/>
                    <h5>Tools of the trade</h5>
                </div>
            </div></center>
            <center><div className="sec5">
                <div className="sec5Inner">
                    <img src={D20134} alt="File not Found"/>
                    <h5>Chisago County Fair Talent Contest</h5>
                </div>
                <div className="sec5Inner">
                    <img src={D20133} alt="File not Found"/>
                    <h5>That's a big chair</h5>
                </div>
                <div className="sec5Inner">
                    <img src={D20135} alt="File not Found"/>
                    <h5>Rehearsing for a cable tv video shoot</h5>
                </div>
            </div></center>

            <h1><center>On October 5, 2012 I played 2 gigs back-to-back. Both were documented by photographer Kent Carder - kcarder@gmail.com</center></h1>
            <h3><center>Dunn Bros. Roseville with Casey Meyerding • The Acadia Cafe with Bob Colbert</center></h3>
            <center><div className="sec6">
                <div className="sec6Inner">
                    <img src={Dunn} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn2} alt="File not Found"/>
                </div>
            </div></center>
            <center><div className="sec6">
                <div className="sec6Inner">
                    <img src={Dunn3} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn5} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn4} alt="File not Found"/>
                </div>
            </div></center>
            <center><div className="sec6">
                <div className="sec6Inner">
                    <img src={Dunn6} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn7} alt="File not Found"/>
                </div>
            </div></center>
            <center><div className="sec6">
                <div className="sec6Inner">
                    <img src={Dunn8} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn10} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn9} alt="File not Found"/>
                </div>
            </div></center>
            <center><div className="sec6">
                <div className="sec6Inner">
                    <img src={Dunn11} alt="File not Found"/>
                </div>
                <div className="sec6Inner">
                    <img src={Dunn12} alt="File not Found"/>
                </div>
            </div></center>

            <h1><center>Playin' Live</center></h1>
            <center><div className="sec7">
                <div className="sec7Inner">
                    <img src={PL} alt="File not Found"/>
                    <h5>September 2012 - a beautiful sunny fall day at Sunrise River Farm in Wyoming, MN</h5>
                </div>
                <div className="sec7Inner">
                    <img src={PL2} alt="File not Found"/>
                    <h5>September 2012</h5>
                </div>
            </div></center>
            <center><div className="sec7">
                <div className="sec7Inner">
                    <img src={PL3} alt="File not Found"/>
                    <h5>MN State Fair 2012</h5>
                </div>
                <div className="sec7Inner">
                    <img src={PL4} alt="File not Found"/>
                    <h5>MN State Fair 2012</h5>
                </div>
            </div></center>
            <center><div className="sec7">
                <div className="sec7Inner">
                    <img src={PL5} alt="File not Found"/>
                    <h5>Karl Oskar Days 2012</h5>
                </div>
                <div className="sec7Inner">
                    <img src={PL9} alt="File not Found"/>
                    <h5>SpringFest 2011</h5>
                </div>
                <div className="sec7Inner">
                    <img src={PL6} alt="File not Found"/>
                    <h5>Karl Oskar Days 2012</h5>
                </div>
            </div></center>
            <center><div className="sec7">
                <div className="sec7Inner">
                    <img src={PL8} alt="File not Found"/>
                    <h5>May 2011 with Tom Doran</h5>
                </div>
                <div className="sec7Inner">
                    <img src={PL7} alt="File not Found"/>
                    <h5>August 2011 Cafe Zia</h5>
                </div>
                <div className="sec7Inner">
                    <img src={PL10} alt="File not Found"/>
                    <h5>March 2011</h5>
                </div>
            </div></center>

            <h1><center>Recording "In The Distance"</center></h1>
            <center><div className="sec7">
                <div className="sec8Inner">
                    <img src={Distance} alt="File not Found"/>
                    <h5>Musical sanctuary</h5>
                </div>
                <div className="sec8Inner">
                    <img src={Distance2} alt="File not Found"/>
                    <h5>Cool Organ!</h5>
                </div>
            </div></center>
            <center><div className="sec7">
                <div className="sec8Inner">
                    <img src={Distance1} alt="File not Found"/>
                    <h5>Tracking Vocals</h5>
                </div>
                <div className="sec8Inner">
                    <img src={Distance3} alt="File not Found"/>
                    <h5>John tappin' the wooden frog</h5>
                </div>
            </div></center>

            <h1><center>My past life with The Resistors, The Rumblekats and beyond</center></h1>
            <center><div className="sec9">
                <div className="sec9Inner">
                    <img src={Past} alt="File not Found"/>
                    <h5>2009</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past5} alt="File not Found"/>
                    <h5>November 2006 - The Resistors farewell blowout</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past2} alt="File not Found"/>
                    <h5>2009 - just like the "old days"</h5>
                </div>
            </div></center>
            <center><div className="sec9">
                <div className="sec9Inner">
                    <img src={Past4} alt="File not Found"/>
                    <h5>2007 at the legendary booya barn</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past3} alt="File not Found"/>
                    <h5>2008 - playin' the blues</h5>
                </div>
            </div></center>
            <center><div className="sec9">
                <div className="sec9Inner">
                    <img src={Past6} alt="File not Found"/>
                    <h5>November 2006</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past7} alt="File not Found"/>
                    <h5>July 2006 - Centennial Lakes Amphitheater, Edina, MN 102°</h5>
                </div>
            </div></center>
            <center><div className="sec9">
                <div className="sec9Inner">
                    <img src={Past10} alt="File not Found"/>
                    <h5>July 2005 - Canterbury Park</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past8} alt="File not Found"/>
                    <h5>June 2006 - Canterbury Park - cold and raining</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past9} alt="File not Found"/>
                    <h5>July 2005 - Canterbury Park</h5>
                </div>
            </div></center>
            <center><div className="sec9">
                <div className="sec9Inner">
                    <img src={Past11} alt="File not Found"/>
                    <h5>2005</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past12} alt="File not Found"/>
                    <h5>2004</h5>
                </div>
                <div className="sec9Inner">
                    <img src={Past13} alt="File not Found"/>
                    <h5>1996</h5>
                </div>
            </div></center>
            </body>
            <div className="scrollToTop">
                <div onClick={scroll}>
                    <img src={arrowIcon} alt='Go to top'/>
                </div>
            </div>
            <footer><center>All music and content ©Andrew J. Spreck, all rights reserved, unauthorized use is a violation of applicable laws.</center></footer>
        </div>
    );
};

export default Photos;
