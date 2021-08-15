import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import UploadForm from './UploadForm';


function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='/videos/main.mp4' autoPlay loop muted />
        <h1>Your favoirte pics online</h1>
        <p>Upload Your Images Now</p>
        <UploadForm/>
        {/* <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            
          </Button>
          { <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </Button> }
        </div> */}
      </div>
    );
  }
  
  export default HeroSection;
