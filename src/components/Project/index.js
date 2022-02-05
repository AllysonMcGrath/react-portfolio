import React from 'react';


function Project(props) {
  const projectsList = [
    {
      name: 'Gale Weather App',
      concepts: 'MongoDB, React, HTML, CSS, Javascript',
      githubLink: 'https://github.com/AllysonMcGrath/gale-weather-app',
      deployedLink: 'https://enigmatic-everglades-42855.herokuapp.com/',
      image: 'galeweathersite.jpg',
      altText: 'Sign-in page for weather site'
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
      name: 'Food Festival',
      concepts: 'Back-End, PWA, Service Workers',
      githubLink: 'https://github.com/AllysonMcGrath/food-festival',
      deployedLink: 'https://allysonmcgrath.github.io/food-festival/',
      image: 'foodfestivalsite.JPG',
      altText: 'Site with form to order pizza'
    },
    {
      name: 'Social Network Back-End',
      concepts: 'Back-End, NoSQL, MongoDB, Mongoose',
      githubLink: 'https://github.com/AllysonMcGrath/social-network-api',
      deployedLink: 'https://watch.screencastify.com/v/bYmx58b7169wSDqu1Skj',
      image: 'socialnetworkpic.JPG',
      altText: 'Insomnia API routes for users, thoughts, and friends'
    },
    {
      name: 'Pizza Hunt Site',
      concepts: 'NoSQL, MongoDB',
      githubLink: 'https://github.com/AllysonMcGrath/pizza-hunt',
      deployedLink: 'https://mcgrath-pizza-hunt.herokuapp.com/',
      image: 'pizzahuntsite.png',
      altText: 'Site with form to put in a pizza recipe'
    },
    {
      name: 'Regex Validation Tutorial',
      concepts: 'Regex',
      githubLink: 'https://gist.github.com/AllysonMcGrath/a99b2f7d95b46ba27a9e69799087e930',
      deployedLink: 'https://gist.github.com/AllysonMcGrath/a99b2f7d95b46ba27a9e69799087e930',
      image: 'regexgistpic.JPG',
      altText: 'README about regex email validation'
    },
    {
      name: 'RPG Chat Site',
      concepts: 'Fullstack, Node.js, Express.js, HTML, CSS, MySQL, Sequelize, Group Project',
      githubLink: 'https://github.com/AllysonMcGrath/fullstack-rpg-chat-site',
      deployedLink: 'https://tavern-cafe-project.herokuapp.com/',
      image: 'taverncafe.JPG',
      altText: 'Site with forum posts'
    },
    {
      name: 'E-Commerce Back End',
      concepts: 'Back-End, ORM, Express.js, MySQL, Sequelize',
      githubLink: 'https://github.com/AllysonMcGrath/E-Commerce-Back-End',
      deployedLink: 'https://drive.google.com/file/d/15-b9ho7byxI-jDUcYHMfF9okC5z5Y4r8/view',
      image: 'ecommercedemo.JPG',
      altText: 'Insomnia API routes for categories, products, and tags'
    },
    {
      name: 'Employee Tracker',
      concepts: 'Back-End, Node.js, MySQL, Inquirer',
      githubLink: 'https://github.com/AllysonMcGrath/employee-tracker.git',
      deployedLink: 'https://watch.screencastify.com/v/LxMhpxl17KUOzy79MJh4',
      image: 'employeetracker.jfif',
      altText: 'Command line with tables with employee info'
    },
    {
      name: 'Election Database',
      concepts: 'Back-End, SQL, MySQL',
      githubLink: 'https://github.com/AllysonMcGrath/u-develop-it.git',
      deployedLink: 'https://github.com/AllysonMcGrath/u-develop-it#readme',
      image: 'electiondatabasepic.JPG',
      altText: 'Site to with place to write notes'
    },
    {
      name: 'Note Taker',
      concepts: 'Express.js, HTML, CSS',
      githubLink: 'https://github.com/AllysonMcGrath/express-note-taker.git',
      deployedLink: 'https://mcgrath-note-taker.herokuapp.com/',
      image: 'notetakersite.png',
      altText: 'Site to with place to write notes'
    },
    {
      name: 'Zookeepr Database Site',
      concepts: 'Back-End, HTML, CSS, JavaScript, Express.js, REST API',
      githubLink: 'https://github.com/AllysonMcGrath/zookeepr',
      deployedLink: 'https://mcgrath-zookeepr.herokuapp.com/',
      image: 'zookeeprsite.jfif',
      altText: 'Command line with questions about a manager'
    },
    {
      name: 'Team Profile Generator',
      concepts: 'Front-End, HTML, CSS, JavaScript, Node.js, OOP',
      githubLink: 'https://github.com/AllysonMcGrath/node-team-manager',
      deployedLink: 'https://allysonmcgrath.github.io/node-team-generator/',
      image: 'teamgeneratorpic.jfif',
      altText: 'Command line with questions about a manager'
    },
    {
      name: 'Jest Another RPG',
      concepts: 'Front-End, JavaScript, Node.js, OOP',
      githubLink: 'https://github.com/AllysonMcGrath/jest-another-rpg',
      deployedLink: 'https://allysonmcgrath.github.io/jest-another-rpg/',
      image: 'jestanotherrpgpic.jfif',
      altText: 'Command line with text battle between player and a goblin'
    },
    {
      name: 'README Generator',
      concepts: 'Front-End, JavaScript, Node.js',
      githubLink: 'https://github.com/AllysonMcGrath/node-readme-generator',
      deployedLink: 'https://allysonmcgrath.github.io/node-readme-generator/',
      image: 'readmegensite.jfif',
      altText: 'Command line with questions about project'
    },
    {
      name: 'Portfolio Generator',
      concepts: 'Front-End, HTML, CSS, JavaScript, Node.js',
      githubLink: 'https://github.com/AllysonMcGrath/portfolio-generator',
      deployedLink: 'https://allysonmcgrath.github.io/portfolio-generator/',
      image: 'portgensite.jpg',
      altText: 'Site with about section and boxes with github project info and links'
    },
    {
      name: 'T-B-D Music',
      concepts: 'Front-End, HTML, CSS, JavaScript, Group Project',
      githubLink: 'https://github.com/AllysonMcGrath/T-B-D',
      deployedLink: 'https://allysonmcgrath.github.io/T-B-D/',
      image: 'tbdsite.jfif',
      altText: 'Site with song search results of youtube video and lyrics'
    },
    {
      name: 'Weather Forecast',
      concepts: 'Front-End, HTML, CSS, JavaScript, API',
      githubLink: 'https://github.com/AllysonMcGrath/apis-weather-forecast',
      deployedLink: 'https://allysonmcgrath.github.io/apis-weather-forecast/',
      image: 'weathersite.jfif',
      altText: 'Site with five day weather forecast by city'
    },
    {
      name: 'Git It Done',
      concepts: 'Front-End, HTML, CSS, JavaScript, API',
      githubLink: 'https://github.com/AllysonMcGrath/git-it-done',
      deployedLink: 'https://allysonmcgrath.github.io/git-it-done/',
      image: 'gititdonesite.jfif',
      altText: 'Site with search bar and results of repositories with issues'
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
      name: 'Taskmaster Pro',
      concepts: 'Front-End, HTML, CSS, JavaScript, jQuery',
      githubLink: 'https://github.com/AllysonMcGrath/taskmaster-pro',
      deployedLink: 'https://allysonmcgrath.github.io/taskmaster-pro/',
      image: 'taskmasterprosite.jfif',
      altText: 'Site with boxes to sort tasks into'
    },
    {
      name: 'Code Quiz',
      concepts: 'Front-End, HTML, CSS, JavaScript, DOM',
      githubLink: 'https://github.com/AllysonMcGrath/apis-online-quiz',
      deployedLink: 'https://allysonmcgrath.github.io/apis-online-quiz/',
      image: 'quizsite.jfif',
      altText: 'Site with question and multiple choice answers'
    },
    {
      name: 'Taskinator',
      concepts: 'Front-End, HTML, CSS, JavaScript, DOM',
      githubLink: 'https://github.com/AllysonMcGrath/taskinator',
      deployedLink: 'https://allysonmcgrath.github.io/taskinator/',
      image: 'taskinatorsite.jfif',
      altText: 'Site with columns to sort tasks into'
    },
    {
      name: 'Password Generator',
      concepts: 'Front-End, JavaScript',
      githubLink: 'https://github.com/AllysonMcGrath/password-generator',
      deployedLink: 'https://allysonmcgrath.github.io/password-generator/',
      image: 'pwgeneratorsite.jfif',
      altText: 'Site with option to generate and display a password'
    },
    {
      name: 'Robot Gladiators Game',
      concepts: 'Front-End, JavaScript',
      githubLink: 'https://github.com/AllysonMcGrath/robot-gladiators',
      deployedLink: 'https://allysonmcgrath.github.io/robot-gladiators',
      image: 'robotgladiators.JPG',
      altText: 'Alert asking if the player wants to fight or skip battle'
    },
    {
      name: 'HTML Code Refactor',
      concepts: 'Front-End, HTML',
      githubLink: 'https://github.com/AllysonMcGrath/HTML-Code-Refactor',
      deployedLink: 'https://allysonmcgrath.github.io/HTML-Code-Refactor/',
      image: 'coderefactor.JPG',
      altText: 'Chunk of HTML'
    },
    {
      name: 'Run-Buddy',
      concepts: 'Front-End, HTML, CSS',
      githubLink: 'https://github.com/AllysonMcGrath/run-buddy',
      deployedLink: 'https://allysonmcgrath.github.io/run-buddy/',
      image: 'runbuddy.JPG',
      altText: 'Site with sign-up and navigation'
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