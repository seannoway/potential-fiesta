import React from "react";
import '../../styles/portfolio.css';
import profilePic from '../../images/profile-pic.JPG';

export default function About() {
    return (
        <div className='portfolio container-fluid'>
            <div className='d-flex flex-column Containers align-items-start'>
                <h1 className='aboutHeader'> About Me </h1>
                <img src={profilePic} alt='profile' className='profilePic'></img>
                <div className='aboutMe pb-5'>
                Greetings! I'm Sean Holian, and I'm thrilled to showcase my journey as a student at the UNCC coding bootcamp. My primary objective is to obtain certification as a full stack developer, and I am actively working towards achieving this goal. With a deep-rooted passion for technology, I was naturally drawn to this program, and I couldn't be more enthusiastic about the opportunity to see it through. The course has been an invigorating experience, constantly challenging me and allowing me to explore a wide array of programming languages and delve into the depths of computer science. I'm amazed by the amount of knowledge and skills I've acquired thus far, and I'm eager to showcase them in my portfolio.
                </div>
                <div classname='pb-5' >
                I am thrilled to embark on my journey in the coding industry, as it provides a platform for me to make tangible and meaningful contributions through technology. In today's interconnected world, technology has become an integral part of our daily lives and interactions. I strongly believe in its transformative power and aspire to play a role in shaping its impact in numerous ways. It's my passion to harness the potential of technology and leverage it to create positive changes that benefit individuals and society as a whole.
                </div>
                <div className='pb-5'>
                Beyond my computer screen, you'll often find me gliding through the hills of Charlotte on my longboard, relishing the thrill it brings. Recently, I've also discovered a growing passion for golf, although my handicap is a topic best left untouched. However, my ultimate joy outside of coding lies in the realm of producing and DJing electronic music. It allows me to unleash my creativity, merging my technical skills with a deep appreciation for rhythm and sound. This diverse range of interests adds depth to my life and fuels my drive to explore new horizons both in and out of the coding world.
                </div>
                </div>
        </div>
    );
}