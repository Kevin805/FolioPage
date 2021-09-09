import React from 'react'
import './web.css'

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                    <i class="fi-rr-microphone option-icon"></i> Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#skills'> 
                    <i class="fi-rr-inbox option-icon"></i> Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#education'> 
                    <i class="fi-rr-forward option-icon"></i> Education
                </a>
            </div>
            <div className='web-option'>
                <a href='#contact'> 
                    <i class="fi-rr-duplicate option-icon"></i> Contact
                </a>
            </div>
        </div>
    )
}

export default Web
