import { HelperFunctions } from './helper_function';

const restaurant_menu = HelperFunctions.createElementWithClass(
  'section',
  'restaurant_menu'
);

const restaurant_menu_aligner = HelperFunctions.createElementWithClass(
  'div',
  'aligner'
);

const appetizer_menu = HelperFunctions.createElementWithClass(
  'div',
  'appetizer_menu'
);

const appetizer_menu_h1 = document.createElement('h1');
appetizer_menu_h1.textContent = `Appetizer`;

const appetizer_menu_list = document.createElement('ul');

const appetizer_menu_list_h4 = document.createElement('h4');
appetizer_menu_list_h4.innerHTML = `Ham & Potato Sandwiches <span>29$</span>`;
const appetizer_menu_list_p = document.createElement('p');
appetizer_menu_list_p.textContent = `(French bread baguette, cooked ham, potato salad)`;

let appetizer_listItemsContentArr = [];
for (let index = 0; index < 4; index++) {
  appetizer_listItemsContentArr.push([
    appetizer_menu_list_h4.cloneNode(true),
    appetizer_menu_list_p.cloneNode(true),
  ]);
}

HelperFunctions.creatListItems(
  appetizer_listItemsContentArr,
  appetizer_menu_list,
  null
);

appetizer_menu.append(appetizer_menu_h1, appetizer_menu_list);
// debugger;
// salads

const salade_dishes_menu = HelperFunctions.createElementWithClass(
  'div',
  'salade_dishes_menu'
);

const salade_dishes_menu_h1 = document.createElement('h1');
salade_dishes_menu_h1.textContent = `Side Dishes`;

const salade_dishes_menu_list = document.createElement('ul');

const salade_dishes_menu_list_h4 = document.createElement('h4');
salade_dishes_menu_list_h4.innerHTML = `Ham & Potato Sandwiches <span>29$</span>`;
const salade_dishes_menu_list_p = document.createElement('p');
salade_dishes_menu_list_p.textContent = `(French bread baguette, cooked ham, potato salad)`;

let salade_listItemsContentArr = [];
for (let index = 0; index < 4; index++) {
  salade_listItemsContentArr.push([
    salade_dishes_menu_list_h4.cloneNode(true),
    salade_dishes_menu_list_p.cloneNode(true),
  ]);
}

HelperFunctions.creatListItems(
  salade_listItemsContentArr,
  salade_dishes_menu_list,
  null
);

salade_dishes_menu.append(salade_dishes_menu_h1, salade_dishes_menu_list);

// main courses

const Main_Courses_menu = HelperFunctions.createElementWithClass(
  'div',
  'Main_Courses_menu'
);

const Main_Courses_menu_h1 = document.createElement('h1');
Main_Courses_menu_h1.textContent = `Main Courses`;

const Main_Courses_menu_list = document.createElement('ul');

const Main_Courses_menu_list_h4 = document.createElement('h4');
Main_Courses_menu_list_h4.innerHTML = `Ham & Potato Sandwiches <span>29$</span>`;
const Main_Courses_menu_list_p = document.createElement('p');
Main_Courses_menu_list_p.textContent = `(French bread baguette, cooked ham, potato salad)`;

let Main_Courses_listItemsContentArr = [];
for (let index = 0; index < 7; index++) {
  Main_Courses_listItemsContentArr.push([
    Main_Courses_menu_list_h4.cloneNode(true),
    Main_Courses_menu_list_p.cloneNode(true),
  ]);
}

HelperFunctions.creatListItems(
  Main_Courses_listItemsContentArr,
  Main_Courses_menu_list,
  null
);

Main_Courses_menu.append(Main_Courses_menu_h1, Main_Courses_menu_list);

// deserts menu

const deserts_menu = HelperFunctions.createElementWithClass(
  'div',
  'deserts_menu'
);

const deserts_menu_h1 = document.createElement('h1');
deserts_menu_h1.textContent = `Desserts`;

const deserts_menu_list = document.createElement('ul');

const deserts_menu_list_h4 = document.createElement('h4');
deserts_menu_list_h4.innerHTML = `Ham & Potato Sandwiches <span>29$</span>`;
const deserts_menu_list_p = document.createElement('p');
deserts_menu_list_p.textContent = `(French bread baguette, cooked ham, potato salad)`;

let deserts_listItemsContentArr = [];
for (let index = 0; index < 4; index++) {
  deserts_listItemsContentArr.push([
    deserts_menu_list_h4.cloneNode(true),
    deserts_menu_list_p.cloneNode(true),
  ]);
}

HelperFunctions.creatListItems(
  deserts_listItemsContentArr,
  deserts_menu_list,
  null
);

deserts_menu.append(deserts_menu_h1, deserts_menu_list);

restaurant_menu_aligner.append(
  appetizer_menu,
  salade_dishes_menu,
  Main_Courses_menu,
  deserts_menu
);
restaurant_menu.append(restaurant_menu_aligner);

export { restaurant_menu };
