import { HelperFunctions } from './helper_function';

//middle section
const restaurant_presentation = HelperFunctions.createElementWithClass(
  'section',
  'restaurant_presentation'
);

const restaurant_presentation_aligner = HelperFunctions.createElementWithClass(
  'div',
  'aligner'
);

// breakfast menu
const breakfast_menu_presentation = HelperFunctions.createElementWithClass(
  'div',
  'breakfast_menu_presentation'
);

const breakfast_menu_left_section = HelperFunctions.createElementWithClass(
  'div',
  'left-section'
);

const p1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Cupiditate dolore fuga similique adipisci sit repudiandae
quaerat enim unde soluta! Quia excepturi ex sit. Praesentium
ipsum quia, velit alias iusto laudantium molestiae sequi eius
commodi itaque.`;

const p2 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
expedita ex praesentium ducimus nobis earum vitae quidem veniam
reiciendis error. Ex eveniet earum quod atque magnam, placeat
modi dolorem doloribus nam illum rerum facilis minus!`;

const breakfast_menu_h1 = document.createElement('h1');
breakfast_menu_h1.textContent = `Daily Food Courses with Drinks`;

const breakfast_menu_paragraphs = HelperFunctions.creatParagraphs([p1, p2]);

const button = HelperFunctions.createElementWithClass('button', 'seeMenuBtn');
button.textContent = `see full menu`;

breakfast_menu_left_section.append(breakfast_menu_h1);
breakfast_menu_paragraphs.forEach((el) =>
  breakfast_menu_left_section.append(el)
);
breakfast_menu_left_section.append(button);

const breakfast_menu_right_section = HelperFunctions.createElementWithClass(
  'div',
  'right-section'
);

const breakfast_menu_img_container = HelperFunctions.createElementWithClass(
  'div',
  'img-container'
);

let breakfast_menu_imageArr = HelperFunctions.creatImages([
  { src: 'img/food1.jpg', alt: 'hot cop of coffee' },
  { src: 'img/food2.png', alt: 'a dish of potato with beans' },
]);

breakfast_menu_imageArr.forEach((el) =>
  breakfast_menu_img_container.append(el)
);
breakfast_menu_right_section.append(breakfast_menu_img_container);

//lunch menu

const lunch_menu_presentation = HelperFunctions.createElementWithClass(
  'div',
  'lunch_menu_presentation'
);

const lunch_menu_left_section = HelperFunctions.createElementWithClass(
  'div',
  'left-section'
);

const lunch_menu_h1 = document.createElement('h1');
lunch_menu_h1.textContent = `Daily Food Courses with Drinks`;

const lunch_menu_paragraphs = HelperFunctions.creatParagraphs([p1, p2]);

lunch_menu_left_section.append(lunch_menu_h1);
lunch_menu_paragraphs.forEach((el) => lunch_menu_left_section.append(el));

const lunch_menu_right_section = HelperFunctions.createElementWithClass(
  'div',
  'right-section'
);

const lunch_menu_img_container = HelperFunctions.createElementWithClass(
  'div',
  'img-container'
);

let lunch_menu_imageArr = HelperFunctions.creatImages([
  { src: 'img/food3.jpg', alt: 'a crispy pancake' },
  { src: 'img/food4.png', alt: 'steak in a plate' },
]);

lunch_menu_imageArr.forEach((el) => lunch_menu_img_container.append(el));
lunch_menu_right_section.append(lunch_menu_img_container);

breakfast_menu_presentation.append(
  breakfast_menu_left_section,
  breakfast_menu_right_section
);

lunch_menu_presentation.append(
  lunch_menu_left_section,
  lunch_menu_right_section
);

restaurant_presentation_aligner.append(
  breakfast_menu_presentation,
  lunch_menu_presentation
);

restaurant_presentation.append(restaurant_presentation_aligner);

//reservation form

const reservation_form = HelperFunctions.createElementWithClass(
  'section',
  'reservation_form'
);

const reservation_form_aligner = HelperFunctions.createElementWithClass(
  'div',
  'aligner'
);

const form_section = HelperFunctions.createElementWithClass(
  'div',
  'form-section'
);

const form = document.createElement('form');
const form_h1 = document.createElement('h1');
form_h1.textContent = `Reservation Form`;

const form_inputs = HelperFunctions.creatInputs([
  { class: 'form-control', type: 'text', placeholder: 'Name' },
  { class: 'form-control', type: 'email', placeholder: 'Email Address' },
  { class: 'form-control', type: 'tel', placeholder: 'Phone Number' },
  { class: 'form-control', type: 'number', placeholder: 'Number Of People' },
  {
    class: 'form-control',
    type: 'datetime-local',
    placeholder: 'Date And Time',
  },
  { class: 'form-control', type: 'text', placeholder: 'Event' },
]);

const form_button = document.createElement('button');
form_button.textContent = 'make reservation';

form.append(form_h1);
form_inputs.forEach((el) => form.append(el));
form.append(form_button);
form_section.append(form);

reservation_form_aligner.append(form_section);
reservation_form.append(reservation_form_aligner);

// in association with section
const in_association_with = HelperFunctions.createElementWithClass(
  'section',
  'in_association_with'
);

const in_association_with_aligner = HelperFunctions.createElementWithClass(
  'div',
  'aligner'
);

const in_association_with_h1 = document.createElement('h1');
in_association_with_h1.textContent = `in association with`;

const in_association_with_paragraphs = HelperFunctions.creatParagraphs([p1]);

const in_association_with_brandings = HelperFunctions.createElementWithClass(
  'div',
  'brandings'
);

const in_association_with_brandings_images = HelperFunctions.creatImages([
  { src: 'img/logo1.png' },
  { src: 'img/logo2.png' },
  { src: 'img/logo3.png' },
  { src: 'img/logo4.png' },
  { src: 'img/logo5.png' },
]);

in_association_with_brandings_images.forEach((el) =>
  in_association_with_brandings.append(el)
);

in_association_with_aligner.append(
  in_association_with_h1,
  in_association_with_paragraphs[0],
  in_association_with_brandings
);

in_association_with.append(in_association_with_aligner);

export { restaurant_presentation, reservation_form, in_association_with };
