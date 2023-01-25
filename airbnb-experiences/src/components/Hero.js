import React from 'react';
import pic from '../images/hero-img.png';


export default function Hero() {
    return(
        <section className='hero'>
            <img src={pic}alt='hero image' />
            <h1 className='hero-title'>Online Experiences</h1>
            <p className='hero-para'>
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
}