const IMAGE_SELECTOR = '[data-image-role="target"]';
const IMAGE_CHOICE = '[data-image-role="trigger"]';

let imgArray = [].slice.call(document.querySelectorAll(IMAGE_SELECTOR));
let linkArray = [].slice.call(document.querySelectorAll(IMAGE_CHOICE));

function getImage(link) {
    'use strict';
    return link.getAttribute('data-image-url');
}

function rippleEffect(inpt) { //the problem
    for (let i = inpt - 1; i >= 0; i--) {
       
    }
    for (let j = inpt + 1; j <= linkArray.length; j++) {

    }
}

function addHoverListener(img, num) {
    'use strict';
    img.addEventListener("mouseenter", rippleEffect(num))
}

function initializeEvents() {
    'use strict';
    linkArray.forEach(addHoverListener);
}
