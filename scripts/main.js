const IMAGE_SELECTOR = '[data-image-role="target"]';
const IMAGE_CHOICE = '[data-image-role="trigger"]';

let imgArray = [].slice.call(document.querySelectorAll(IMAGE_SELECTOR)); //creates an array of every image
let linkArray = [].slice.call(document.querySelectorAll(IMAGE_CHOICE)); //creates an array of every clickable link representing an image

function getImage(link) { //for a given link, returns the associated image
    'use strict';
    return link.getAttribute('data-image-url');
}
function setImage(img, num) { //void, sets the target array element to the specified image
    'use strict';
    imgArray[num].setAttribute('src', img);
}

function rippleEffect(inpt) { //truly a problem
    window.alert('hover'); //just to test that the function is called from the event listener
    let targetImage = getImage(linkArray[inpt]);
    for (let i = 0; i < imgArray.length; i++) { 
       let diff = (imgArray - linkArray) / 2; //imgArray is longer
       let top = diff + inpt + i; 
       let bottom = diff + inpt - i;
       if (top < imgArray.length) {
           if (top < imgArray.length - 1) {
                setImage(targetImage, top + 1); //change to target image
           }
           setImage(getImage(linkArray[top]), top); //return to normal image
       }
       if (bottom > -1) {
           if (bottom > 0) {
                setImage(targetImage, bottom - 1); //change to target image
           }
           setImage(getImage(linkArray[bottom]), bottom); //return to normal image
       }
    }
}

function addHoverListener(img) {
    'use strict';
    let num = linkArray.indexOf(img);
    img.addEventListener("mouseenter", rippleEffect(num))
}

function initializeEvents() { //to run upon initialization, checks to see when hovering over an image
    'use strict';
    linkArray.forEach(addHoverListener);
}
