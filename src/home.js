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

    <<
    << << < HEAD
        ===
        === =
        const homeContainer = document.createElement('div');
    const homeTextContainer = document.createElement('div');
    const homeHeaderContainer = document.createElement('div');
    const homeHeader = document.createElement('h1');
    const homeSubHeader = document.createElement('h2');
    const homeMenuBtnContainer = document.createElement('div');
    const homeMenuBtn = document.createElement('button');
    const homeImageContainer = document.createElement('div');

    >>>
    >>> > 83 f254128ecb8b6e45a01919b22bc7819aea788c
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

<<
<< << < HEAD

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
}; ===
=== =
export {
    headerLoad,
    footerLoad,
    homePage,
    contentDiv,
}


// //Todo: ADD ATTRIBUTION for icon TO FOOTER 
// <a href="https://www.flaticon.com/free-icons/chai-tea" title="chai tea icons">Chai tea icons created by justicon -
// Flaticon</a>
>>>
>>> > 83 f254128ecb8b6e45a01919b22bc7819aea788c