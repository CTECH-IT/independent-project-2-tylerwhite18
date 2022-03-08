const IMAGE_SELECTOR = '[data-image-role="target"]';
const IMAGE_CHOICE = '[data-image-role="trigger"]';

let imgArray = [].slice.call(document.querySelectorAll(IMAGE_SELECTOR)); //creates an array of every image
let linkArray = [].slice.call(document.querySelectorAll(IMAGE_CHOICE)); //creates an array of every clickable link representing an image

let intervalStorage;

function getImage(link) { //for a given link, returns the associated image
    'use strict';
    return link.getAttribute('data-image-url');
}
function setImage(img, num) { //void, sets the target array element to the specified image
    'use strict';
    imgArray[num].setAttribute('src', img);
}

function nowRipple(minI, imgIn, inpt) {
    clearInterval(intervalStorage);
    let top = inpt + minI; 
    let bottom = inpt - minI;
    if (top < imgArray.length) {
        if (top < imgArray.length - 1) {
            setImage(imgIn, top + 1); //change to target image
        }
        setImage(getImage(linkArray[top]), top); //return to normal image
    }
    if (bottom > -1) {
        if (bottom > 0) {
            setImage(imgIn, bottom - 1); //change to target image
        }
        setImage(getImage(linkArray[bottom]), bottom); //return to normal image
    }
    if (minI < linkArray.length) {
        intervalStorage = setInterval(function () { nowRipple(minI + 1, imgIn, inpt); }, 150);
    }
}

function rippleEffect(inpt) {
    let targetImage = getImage(linkArray[inpt]);
    nowRipple(0, targetImage, inpt);
}

function addHoverListener(img) {
    'use strict';
    if (img.getAttribute('data-image-url') != 'images/square.png') {
        let num = linkArray.indexOf(img);
        img.addEventListener('mouseenter', function() {rippleEffect(num); });
    }
}

function initializeEvents() { //to run upon initialization, checks to see when hovering over an image
    'use strict';
    linkArray.forEach(addHoverListener);
}
initializeEvents();