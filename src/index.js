import './style.css';

import {
    homeContainer,
    homeMenuBtn,
    homePage,
} from './home';

import {
    about,
    contact,
    headingContainer,
    home,
    menu
} from './header';

import {
    contactPage,
    contactContainer
} from './contact';

import {
    aboutContainer,
    aboutLoad
} from './about';
import {
    menuContainer,
    menuPage
} from './menu';


const contentDiv = document.querySelector('#content');

home.addEventListener('click', homePageLoad);
contact.addEventListener('click', contactPageLoad);
about.addEventListener('click', aboutPageLoad);
menu.addEventListener('click', menuPageLoad);
headingContainer.addEventListener('click', homePageLoad);
homeMenuBtn.addEventListener('click', menuPageLoad)

function homePageLoad() {
    contactContainer.remove();
    aboutContainer.remove();
    menuContainer.remove();
    homePage();
}

function contactPageLoad() {
    homeContainer.remove();
    aboutContainer.remove();
    menuContainer.remove();
    contactPage();
}

function aboutPageLoad() {
    homeContainer.remove();
    contactContainer.remove();
    menuContainer.remove();
    aboutLoad();
}

function menuPageLoad() {
    homeContainer.remove();
    contactContainer.remove();
    aboutContainer.remove();
    menuPage();
}

homePageLoad();

export {
    contentDiv,
}