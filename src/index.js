import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage.js";
import ContactPage from "./pages/ContactPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./componets/NavBar";
// import Footer from "./componets/Footer";



export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/>
          <Route path="/Projects" exact component={ProjectsPage} />
          <Route path="/Contact" exact component={ContactPage} />
          <Route path="/" exact component={HomePage} />
        </div>
        {/* <Footer/> */}
      </BrowserRouter>
      
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);