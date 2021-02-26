import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"

class Navbar extends React.Component {
    render() {
      return (
        <div className ="NavList">
          <Link className="navBtn" to="/">Who am I?</Link>
         <Link className="navBtn" to="/Projects">Check out my Projects!</Link>
          <Link className="navBtn" to="/Contact">Contact Me!</Link>
              
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