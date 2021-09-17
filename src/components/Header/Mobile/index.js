import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}> 
            <i class="fi-rr-copy"></i>
            </div>
            <div className="mobile-options">
            <div className='mobile-option'>
                <a href='#project'>
                <i class="fi-rr-dart option-icon"></i> Projects
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#skills'> 
                    <i class="fi-rr-inbox option-icon"></i> Skills
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#education'> 
                    <i class="fi-rr-forward option-icon"></i> Education
                </a>
            </div>
            <div className='mobile-option'>
                <a href='#contact'> 
                    <i class="fi-rr-duplicate option-icon"></i> Contact
                </a>
            </div>
            </div>
        </div>
    )
}

export default Mobile
