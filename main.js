let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
// script.js

/// Optionally, you can add some functionality to interact with the info box if needed

document.getElementById('infoBox').addEventListener('mouseover', function() {
  // Optionally, log a message or perform any other action when the user hovers over the box
  console.log("Hovered over the internship info box.");
});
// script.js
let currentIndex = 0;
const photos = document.querySelectorAll('.gym-photos .photo');
const totalPhotos = photos.length;

// Function to change the images automatically
function showNextPhoto() {
  // Hide the current photo
  photos[currentIndex].style.opacity = 0;

  // Update the index to the next photo (looping back to the first)
  currentIndex = (currentIndex + 1) % totalPhotos;

  // Show the next photo
  photos[currentIndex].style.opacity = 1;
}

// Initialize the first image to be visible
photos[currentIndex].style.opacity = 1;

// Set interval to change images every 3 seconds (3000ms)
setInterval(showNextPhoto, 3000);
