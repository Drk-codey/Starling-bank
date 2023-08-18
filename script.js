// Declaring Variable for  
const navbar = document.getElementById("nav-bar");
const navbarContainer = document.getElementById("navbar-container");
const navLinks = document.querySelector(".nav-links");
const btnContainer = document.querySelector(".btn-container");

// Create a media condition that targets viewport less than 1024px wide
const mediaQuery = window.matchMedia('(max-width: 1024px)');

// Adds and Removes Nav content based on the Screensize
function changeNAvDisplay(e) {
  if (e.matches) {
    navbarContainer.appendChild(navLinks);
    navbarContainer.appendChild(btnContainer);
  } else {
    navbarContainer.removeChild(navLinks);
    navbarContainer.removeChild(btnContainer);
    navbar.appendChild(navLinks);
    navbar.appendChild(btnContainer);
  }
}

mediaQuery.addEventListener("change", changeNAvDisplay);

// Put Navbar content in place when hambumger is toggled
function navChildappend() {
  navbarContainer.appendChild(navLinks);
  navbarContainer.appendChild(btnContainer);
  navLinks.classList.toggle("show");
  btnContainer.classList.toggle("show");
}

function menuOnClick() {
  navChildappend();
  document.getElementById("hamburger-lines").classList.toggle("change");
  
  navbarContainer.classList.toggle("change");
}























