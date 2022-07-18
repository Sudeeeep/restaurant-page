import {
    contentDiv
} from ".";
import {
    footerLoad
} from "./footer";
import {
    headerLoad
} from "./header";

const contactContainer = document.createElement('div');
const numberContainer = document.createElement('div');
const addressContainer = document.createElement('div');
const callIcon = document.createElement('img');
const contactNumberContainer = document.createElement('div');
const firstNumber = document.createElement('p');
const secondNumber = document.createElement('p');
const address = document.createElement('p');

const mapIcon = document.createElement('img');

function contactPage() {

    callIcon.src = '../assets/call_FILL.png';
    mapIcon.src = '../assets/pin_drop.png';
    firstNumber.innerText = "+91 44855221";
    secondNumber.innerText = "+91 44865331";
    address.innerText = "221B, Baker Street"


    contactContainer.classList.add('contact-container');
    numberContainer.classList.add('number-container');
    addressContainer.classList.add('address-container');
    contactNumberContainer.classList.add('contact-number-container');
    firstNumber.classList.add('first-number');
    secondNumber.classList.add('second-number');
    callIcon.classList.add('call-icon');
    mapIcon.classList.add('map-icon');
    address.classList.add('address');


    contentDiv.append(contactContainer);
    contactContainer.append(numberContainer, addressContainer);
    addressContainer.append(mapIcon, address);
    numberContainer.append(callIcon, contactNumberContainer);
    contactNumberContainer.append(firstNumber, secondNumber);
}

export {
    contactPage,
    contactContainer
};