import {
    contentDiv
} from ".";

import adrakChai from '../assets/adrak-chai.png';
import chocolateChai from '../assets/chocolate-chai.png';
import roseChai from '../assets/rose-chai.png';
import kesarChai from '../assets/kesar-chai.png';
import bunMaska from '../assets/bun-maska.png';
import fries from '../assets/fries.png';
import masalaToast from '../assets/masala-toast.png';
import maggie from '../assets/masala-maggi.png';

const menuContainer = document.createElement('div');
const chaiHeader = document.createElement('h1');
const chaiMenuContainer = document.createElement('div');

const adrakChaiContainer = document.createElement('div');
const adrakChaiImgContainer = document.createElement('div');
const adrakChaiImg = document.createElement('img');
const adrakChaiTextContainer = document.createElement('div');
const adrakChaiText = document.createElement('p');

const chocolateChaiContainer = document.createElement('div');
const chocolateChaiImgContainer = document.createElement('div');
const chocolateChaiImg = document.createElement('img');
const chocolateChaiTextContainer = document.createElement('div');
const chocolateChaiText = document.createElement('p');

const roseChaiContainer = document.createElement('div');
const roseChaiImgContainer = document.createElement('div');
const roseChaiImg = document.createElement('img');
const roseChaiTextContainer = document.createElement('div');
const roseChaiText = document.createElement('p');

const kesarChaiContainer = document.createElement('div');
const kesarChaiImgContainer = document.createElement('div');
const kesarChaiImg = document.createElement('img');
const kesarChaiTextContainer = document.createElement('div');
const kesarChaiText = document.createElement('p');

const snacksHeader = document.createElement('h1');
const snacksMenuContainer = document.createElement('div');

const bunMaskaContainer = document.createElement('div');
const bunMaskaImgContainer = document.createElement('div');
const bunMaskaImg = document.createElement('img');
const bunMaskaTextContainer = document.createElement('div');
const bunMaskaText = document.createElement('p');

const friesContainer = document.createElement('div');
const friesImgContainer = document.createElement('div');
const friesImg = document.createElement('img');
const friesTextContainer = document.createElement('div');
const friesText = document.createElement('p');

const masalaToastContainer = document.createElement('div');
const masalaToastImgContainer = document.createElement('div');
const masalaToastImg = document.createElement('img');
const masalaToastTextContainer = document.createElement('div');
const masalaToastText = document.createElement('p');

const maggieContainer = document.createElement('div');
const maggieImgContainer = document.createElement('div');
const maggieImg = document.createElement('img');
const maggieTextContainer = document.createElement('div');
const maggieText = document.createElement('p');


function menuPage() {

    chaiHeader.innerText = "CHAI";
    snacksHeader.innerText = "SNACKS";
    adrakChaiText.innerText = "ADRAK CHAI";
    chocolateChaiText.innerText = "CHOCOLATE CHAI";
    roseChaiText.innerText = "ROSE CHAI";
    kesarChaiText.innerText = "KESAR CHAI";
    bunMaskaText.innerText = "BUN MASKA";
    friesText.innerText = "MASALA FRIES";
    masalaToastText.innerText = "MASALA TOAST";
    maggieText.innerText = "VEGETABLE MAGGIE";

    adrakChaiImg.src = adrakChai;
    chocolateChaiImg.src = chocolateChai;
    roseChaiImg.src = roseChai;
    kesarChaiImg.src = kesarChai;
    bunMaskaImg.src = bunMaska;
    friesImg.src = fries;
    masalaToastImg.src = masalaToast;
    maggieImg.src = maggie;

    menuContainer.classList.add('menu-container');
    chaiHeader.classList.add('chai-header');
    chaiMenuContainer.classList.add('chai-menu-container');

    adrakChaiContainer.classList.add('adrak-chai-container');
    adrakChaiImgContainer.classList.add('adrak-chai-img-container');
    adrakChaiImg.classList.add('adrak-chai-img');
    adrakChaiTextContainer.classList.add('adrak-chai-text-container');
    adrakChaiText.classList.add('adrak-chai-text');

    chocolateChaiContainer.classList.add('chocolate-chai-container');
    chocolateChaiImgContainer.classList.add('chocolate-chai-img-container');
    chocolateChaiImg.classList.add('chocolate-chai-img');
    chocolateChaiTextContainer.classList.add('chocolate-chai-text-container');
    chocolateChaiText.classList.add('chocolate-chai-text');

    roseChaiContainer.classList.add('rose-chai-container');
    roseChaiImgContainer.classList.add('rose-chai-img-container');
    roseChaiImg.classList.add('rose-chai-img');
    roseChaiTextContainer.classList.add('rose-chai-text-container');
    roseChaiText.classList.add('rose-chai-text');

    kesarChaiContainer.classList.add('kesar-chai-container');
    kesarChaiImgContainer.classList.add('kesar-chai-img-container');
    kesarChaiImg.classList.add('kesar-chai-img');
    kesarChaiTextContainer.classList.add('kesar-chai-text-container');
    kesarChaiText.classList.add('kesar-chai-text');

    snacksHeader.classList.add('snacks-header');
    snacksMenuContainer.classList.add('snacks-menu-container');

    bunMaskaContainer.classList.add('bun-maska-container');
    bunMaskaImgContainer.classList.add('bun-maska-img-container');
    bunMaskaImg.classList.add('bun-maska-img');
    bunMaskaTextContainer.classList.add('bun-maska-text-container');
    bunMaskaText.classList.add('bun-maska-text');

    friesContainer.classList.add('fries-container');
    friesImgContainer.classList.add('fries-img-container');
    friesImg.classList.add('fries-img');
    friesTextContainer.classList.add('fries-text-container');
    friesText.classList.add('fries-text');

    masalaToastContainer.classList.add('masala-toast-container');
    masalaToastImgContainer.classList.add('masala-toast-img-container');
    masalaToastImg.classList.add('masala-toast-img');
    masalaToastTextContainer.classList.add('masala-toast-text-container');
    masalaToastText.classList.add('masala-toast-text');

    maggieContainer.classList.add('maggie-container');
    maggieImgContainer.classList.add('maggie-img-container');
    maggieImg.classList.add('maggie-img');
    maggieTextContainer.classList.add('maggie-text-container');
    maggieText.classList.add('maggie-text');

    contentDiv.append(menuContainer);
    menuContainer.append(chaiHeader, chaiMenuContainer, snacksHeader, snacksMenuContainer);
    chaiMenuContainer.append(adrakChaiContainer, chocolateChaiContainer, roseChaiContainer, kesarChaiContainer);
    snacksMenuContainer.append(bunMaskaContainer, friesContainer, masalaToastContainer, maggieContainer)

    adrakChaiContainer.append(adrakChaiImgContainer, adrakChaiTextContainer);
    adrakChaiImgContainer.append(adrakChaiImg);
    adrakChaiTextContainer.append(adrakChaiText);

    chocolateChaiContainer.append(chocolateChaiImgContainer, chocolateChaiTextContainer);
    chocolateChaiImgContainer.append(chocolateChaiImg);
    chocolateChaiTextContainer.append(chocolateChaiText);

    roseChaiContainer.append(roseChaiImgContainer, roseChaiTextContainer);
    roseChaiImgContainer.append(roseChaiImg);
    roseChaiTextContainer.append(roseChaiText);

    kesarChaiContainer.append(kesarChaiImgContainer, kesarChaiTextContainer);
    kesarChaiImgContainer.append(kesarChaiImg);
    kesarChaiTextContainer.append(kesarChaiText);

    bunMaskaContainer.append(bunMaskaImgContainer, bunMaskaTextContainer);
    bunMaskaImgContainer.append(bunMaskaImg);
    bunMaskaTextContainer.append(bunMaskaText);

    friesContainer.append(friesImgContainer, friesTextContainer);
    friesImgContainer.append(friesImg);
    friesTextContainer.append(friesText);

    masalaToastContainer.append(masalaToastImgContainer, masalaToastTextContainer);
    masalaToastImgContainer.append(masalaToastImg);
    masalaToastTextContainer.append(masalaToastText);

    maggieContainer.append(maggieImgContainer, maggieTextContainer);
    maggieImgContainer.append(maggieImg);
    maggieTextContainer.append(maggieText);
}

export {
    menuPage,
    menuContainer
};