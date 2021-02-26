import React from 'react'
import '../styles/Hero.css';


class Hero extends React.Component {
    render() {
        return (
            <div className='hero-container'>
                <video src='/videos/Ink.mp4' autoPlay loop muted />
                <img className="pic" src="/pic/port.jpg" alt="Profile Pic"></img>
                <h1 className="name">Torren Spann-Bell</h1>
                <p>Aspiring Front-End Developer </p>
            </div>

        );
    }
}


export default Hero;