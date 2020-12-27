import { HelperFunctions } from './helper_function';

const restaurant_contact = HelperFunctions.createElementWithClass(
  'section',
  'restaurant_contact'
);

const restaurant_contact_aligner = HelperFunctions.createElementWithClass(
  'div',
  'aligner'
);

const restaurant_contact_form = HelperFunctions.createElementWithClass(
  'div',
  'contact-form'
);

const restaurant_infos = HelperFunctions.createElementWithClass(
  'div',
  'restaurant-infos'
);

const restaurant_address = HelperFunctions.createElementWithClass(
  'div',
  'address'
);

const restaurant_address_img = HelperFunctions.creatImages({
  src: 'https://www.flaticon.com/svg/static/icons/svg/263/263115.svg',
  width: '20',
  height: '20',
});

const restaurant_address_right_section = HelperFunctions.createElementWithClass(
  'div',
  'address-right-section'
);

const restaurant_address_right_section_h4 = document.createElement('h4');
restaurant_address_right_section_h4.textContent = `California, United States`;

const restaurant_address_right_section_p = document.createElement('p');
restaurant_address_right_section_p.textContent = `Santa monica boulevard`;

restaurant_address_right_section.append(
  restaurant_address_right_section_h4,
  restaurant_address_right_section_p
);

restaurant_address.append(
  restaurant_address_img,
  restaurant_address_right_section
);

// phone

const restaurant_phone = HelperFunctions.createElementWithClass('div', 'phone');

const restaurant_phone_img = HelperFunctions.creatImages({
  src: 'https://www.flaticon.com/svg/static/icons/svg/455/455604.svg',
  width: '20',
  height: '20',
});

const restaurant_phone_right_section = HelperFunctions.createElementWithClass(
  'div',
  'phone-right-section'
);

const restaurant_phone_right_section_h4 = document.createElement('h4');
restaurant_phone_right_section_h4.textContent = `00 (440) 9865 562`;

const restaurant_phone_right_section_p = document.createElement('p');
restaurant_phone_right_section_p.textContent = `Mon to Fri 9am to 6 pm`;

restaurant_phone_right_section.append(
  restaurant_phone_right_section_h4,
  restaurant_phone_right_section_p
);

restaurant_phone.append(restaurant_phone_img, restaurant_phone_right_section);

// email

const restaurant_email = HelperFunctions.createElementWithClass('div', 'email');

const restaurant_email_img = HelperFunctions.creatImages({
  src: 'https://www.flaticon.com/svg/static/icons/svg/482/482138.svg',
  width: '20',
  height: '20',
});

const restaurant_email_right_section = HelperFunctions.createElementWithClass(
  'div',
  'email-right-section'
);

const restaurant_email_right_section_h4 = document.createElement('h4');
restaurant_email_right_section_h4.textContent = `support@Restaurant.com`;

const restaurant_email_right_section_p = document.createElement('p');
restaurant_email_right_section_p.textContent = `Send us your query anytime!`;

restaurant_email_right_section.append(
  restaurant_email_right_section_h4,
  restaurant_email_right_section_p
);

restaurant_email.append(restaurant_email_img, restaurant_email_right_section);

// ---------------
restaurant_infos.append(restaurant_address, restaurant_phone, restaurant_email);
//----------------------

const sender_info = HelperFunctions.createElementWithClass(
  'div',
  'sender-infos'
);

const sender_info_divider = HelperFunctions.createElementWithClass(
  'div',
  'divider'
);

const sender_infos = HelperFunctions.creatInputs([
  {
    class: 'form-control',
    type: 'text',
    placeholder: 'Enter your name',
  },
  {
    class: 'form-control',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    class: 'form-control',
    type: 'text',
    placeholder: 'Enter subject',
  },
]);

sender_infos.forEach((element) => {
  sender_info_divider.append(element);
});

const sender_info_divider_2 = HelperFunctions.createElementWithClass(
  'div',
  'divider'
);

const sender_info_textArea = HelperFunctions.createElementWithClass(
  'textarea',
  'form-control'
);

HelperFunctions.setAttributes(sender_info_textArea, {
  cols: '30',
  rows: '10',
  placeholder: 'Enter Message',
});

const sender_divider_2_button = document.createElement('button');

sender_info_divider_2.append(sender_info_textArea, sender_divider_2_button);

sender_divider_2_button.textContent = `send message`;

sender_info.append(sender_info_divider, sender_info_divider_2);

restaurant_contact_form.append(restaurant_infos, sender_info);

restaurant_contact_aligner.append(restaurant_contact_form);

restaurant_contact.append(restaurant_contact_aligner);

export { restaurant_contact };
