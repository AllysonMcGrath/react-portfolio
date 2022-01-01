import React from 'react';

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
            <nav>
                <ul className='flex-row' id='nav-list'>
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => {setContactSelected(false); setAboutSelected(true); setPortfolioSelected(false); setResumeSelected(false)}}>About Me</span>
                    </li>                    
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                            <span onClick={() => {setContactSelected(false); setAboutSelected(false); setPortfolioSelected(true); setResumeSelected(false)}}>Portfolio</span>                    
                            </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(true); setAboutSelected(false); setPortfolioSelected(false); setResumeSelected(false)}}>Contact</span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(false); setAboutSelected(false); setPortfolioSelected(false); setResumeSelected(true)}}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;