import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";


import Home from "./Home";
import Dates from "./Dates";
import HireMe from "./HireMe";
import Resistors from "./Resistors";
import Contact from "./Contact";
import Photos from "./Photos";
import Videos from "./Videos";
import YbYR from "./YbYR";
import AboutMe from "./AboutMe";

function App() {
  return (
    <>
    <div className="background">
    <div className ="NavBar">
        <Router>        {/* initializes url so child routes can be made*/}
            <navbar />
        <Switch>        {/* allows customizable routes */}
            <Route exact path="/" component={Home}/>    {/*Routing default*/}
            <Route exact path="/AboutMe" component={AboutMe}/>
            <Route exact path="/Dates" component={Dates}/>  {/*Routing specific page*/}
            <Route exact path="/HireMe" component={HireMe}/>    {/*Routing specific*/}
            <Route exact path="/Resistors" component={Resistors}/>  {/* ^^ */}
            <Route exact path="/Contact" component={Contact}/>      {/* ^^ */}
            <Route exact path="/Photos" component={Photos}/>        {/* ^^ */}
            <Route exact path="/Videos" component={Videos}/>        {/* ^^ */}
            <Route exact path="/YbYR" component={YbYR}/>            {/* ^^ */}
        </Switch>
        </Router>
    </div>
    </div>
      </>
  );
}

export default App;
