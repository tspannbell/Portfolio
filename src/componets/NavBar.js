import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"

class Navbar extends React.Component {
    render() {
      return (
        <div className ="NavList">
              <button className="navBtn"> <Link to="/Contact">Contact Me!</Link></button> 
              <button className="navBtn"><Link to="/Projects">Check out my Projects!</Link>  </button>
              <button className="navBtn"> <Link to="/">Who am I?</Link></button>
              
              <a className="words" href="https://www.github.com/tspannbell">
                  <img class="linkBtn" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_square_black-512.png" alt="github"></img>
            </a>
              <a className="words" href="https://www.linkedin.com/in/torren-s/">
                  <img class="linkBtn" src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/LinkedIN-512.png" alt="linkedin"></img>
            </a>
        </div>
      );
    }
  }
  
  export default Navbar;