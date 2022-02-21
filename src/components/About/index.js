import React from 'react';
import headshot from '../../assets/images/mcgrathphoto.jpg'

function About() {

    return (
        <section className='my-5 about-me'>
            <h2 id='about'>About Me</h2>
            <div className='about-container'>
                <div className='about-item'>
                    <img id='headshot' src={headshot} alt="headshot of Allyson McGrath" />
                </div>
                <div className='about-item about-text'>
                    <p>Welcome to my portfolio! Here you will find examples of my work in web development, my resume, and further information for how to contact me.
                        <br></br>
                        <br></br>
                        <hr className='hr-line' color='black' width='30%'></hr>
                        <br></br>
                        I am a certified Full Stack Developer. I have experience with a variety of technologies and concepts, such as HTML/CSS, JavaScript, OOP, REST APIs, SQL, and the MERN stack.
                        <br></br>
                        <br></br>
                        I worked in the education system as a substitute and middle school teacher from 2014-2021. While I mainly taught social studies and ELA, I also spent several years teaching various tech classes. This piqued my interest in learning more about web development. I signed up to take the Coding Bootcamp at UT Austin in 2021, and completed the course in January of 2022.

                    </p>
                    
                </div>
            </div>
        </section>
    );
}

export default About;
