import {
    contentDiv,
} from ".";

import chaiLogo from '../assets/chai-tea.png';

const header = document.createElement('header');
const headingContainer = document.createElement('div');
const mainHeading = document.createElement('h1');
const headerImg = document.createElement('img');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const about = document.createElement('li');
const contact = document.createElement('li');


function headerLoad() {
    //create elements 
    headerImg.src = chaiLogo;
    headerImg.classList.add('header-img');

    headingContainer.classList.add('heading-container');
    mainHeading.innerText = "CHAI TAPRI";

    home.innerText = "HOME";
    menu.innerText = "MENU";
    about.innerText = "ABOUT";
    contact.innerText = "CONTACT";

    contentDiv.append(header);
    header.append(headingContainer);
    headingContainer.append(headerImg, mainHeading);
    header.append(nav);
    nav.append(ul);
    ul.append(home, menu, about, contact);

}

export {
    headerLoad,
    header,
    headingContainer,
    mainHeading,
    headerImg,
    nav,
    ul,
    home,
    menu,
    about,
    contact,

};