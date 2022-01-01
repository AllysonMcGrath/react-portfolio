import React from 'react';
import headshot from '../../assets/images/mcgrathphoto.jpg'

function About() {

    return (
        <section className='my-5'>
            <h1 id='about'>About Me</h1>
            <div className='flex-row'>
                <img className="img-fluid" id='headshot' src={headshot} alt="headshot of Allyson McGrath" />
                <p>Welcome to my portfolio! Here you will find examples of my work in web development, my resume, and further information for how to contact me.
                    <br></br>
                    <br></br>
                    I worked in the education system as a substitute and middle school teacher from 2014-2021. While I mainly taught social studies and ELA, I also spent several years teaching various tech classes. This piqued my interest in learning more about web development. I signed up to take the Coding Bootcamp at UT Austin in 2021. I plan to use what I learn to either get a job in a tech field, or in order to improve my ability to teach it to secondary students.
                </p>
            </div>
        </section>
    );
}

export default About;
