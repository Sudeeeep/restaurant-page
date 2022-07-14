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

function homePage() {
    headerLoad();
    const homeContainer = document.createElement('div');
    const homeTextContainer = document.createElement('div');
    const homeHeaderContainer = document.createElement('div');
    const homeHeader = document.createElement('h1');
    const homeSubHeader = document.createElement('h2');
    const menuBtnContainer = document.createElement('div');
    const menuBtn = document.createElement('button');
    const homeImageContainer = document.createElement('div');

    homeContainer.classList.add('home-container');
    homeTextContainer.classList.add('home-text-container');
    homeHeaderContainer.classList.add('home-header-container');
    homeImageContainer.classList.add('home-image-container');
    menuBtnContainer.classList.add('menu-btn-container')
    menuBtn.classList.add('menu-btn');

    homeHeader.innerText = "GET READY TO TASTE THE BEST CHAI IN THE WORLD"
    homeSubHeader.innerText = "AND GRAB A QUICK BITE";
    menuBtn.innerText = "DISCOVER MENU";

    homeContainer.append(homeTextContainer, homeImageContainer);
    homeTextContainer.append(homeHeaderContainer, menuBtnContainer);
    homeHeaderContainer.append(homeHeader, homeSubHeader);
    menuBtnContainer.append(menuBtn);
    contentDiv.append(homeContainer);
}

export {
    headerLoad,
    homePage,
    contentDiv,
}


// //Todo: ADD ATTRIBUTION for icon TO FOOTER 
// <a href="https://www.flaticon.com/free-icons/chai-tea" title="chai tea icons">Chai tea icons created by justicon -
// Flaticon</a>