import {
  restaurant_presentation as home_top,
  reservation_form as home_middle,
  in_association_with as home_bottom,
} from './initial-page-load';

import { header, footer } from './static_content';

import { restaurant_menu as menu } from './menu';

import { restaurant_contact as contact } from './contact';

import { about_restaurant as about } from './about';

document
  .querySelector('#content')
  .append(header, home_top, home_middle, home_bottom, footer);

const domElements = (function () {
  const content = document.querySelector('#content');
  const nav = document.querySelector('.nav');
  const allNavItems = document.querySelectorAll('.nav-item');
  const seeMenuBtn = document.querySelector('.seeMenuBtn');

  return { content, nav, allNavItems, seeMenuBtn };
})();

let domListener = (function () {
  const navClick = (e) => {
    if (e.target.closest('.nav-item')) {
      let menuItem = e.target.closest('.nav-item');
      _changerActiveMenuItem(menuItem);
      changeCurrentPage([...menuItem.children][1].textContent);
    }
  };

  const changeCurrentPage = function (pageName) {
    [...domElements.content.children].forEach((element) => {
      if (element != header && element != footer) {
        domElements.content.removeChild(element);
      }
    });
    if (pageName.toLowerCase() == 'home') {
      domElements.content.insertBefore(home_top, footer);
      domElements.content.insertBefore(home_middle, footer);
      domElements.content.insertBefore(home_bottom, footer);
    } else if (pageName.toLowerCase() == 'menu') {
      domElements.content.insertBefore(menu, footer);
    } else if (pageName.toLowerCase() == 'contact') {
      domElements.content.insertBefore(contact, footer);
    } else if (pageName.toLowerCase() == 'about') {
      domElements.content.insertBefore(about, footer);
    }
  };

  const _changerActiveMenuItem = (clickedNavItem) => {
    domElements.allNavItems.forEach((element) => {
      if (clickedNavItem == element) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };

  return { navClick, changeCurrentPage };
})();

domElements.nav.addEventListener('click', domListener.navClick);
