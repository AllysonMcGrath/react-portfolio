import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Header from './components/Header'
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
    const [contactSelected, setContactSelected] = useState(false);

    const [aboutSelected, setAboutSelected] = useState(true);

    const [portfolioSelected, setPortfolioSelected] = useState(false);

    const [resumeSelected, setResumeSelected] = useState(false);
    
    return (
   <div>
     <Header
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setPortfolioSelected={setPortfolioSelected}
        portfolioSelected={portfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
     <main  className='maincontent'>
     <div class="flex-wrapper">
        {
          !contactSelected && !aboutSelected && !resumeSelected? (
          <Portfolio></Portfolio>
          ) :
          contactSelected && !aboutSelected ? (
            <ContactForm></ContactForm>
          ) :
          resumeSelected && !aboutSelected && !contactSelected ? (
            <Resume></Resume>
          ) :
          (
            <About></About>
          )
        }
        </div>
     </main>
     <Footer></Footer>
   </div>
  );
}


export default App;
