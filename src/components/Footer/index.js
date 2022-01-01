import React from 'react';


function Footer(props) {

    return (
        <footer>
            <div className='flex-container'>
                <div className='flex-row'>
                    <a href='https://www.linkedin.com/in/allyson-mcgrath-4a43b970/' target='_blank' rel='noreferrer'><img src={require('../../assets/images/linkedin-icon.png')} alt='linkedin icon' /></a>
                    <a href='https://github.com/AllysonMcGrath' target='_blank' rel='noreferrer'><img src={require('../../assets/images/github-icon.png')} alt='github icon'/></a>
                    <a href='https://twitter.com/allysonrmcgrat1' target='_blank' rel='noreferrer'><img src={require('../../assets/images/twitter-icon.png')} alt='twitter icon'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer