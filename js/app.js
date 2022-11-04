/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
//target the sections and add them to a variable as an array to loop through them later
const sections = document.querySelectorAll('section');
let sectionId = '';
const menuIcon = document.getElementById('menu__icon');
/**
 * End Global Variables 
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav

//creat the list items and add them to the fragment and then add the fragment to the navList
let creatListItem = () => {
    const fragment = document.createDocumentFragment();
    sections.forEach(section => {
        sectionName = section.getAttribute('data-nav');
        sectionId = section.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = `<a class="menu__link" href="#${sectionId}">${sectionName}</a>`;
        fragment.append(listItem);
    });
    navList.append(fragment);
}

// Add class 'active' to section when near top of viewport
let changeActiveClass = () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 350 &&
            section.getBoundingClientRect().top >= -350) {
            //if the rect top is between 350 and -350 add the active class 
            section.classList.add('your-active-class');
            //store the current section id
            sectionId = section.getAttribute('id');
        } else {
            //else remove the active class
            section.classList.remove('your-active-class');
        }
    });
};
// Add class active to the nav link
let changeNavActiveClass = () => {
    const links = document.querySelectorAll('a');
    for (let link of links) {
        let linkId = link.getAttribute('href').substring(1);
        if (linkId == sectionId) {
            //if link id equal current section id add class active
            link.classList.add('active__link');
        } else { //else remove class active
            link.classList.remove('active__link');
        }
    }
}
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
creatListItem();
// Scroll to section on link click
document.querySelectorAll('a').forEach(aLink => {
    aLink.addEventListener('click', e => {
        e.preventDefault();//prevent the default action when click the link
        document.querySelector(aLink.getAttribute("href")).scrollIntoView({ behavior: "smooth" });//add the smooth behavior to the scrolling
    });
});

// set sections and nav active classes
document.addEventListener('DOMContentLoaded', changeActiveClass);
document.addEventListener('DOMContentLoaded', changeNavActiveClass);
// toggle sections as active
document.addEventListener('scroll', changeActiveClass);
// toggle nav link as active
document.addEventListener('scroll', changeNavActiveClass);
// toggle show menu class
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
});
