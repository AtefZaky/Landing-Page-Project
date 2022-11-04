# Landing Page Project

## project description:


For this project, I have built a navigation menu that will dynamically update the navigational menu based on the sections of the page. and I added 
1. The functionality to distinguish the section view and while navigating through the page, the section that is active in the viewport will be distinguished from the other sections this is done by 
    * Detecting the element location relative to the viewport using .getBoundingClientRect() 
    * Using the classList methods to change the active class position
2. The functionality to scroll to sections, when clicking on a navigation item will make the browser scroll to the appropriate section of the page this is done by
    * Listening to the click event 
    * Prevent the default action of the click event on the anchor link and use the scrollIntoView to make this smooth scrolling
I also made the active section in the Navbar highlighted and I made the navigation bar responsive in the small screens


### project author: Atef Zaky
### Technologies used to creat the project:


* HTML 
* CSS 
* Javascript (ECMA6)