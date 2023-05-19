import React from 'react';
import twitterLogo from '../images/2021 Twitter logo - white.png'
import linkedInLogo from '../images/LI-In-Bug.png'
import gitHubLogo from '../images/github-mark-white.png'

function footerLogo () {
    return (
        <nav className='foot pt-5 pb-3'>
        <div className="foot">
            <a className="me-4" href="https://github.com/seannoway" target="_blank" rel="noopener noreferrer">
                <img src={gitHubLogo} alt="GitHub Logo" className="icon footerLogo"></img>
            </a>
            <a className="me-4" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={linkedInLogo} alt="LinkedIn Logo" className="icon footerLogo"></img>
            </a>
            <a className="me-4" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <img src={twitterLogo} alt="Twitter Logo" className="icon footerLogo"></img>
            </a>
        </div>
    </nav>
    )
}

export default footerLogo;