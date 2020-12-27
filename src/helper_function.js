class HelperFunctions {
  static setAttributes(el, attrs) {
    for (let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  static createElementWithClass(elmType, className) {
    const domElement = document.createElement(elmType);

    if (Array.isArray(className)) {
      className.forEach((item) => domElement.classList.add(item));
    } else {
      domElement.classList.add(className);
    }
    return domElement;
  }

  static creatLinks(className, linkTexts) {
    const linkArr = [];
    for (let index = 0; index < linkTexts.length; index++) {
      const aTag = document.createElement('a');
      aTag.textContent = linkTexts[index];

      className ? aTag.classList.add(className) : '';

      linkArr.push(aTag);
    }

    return linkArr;
  }

  static creatImages(attrs) {
    const imgArr = [];

    for (let index = 0; index < attrs.length; index++) {
      const img = document.createElement('img');
      this.setAttributes(img, attrs[index]);
      imgArr.push(img);
    }

    return imgArr;
  }

  static creatListItems(innerElmArr, ulElement, listItemClass) {
    for (let index = 0; index < innerElmArr.length; index++) {
      const listItem = document.createElement('li');
      listItemClass ? listItem.classList.add(listItemClass) : '';

      if (Array.isArray(innerElmArr[index])) {
        innerElmArr[index].forEach((element) => {
          listItem.append(element);
        });
      } else listItem.append(innerElmArr[index]);

      ulElement.append(listItem);
    }
  }

  static creatParagraphs(pArr) {
    const arrOfParagraphs = [];
    for (let index = 0; index < pArr.length; index++) {
      const p = document.createElement('p');
      p.textContent = pArr[index];
      arrOfParagraphs.push(p);
    }

    return arrOfParagraphs;
  }

  static creatInputs(attrArr) {
    const inputArray = [];
    for (let index = 0; index < attrArr.length; index++) {
      const input = document.createElement('input');
      this.setAttributes(input, attrArr[index]);
      inputArray.push(input);
    }

    return inputArray;
  }
}

export { HelperFunctions };
