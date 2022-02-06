import React from 'react';

function Resume() {

    return (
        <section>
            <div className='resume'>
                <h2>Resume</h2>                
                <a href={require('../../assets/Resume.pdf')} download>Download PDF</a>
                <div className='resume-content'>                        

                    <div className='resume-info'>
                        <iframe src="https://docs.google.com/document/d/e/2PACX-1vSljJk0b1yJ5Ife4DnEXJBJe3n0lRqwmimVumXZrobzNKX_gwlTL2yYNa6HGB4dqdglEH7jjWEkyOaN/pub?embedded=true"></iframe>
                    </div>
                    <div className='proficiencies-work-card'>
                        <h4 className='proficiencies-title'>Proficiencies:</h4>
                            <ul className='proficiencies'>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>
                                <li>RESTful APIs</li>
                                <li>ES6</li>
                                <li>Object-oriented programming</li>
                                <li>Object-Relational Mapping</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                <li>MVC paradigm</li>
                                <li>Sequelize</li>
                                <li>Agile Development</li>
                                <li>Progressive Web Apps</li>
                                <li>React</li>
                                <li>NoSQL</li>
                                <li>MERN Stack</li>
                                <li>Node</li>
                                <li>Inquirer</li>
                                <li>Express</li>
                                <li>Handlebars</li>
                                <li>Dotenv</li>
                                <li>Bcrypt</li>
                                <li>Jest</li>
                                <li>Webpack</li>
                            </ul>
                    </div>
                    <div>
                    <img src={require(`../../assets/images/coding-cert.JPG`)} width="100%" height="500px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume;