import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/Assets/hand_icon.png'
import arrow_icon from '../Assests/Assets/arrow.png'
import hero_image from '../Assests/Assets/Hero.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
         <h1>From seed to harvest, cultivating nature's bounty with care, dedication, and love.</h1>
         <div>

        <div className="hero-hand-icon">
            <p>New</p>
             <img src={hand_icon} alt="" />
        </div>
        <p>Collection</p>
        <p>Collections for everyone</p>
         </div>
         <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
         </div>
        </div>
        <div className="hero-right">
         <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
