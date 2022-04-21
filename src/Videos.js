import React from 'react';
import {Link} from "react-router-dom";
import Banner from "./Pictures/Video/Video Banner.PNG";
import arrowIcon from "./Pictures/arrowIcon.png";
import ReactPlayer from "react-player";

const Videos = () => {
    const scroll = () => {window.scrollTo({top: 0, behavior: 'smooth'})}
    return(
        <div>
            <p className="universal-home"><Link to ="/">Andrew Spreck</Link></p>
            <p className="banner"><img src={Banner} alt="File not Found"/></p>
            <p className="title">Videos</p>
        <header>
            <br /> {/*Line Break */}
            <ul  className="nav">
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
            <body className="videos-body">
            <h2>All songs on this video page written & © by Andrew Spreck</h2>
            <h2>To see videos of cover songs and other fun stuff, go to my YouTube library.</h2>
            <h1>Demon Train</h1>
            <h4>12/22/2018</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=eCKRC2_05lg'}>covers promo video</ReactPlayer>
            <h1>Joshua Tree 1973</h1>
            <h3>The bizarre tale of Gram Parsons' last day.</h3>
            <h4>12/8/2018</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=Yx67ibIaQJ8'}>covers promo video</ReactPlayer>
            <h1>I'm Lucky</h1>
            <h4>12/8/2018</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=7kkbdbZzMpg'}>covers promo video</ReactPlayer>
            <h1>Dancing Girl</h1>
            <h3>Songcasters TV Showcase = CTV studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>6/13/2016</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=sZdNKfa8i4g'}>covers promo video</ReactPlayer>
            <h1>Highway</h1>
            <h3>Songcasters TV Showcase = CTV studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>6/13/2016</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=tbspMY9Edtg'}>covers promo video</ReactPlayer>
            <h1>Tonight I'm Gonna Party</h1>
            <h3>Here's a glimpse of my life before crossing over to acoustic.</h3>
            <h4>Released: 5/17/2016</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=fHTxHt0O9VQ'}>covers promo video</ReactPlayer>
            <h1>The Outlaw</h1>
            <h3>Songcasters TV Showcase = CTV studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>6/13/2016</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=a2XoGufrP84'}>covers promo video</ReactPlayer>
            <h1>Sunny Highway</h1>
            <h3>Enjoy the raw, un-mixed tracks presented here from the cd "Where I'm From"</h3>
            <h4>Released: 1/22/2016</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=VGwtmzp4rVQ'}>covers promo video</ReactPlayer>
            <h1>Things We Could Do</h1>
            <h3>KBEK 95.5 - Live from studio J</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>Released: 8/30/2015</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=t4xneLZwA9M'}>covers promo video</ReactPlayer>
            <h1>Between 9 & 1</h1>
            <h3>This song/video pretty much suums it all up in 3 minutes and 40 seconds.</h3>
            <h4>Released: 6/1/2015</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=DXANtjujq8I'}>covers promo video</ReactPlayer>
            <h1>Devotion</h1>
            <h3>A visual and lyrical diary of this life that I've been living.</h3>
            <h4>Released: 11/17/2013</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=fL5z6MXYGAk'}>covers promo video</ReactPlayer>
            <h1>Shake 'n Howdy</h1>
            <h3>This video celebrates the 2 year anniversary of the release of my cd "In the distance". The photos chronicle nearly 100 live acoustic performances. These are just a handful of the many fond memories from my journey so far.</h3>
            <h4>Released 5/4/2013</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=QArPtnrvHpU'}>covers promo video</ReactPlayer>
            <h1>A Stone in the Ocean</h1>
            <h3>Songcasters TV Showcase - CTV studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>6/13/2016</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=2R99tNe3t48'}>covers promo video</ReactPlayer>
            <h1>Tupperware Lady</h1>
            <h3>Minnesingers TV Showcase - NWCT studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>8/20/2013</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=6UqYhU-nro4'}>covers promo video</ReactPlayer>
            <h1>Shoe</h1>
            <h3>Minnesingers TV Showcase - NWCT studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>8/20/2013</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=F37Gs-NeGrg'}>covers promo video</ReactPlayer>
            <h1>Grandma's Homemade Wine</h1>
            <h3>Minnesingers TV Showcase - NWCT studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>8/20/2013</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=4dCnSYCVTkI'}>covers promo video</ReactPlayer>
            <h1>Ghost of a Town</h1>
            <h3>Minnesingers TV Showcase - NWCT studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>7/17/2012</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=Gxk27dwzXeM'}>covers promo video</ReactPlayer>
            <h1>Piece of Me</h1>
            <h3>Minnesingers TV Showcase - NWCT studios</h3>
            <h4>Percussion: Bob Colbert</h4>
            <h4>7/17/2012</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=pXL3OsOakhQ'}>covers promo video</ReactPlayer>
            <h1>Sad & Lonely</h1>
            <h3>At SpringFest - Mears Park</h3>
            <h4>Listen for a special guest appearance by a St. Paul Parks garbage truck doing Sad & Lonely, I just had to laugh!</h4>
            <h4>5/7/2011</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=POjUoliy2kg'}>covers promo video</ReactPlayer>
            <h1>Piece of Me</h1>
            <h3>At SpringFest - Mears Park</h3>
            <h4>5/7/2011</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=kHUxYLIBEEI'}>covers promo video</ReactPlayer>
            <h1>Tonight I'm Gonna Party</h1>
            <h3>Performed with The Resistors at Canterbury Park</h3>
            <h4>7/6/2007</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=IxE56lGlYFA'}>covers promo video</ReactPlayer>
            <h1>The Outlaw</h1>
            <h3>Performed with The Resistors at the legendary booya barn</h3>
            <h4>9/11/2004</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=O44Z03_8-NA'}>covers promo video</ReactPlayer>
            <h1>Don't Cry For Me</h1>
            <h3>Performed with The Resistors at The Hollywood Bowl.</h3>
            <h3>Hollywood, MN</h3>
            <h3>2/13/2004</h3>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=utixCcR3GYQ'}>covers promo video</ReactPlayer>
            <h1>Desperate for Love (Instrumental)</h1>
            <h3>This song started out as an instrumental jam. At this point in time I was still writing the lyrics.</h3>
            <h3>Modern Blues Y'all!</h3>
            <h3>Performed with The Resistors at The Hollywood Bowl.</h3>
            <h3>Hollywood, MN</h3>
            <h4>2/13/ 2004</h4>
            {/*Video*/}
            <ReactPlayer url={'https://www.youtube.com/watch?v=1jqAKeO8QTg'}>covers promo video</ReactPlayer>
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

export default Videos;
