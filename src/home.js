import {
    headerLoad
} from "./header";

import {
    footerLoad
} from "./footer";

import {
    contentDiv,
} from ".";


const homeContainer = document.createElement('div');
const homeTextContainer = document.createElement('div');
const homeHeaderContainer = document.createElement('div');
const homeHeader = document.createElement('h1');
const homeSubHeader = document.createElement('h2');
const homeMenuBtnContainer = document.createElement('div');
const homeMenuBtn = document.createElement('button');
const homeImageContainer = document.createElement('div');


function homePage() {
    headerLoad();

    homeContainer.classList.add('home-container');
    homeTextContainer.classList.add('home-text-container');
    homeHeaderContainer.classList.add('home-header-container');
    homeImageContainer.classList.add('home-image-container');
    homeMenuBtnContainer.classList.add('home-menu-btn-container')
    homeMenuBtn.classList.add('home-menu-btn');

    homeHeader.innerText = "GET READY TO TASTE THE BEST CHAI IN THE WORLD."
    homeSubHeader.innerText = "AND GRAB A QUICK BITE";
    homeMenuBtn.innerText = "DISCOVER MENU";

    homeContainer.append(homeTextContainer, homeImageContainer);
    homeTextContainer.append(homeHeaderContainer, homeMenuBtnContainer);
    homeHeaderContainer.append(homeHeader, homeSubHeader);
    homeMenuBtnContainer.append(homeMenuBtn);
    contentDiv.append(homeContainer);

    footerLoad();
}


export {
    homePage,
    homeContainer,
    homeTextContainer,
    homeHeaderContainer,
    homeHeader,
    homeSubHeader,
    homeMenuBtnContainer,
    homeMenuBtn,
    homeImageContainer,
};