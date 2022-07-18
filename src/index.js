import './style.css';

import {
    homePage,
} from './home';



const contentDiv = document.querySelector('#content');

function homePageLoad() {
    homePage();
}

homePageLoad();

export {
    contentDiv,
}