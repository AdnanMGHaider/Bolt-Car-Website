/* The code below attaches a "scroll" event listener to the window object and when the event is detected
 a callback function runs. The callback function works on an if statement. If the screen is scrolled down
 by more than 50px a "navbarScrollEffect" class is added to the nav element. If not, that class is removed.
*/
window.document.addEventListener("scroll", function() {

const navElement = document.querySelector("nav");

    if (scrollY > 50) {
        navElement.classList.add("navbarScrollEffect");
    } else {
        navElement.classList.remove("navbarScrollEffect");
    }
    });

/* This code changes the logo on scroll from white logo to black logo */
  
window.document.addEventListener("scroll", function() {

    let initialLogoImg = document.querySelector(".logoImgInitial");
    let newImgLocation = "images/bolt black logo.png";
    let oldImgLocation = "images/bolt white logo.png";

    if(scrollY > 50) {
        initialLogoImg.setAttribute("src", newImgLocation);
    }else {
        initialLogoImg.setAttribute("src", oldImgLocation);
    }
});
    
// Intersection observers for the grid 

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
 };

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll

) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});




