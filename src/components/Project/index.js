import React from 'react';


function Project (props) {
    const projectsList = [
        {
          name: 'E-Commerce Back End',
          concepts: 'ORM, Express.js, MySQL, Sequelize.js',
          githubLink: 'https://github.com/AllysonMcGrath/E-Commerce-Back-End',
          deployedLink: 'https://drive.google.com/file/d/15-b9ho7byxI-jDUcYHMfF9okC5z5Y4r8/view',
          image: 'ecommercedemo.JPG',
          altText: 'Insomnia API routes for categories, products, and tags'
        },
        {
          name: 'Photography Portfolio',
          concepts: 'React, SPAs, MERN',
          githubLink: 'https://github.com/AllysonMcGrath/photo-port',
          deployedLink: 'https://allysonmcgrath.github.io/photo-port/',
          image: 'photoport.JPG',
          altText: 'Site with photography gallery'
        },
        {
          name: 'Budget Tracker',
          concepts: 'PWAs, MongoDB',
          githubLink: 'https://github.com/AllysonMcGrath/budget-tracker',
          deployedLink: 'https://mcgrath-budget-tracker.herokuapp.com/',
          image: 'budgettracker.jfif',
          altText: 'Site with money transactions and graph'
        },
        {
          name: 'Employee Tracker',
          concepts: 'Node.js, MySQL, Inquirer',
          githubLink: 'https://github.com/AllysonMcGrath/employee-tracker.git',
          deployedLink: 'https://watch.screencastify.com/v/LxMhpxl17KUOzy79MJh4',
          image: 'employeetracker.jfif',
          altText: 'Command line with tables with employee info'
        },
        {
          name: 'Note Taker',
          concepts: 'Express.js',
          githubLink: 'https://github.com/AllysonMcGrath/express-note-taker.git',
          deployedLink: 'https://glacial-plains-48628.herokuapp.com/',
          image: 'notetakersite.png',
          altText: 'Site to with place to write notes'
        },
        {
          name: 'Work Day Scheduler',
          concepts: 'Third-Party APIs (jQuery, Bootstrap, Moment.js) HTML, JavaScript',
          githubLink: 'https://github.com/AllysonMcGrath/jquery-workday-scheduler.git',
          deployedLink: 'https://allysonmcgrath.github.io/jquery-workday-scheduler/',
          image: 'schedulersite.jfif',
          altText: 'Site with slots to schedule things'
        },
        {
          name: 'Pizza Hunt Site',
          concepts: 'NoSQL, MongoDB',
          githubLink: 'https://github.com/AllysonMcGrath/pizza-hunt',
          deployedLink: 'Not Deployed',
          image: 'pizzahuntsite.png',
          altText: 'Site with form to order pizza'
        },
        {
          name: 'RPG Chat Site',
          concepts: 'Fullstack, Node.js, Express.js, HTML, CSS, MySQL, Sequelize',
          githubLink: 'https://github.com/AllysonMcGrath/fullstack-rpg-chat-site',
          deployedLink: 'https://tavern-cafe-project.herokuapp.com/',
          image: 'taverncafe.JPG',
          altText: 'Site with forum posts'
        },
      ];
      

      return (
          <div className="flex-row">
            {projectsList.map((project) => (
              <div className="work-card" key={project.name}>
                <h3 className="work-card-title">{project.name}</h3>
                <img className="img-fluid work-card-image" src={require(`../../assets/images/${project.image}`)} alt={project.altText} key={project.name} />
                    <p>Concepts: {project.concepts}</p>
                    <p><a href={project.githubLink} target="_blank" rel='noreferrer'>GithubRepo</a></p>
                    <p><a href={project.deployedLink} target="_blank" rel='noreferrer'>Deployed App</a></p>
              </div>
            ))}
          </div>
      );
}

export default Project;