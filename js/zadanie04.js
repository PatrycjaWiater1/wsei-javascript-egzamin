// ad.1
const sampleClass = document.querySelectorAll('.sample_class');

function getTagsOfElements(elements) {
    let arr = [];
    elements.forEach(e => {
        arr.push(e.tagName);
    });
    return arr;
}


// ad.2
const sampleId = document.querySelector('#sample_id');

function getClassesOfElement(element) {
    let arr = [];
    element.classList.forEach(e => {
        arr.push(e);
    });
    return arr;
}


// ad.3
const listElements = document.querySelectorAll('.sample_class_2 li');

function getInnerTextsOfElements(elements) {
    let arr = [];
    elements.forEach(e => {
        arr.push(e.innerText);
    });
    return arr;
}


// ad.4
const links = document.querySelectorAll('a');

function getAddressesOfElements(elements) {
    let arr = [];
    elements.forEach(e => {
        arr.push(e.getAttribute('href'));
    });
    return arr;
}


// ad.5
const children = document.querySelector('.sample_class_3').childNodes;


console.log(getTagsOfElements(sampleClass));
console.log(getClassesOfElement(sampleId));
console.log(getInnerTextsOfElements(listElements));
console.log(getAddressesOfElements(links));
console.log(getTagsOfElements(children));
