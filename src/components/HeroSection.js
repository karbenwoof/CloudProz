import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons"

function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <h1>NEXT GENERATION DEVELOPMENT</h1>
      <p>Try our online computing for your projects</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          PRICING <FontAwesomeIcon icon={faDollarSign} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
