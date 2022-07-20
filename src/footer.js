import {
    contentDiv,
} from ".";

import gitHub from '../assets/github.png';

const footer = document.createElement('footer');
const gitHubContainer = document.createElement('div');
const gitHubLogo = document.createElement('img');
const gitHubUsername = document.createElement('span');
const footerNavContainer = document.createElement('div');
const footerHome = document.createElement('span');
const footerMenu = document.createElement('span');
const footerAbout = document.createElement('span');
const footerContact = document.createElement('span');

function footerLoad() {


    gitHubLogo.src = gitHub;
    gitHubUsername.innerText = "@Sudeeeep";
    footerHome.innerText = "HOME";
    footerMenu.innerText = "MENU";
    footerAbout.innerText = "ABOUT";
    footerContact.innerText = "CONTACT";

    gitHubContainer.classList.add('git-hub-container');
    gitHubLogo.classList.add('git-hub-logo');
    gitHubUsername.classList.add('git-hub-username');
    footerNavContainer.classList.add('footer-nav-container');
    footerHome.classList.add('footer-nav');
    footerMenu.classList.add('footer-nav');
    footerAbout.classList.add('footer-nav');
    footerContact.classList.add('footer-nav');

    contentDiv.appendChild(footer);
    footer.append(footerNavContainer, gitHubContainer);
    footerNavContainer.append(footerHome, footerMenu, footerAbout, footerContact);
    gitHubContainer.append(gitHubLogo, gitHubUsername);

}

export {
    footerLoad,
    footer,
    gitHubContainer,
    gitHubLogo,
    gitHubUsername,
    footerNavContainer,
    footerHome,
    footerMenu,
    footerAbout,
    footerContact,
};