import {
    contentDiv
} from ".";

const aboutContainer = document.createElement('div');
const aboutImgContainer = document.createElement('div');
const aboutTextContainer = document.createElement('div');
const aboutText = document.createElement('p');

function aboutLoad() {
    aboutText.innerText = `Being somebody who loves chai, I've come across varied chai-lovers. Some like it kadak, while some like it with more milk. Some like it plain & simple while others like it with masala! Among these categories, are those who only like the classic cutting chai that the chai wala bhaiya sell on the tapris. Our aim at CHAI TAPRI is to provide customers the experience of the beloved  local tapri chai and a few quick snacks to go with the chai.`

    aboutContainer.classList.add('about-container');
    aboutImgContainer.classList.add('about-img-container');
    aboutTextContainer.classList.add('about-text-container');
    aboutText.classList.add('about-text');

    contentDiv.append(aboutContainer);
    aboutContainer.append(aboutImgContainer, aboutTextContainer);
    aboutTextContainer.append(aboutText);
}

export {
    aboutLoad,
    aboutContainer
};