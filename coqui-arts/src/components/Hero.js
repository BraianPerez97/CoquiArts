import React from 'react';
import coverDoodle from '../assets/cover/hero.png'


const Hero = () => {
    return (
        <div className='hero'>

            <h1 className='slogan' >
                If it's <span >Art</span>, checkout <span>coquiArts!</span>
            </h1>

        <img src={coverDoodle} className='heroDoodle' alt="cover"></img>

        <h4 className='description'>An easy way to connect <span>creativity</span> in Puerto Rico</h4>

        <btn id='learn-more' type='button'>
            
            <span className='btn-text button-3'>Learn more ➜</span></btn>

        </div>
    )
}

export default Hero;