import React from "react"
import '../../styles/portfolio.css';

export default function Resume() {
    return (
        <div className='section container-fluid'>
            <div className='Containers'>
                <h1 className='pb-5 resumeHeader'> Resume </h1>
                <div className='row'>
                    <div className='col-4'>
                        <h2 className='resumeLink'>
                            <a href={"https://drive.google.com/file/d/1E2_AHUL1B9vcxBNHpckahOJyyNSBHXaE/view?usp=share_link"} target='_blank' 
                            rel="noreferrer"className="resLink">
                                Link to Full Resume
                            </a>
                        </h2>
                    </div>
                    <div className='col-md-6'>
                        <h2 className='resumeHeader'>Profile</h2>
                        <h3 className='resumeinfo'>
                            Highly motivated and passionate coding bootcamp graduate with a strong interest in technology. Experienced in various programming languages and eager to apply newly acquired skills to contribute to dynamic projects and teams.
                        </h3>
                        <h2 className='resumeHeader'>Education</h2>
                        <h3 className='resumeinfo'>
                            University of North Carolina at Charlotte - Full Stack Web Development Course - 2023
                        </h3>
                        <h2 className='resumeHeader'>Skills</h2>
                        <h3 className='resumeinfo'>
                            Programming Languages: HTML, CSS, JavaScript
                            Web Development: Responsive Design, Front-end Development, Back-end Development
                            Tools & Technologies: Git, GitHub, Visual Studio Code
                        </h3>



                    </div>
                </div>
            </div>
        </div>
    );
}

