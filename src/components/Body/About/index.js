import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                Hello 👋🏼, my name is <span className="info-name">Kevin!</span>
                <br /> I'm a passionate problem-solver, 
                <br /> creator of colorful content, 
                <br /> and a life long learner.  
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/coding.png').default} className='picture'/>
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
