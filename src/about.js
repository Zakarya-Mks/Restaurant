import { HelperFunctions } from './helper_function';

const about_restaurant = HelperFunctions.createElementWithClass(
  'section',
  'about_restaurant'
);

const about_restaurant_aligner = HelperFunctions.createElementWithClass(
  'div',
  'aligner'
);

const about_section = HelperFunctions.createElementWithClass(
  'div',
  'about_section'
);

const about_left = HelperFunctions.createElementWithClass('div', 'about-left');

const about_left_img = HelperFunctions.creatImages([{ src: 'img/chef1.jpg' }]);

about_left.append(about_left_img[0]);

const about_right = HelperFunctions.createElementWithClass(
  'div',
  'about-right'
);

const about_right_h1 = document.createElement('h1');
about_right_h1.textContent = `Daily Food Courses with Drinks`;

const p1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Inventore exercitationem voluptatibus quia praesentium dicta
sint, sed earum, voluptatum laboriosam dolores provident
accusamus eveniet labore id, pariatur voluptatem? Veniam, odio
magnam.`;

const p2 = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
aliquam laudantium debitis! Debitis, veniam esse reiciendis
excepturi aut incidunt nostrum porro quibusdam obcaecati quidem
eveniet pariatur in, repellat nisi. Vitae!`;

const p3 = ` Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Repellat porro impedit omnis cupiditate, non labore praesentium
quo voluptatum qui beatae culpa illo numquam deleniti sequi
reprehenderit eveniet maxime commodi pariatur?`;

const about_right_paragraphs = HelperFunctions.creatParagraphs([p1, p2, p3]);

const about_right_img = HelperFunctions.creatImages([
  { src: 'img/signature.png' },
]);

about_right.append(about_right_h1);
about_right_paragraphs.forEach((el) => about_right.append(el));
about_right.append(about_right_img[0]);

about_section.append(about_left, about_right);

about_restaurant_aligner.append(about_section);

about_restaurant.append(about_restaurant_aligner);

export { about_restaurant };
