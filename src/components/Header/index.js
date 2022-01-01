import React from 'react';
import Navigation from '../Navigation';

function Header(props) {
    const {
        contactSelected,
        setContactSelected,
        setAboutSelected,
        aboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props


    return (
        <header className='flex-row'>
            <h1>
                <a data-testid='link' href='/react-portfolio'>Allyson McGrath
                </a>
            </h1>
                <Navigation
                        aboutSelected={aboutSelected}
                        setAboutSelected={setAboutSelected}
                        contactSelected={contactSelected}
                        setContactSelected={setContactSelected}
                        setPortfolioSelected={setPortfolioSelected}
                        portfolioSelected={portfolioSelected}
                        resumeSelected={resumeSelected}
                        setResumeSelected={setResumeSelected}></Navigation>
        </header>
    )
}

export default Header;