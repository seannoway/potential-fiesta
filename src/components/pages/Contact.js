import React from "react";
import emailjs from '@emailjs/browser';
import '../../styles/portfolio.css';

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4v3e4xk', 'template_5q1h5jg', e.target, 'user_4XvQWzj1J8e6qy8WV7V8N')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='portfolio container-fluid'>
            <div className='Containers'>
                <h1 className='pb-5 contactHeader'> Contact Me </h1>
                <form className='form d-flex flex-column contactForm' onSubmit={sendEmail}>
                    <div className='form-group pb-3'>
                        <label for='name'>Name:</label>
                    </div>
                    <div className='form-group pb-3'>
                        <input type='text' className='form-control' name='name' placeholder='Enter your name' />
                    </div>
                    <div className='form-group pb-3'>
                        <label for='email'>Email:</label>
                    </div>
                    <input className="form-group pb-3" type="email" id="contact-email" placeholder='Enter your email'required/>
                    <div className='form-group pb-3'>
                        <label for="postContent">Message:</label>
                    </div>
                    <div className='form-group pb-3'>
                        <textarea className='form-control' type='text' id='contactContent' name='message' placeholder='Enter your message here' required></textarea>
                    </div>
                    <div className='form-group pb-3'>
                        <button className='btn btn-primary' type='submit' value='Send'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
