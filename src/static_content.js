import { HelperFunctions } from './helper_function';

//header section
const header = HelperFunctions.createElementWithClass('section', 'header');

const navigation = HelperFunctions.createElementWithClass(
  'section',
  'navigation'
);

const burgerBtn = HelperFunctions.createElementWithClass('div', [
  'burgerMenu',
  'close',
]);

const branding = HelperFunctions.createElementWithClass('div', 'branding');

const logo = document.createElement('img');
HelperFunctions.setAttributes(logo, {
  class: 'logo',
  src: './img/logo.png',
  alt: 'logo',
});
branding.append(logo);

const navMenu = HelperFunctions.createElementWithClass('ul', 'nav');

//providing attributes for a helper function to creat images and return an array
const images = HelperFunctions.creatImages([
  { src: './img/nav-icon1.png', alt: 'restaurant icon' },
  { src: './img/nav-icon3.png', alt: 'menu icon' },
  { src: './img/nav-icon2.png', alt: 'about icon' },
  { src: './img/nav-icon8.png', alt: 'contact icon' },
]);

//providing attributes for a helper function to creat links and return an array
const links = HelperFunctions.creatLinks('nav-link', [
  'Home',
  'Menu',
  'About',
  'Contact',
]);

// combining the images and links array in a single array of arrays to pass it to HelperFunctions.creatListItems helper function to creat list element and append theme to to ul element passed as a param
const imageLinkCombo = images.map((element, index) => [element, links[index]]);

//helper function to creat a list full with elements passed as param along with the main ul elem
HelperFunctions.creatListItems(imageLinkCombo, navMenu, 'nav-item');

// add active class to home page when the site load
[...navMenu.children][0].classList.add('active');

navigation.append(burgerBtn, branding, navMenu);
header.append(navigation);

//footer

const footer = document.createElement('footer');

const footer_aligner = HelperFunctions.createElementWithClass('div', 'aligner');

const footerNav = document.createElement('ul');
const footerLinks = HelperFunctions.creatLinks(null, [
  'Home',
  'Menu',
  'About',
  'Contact',
]);

const footerText = document.createElement('span');
footerText.textContent = `Copyright ©2020 All rights reserved | made with &hearts; by
Zakarya-Mks`;

footer_aligner.append(footerNav, footerText);
footer.append(footer_aligner);

HelperFunctions.creatListItems(footerLinks, footerNav);

export { header, footer };
