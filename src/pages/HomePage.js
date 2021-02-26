import React from "react";
import Hero from "../componets/Hero";
import Paragraph from "../componets/Paragraph";
// import '../styles/Home.css';


class HomePage extends React.Component {
  render() {
    return (

      <div>
        <Hero />
        <Paragraph
        title='About Me'
          description=" A confident speaker, outgoing team member and an open minded learner as well as an eager student. An experienced forklift operator, a veteran customer service worker and also a master money manager. Currently adding to my wide variety of skills with Road to Hire in hopes of beginning a life as a Computer Programmer."
          title2='What is R2H'
          description2="Road to Hire is a rigorous six month job training program for technology and professional skill development. Throughout this six month course I have learned an implemented coding languages such as HTML, CSS, Javascript and much more! In addition to the many other tech skills that were learned, I had the ability to develop and build professional workplace skills such as email etiquette, conflict resolution, emotional intelligence and other skills privy to today's work environment."
          />
       
        {/* <Paragraph
          title='What is R2H'
          description=" Road to Hire is a rigorous six month job training program for technology and professional skill development. Throughout this six month course I have learned an implemented coding languages such as HTML, CSS, Javascript and much more! In addition to the many other tech skills that were learned, I had the ability to develop and build professional workplace skills such as email etiquette, conflict resolution, emotional intelligence and other skills privy to today's work environment." /> */}
      
      </div>
    );
  }
}

export default HomePage;