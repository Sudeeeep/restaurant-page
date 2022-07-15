const contentDiv = document.querySelector('#content');

function headerLoad() {
    //create elements 
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

    headerImg.src = '../assets/chai-tea.png';
    headerImg.classList.add('header-img');

    headingContainer.classList.add('heading-container');
    mainHeading.innerText = "CHAI TAPRI";

    home.innerText = "HOME";
    menu.innerText = "MENU";
    about.innerText = "ABOUT";
    contact.innerText = "CONTACT";

    contentDiv.appendChild(header);
    header.appendChild(headingContainer);
    headingContainer.append(headerImg, mainHeading);
    header.appendChild(nav);
    nav.appendChild(ul);
    ul.append(home, menu, about, contact);

}

function footerLoad() {
    const footer = document.createElement('footer');
    const gitHubContainer = document.createElement('div');
    const gitHubLogo = document.createElement('img');
    const gitHubUsername = document.createElement('span');
    const footerNavContainer = document.createElement('div');
    const footerHome = document.createElement('span');
    const footerMenu = document.createElement('span');
    const footerAbout = document.createElement('span');
    const footerContact = document.createElement('span');

    gitHubLogo.src = '../assets/github.png'
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


function homePage() {
    headerLoad();

    const homeContainer = document.createElement('div');
    const homeTextContainer = document.createElement('div');
    const homeHeaderContainer = document.createElement('div');
    const homeHeader = document.createElement('h1');
    const homeSubHeader = document.createElement('h2');
    const homeMenuBtnContainer = document.createElement('div');
    const homeMenuBtn = document.createElement('button');
    const homeImageContainer = document.createElement('div');

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
    headerLoad,
    footerLoad,
    homePage,
    contentDiv,
}


// //Todo: ADD ATTRIBUTION for icon TO FOOTER 
// <a href="https://www.flaticon.com/free-icons/chai-tea" title="chai tea icons">Chai tea icons created by justicon -
// Flaticon</a>