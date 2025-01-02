//SCROLL BUTTONS LEFT - RIGHT START
 // Get the gallery container and buttons
 const scrollLeftButton = document.getElementById('leftBtn');
 const scrollRightButton = document.getElementById('rightBtn');
 const galleryContainer= document.querySelector('.gallery')
 const buttons = document.querySelectorAll('.btn');
 

// Function to update the state of the buttons based on the current scroll position
function updateButtonStates(section) {
    const gallery = section.querySelector('.gallery');
    const leftButton = section.querySelector('[data-direction="left"]');
    const rightButton = section.querySelector('[data-direction="right"]');
  
    // Get the current scroll position and the scrollable width of the gallery
    const isAtLeft = gallery.scrollLeft === 0;
    const isAtRight = gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth -100;
  
    // Update button states
    leftButton.disabled = isAtLeft;
    rightButton.disabled = isAtRight;
  }
  
  // Function to handle button clicks (scroll left or right)
  function handleButtonClick(event) {
    const direction = event.target.getAttribute('data-direction');
    const section = event.target.closest('section');
    const gallery = section.querySelector('.gallery');
    const scrollAmount = direction === 'left' ? -200 : 200; // Adjust scroll value if needed
  
    gallery.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  
    // After scroll, update button states
    updateButtonStates(section);
  }
  
  // Add event listeners to all buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
  
  // Also, update button states on page load and on scroll
  document.querySelectorAll('section').forEach(section => {
    // Initial state update on page load
    updateButtonStates(section);
  
    // Update state when scrolling manually
    const gallery = section.querySelector('.gallery');
    gallery.addEventListener('scroll', () => {
      updateButtonStates(section);
    });
  });

  //THIRD SECTION -  Shop our Icons - Elena
  const galleryShopping = document.getElementById('gallery-container');


// Function to scroll left
function scrollingLeft() {
    galleryShopping.scrollBy({ left: -400, behavior: 'smooth' }); // Scroll 200px left
    console.log("PElenka")
}


//Button on click circle
function toggleCircle(element) {
  // const element = document.getElementById('arrow-left');
  console.log("Elenooooooooo")
  element.classList.toggle('active');
}
// Function to scroll right
function scrollingRight() {

  galleryShopping.scrollBy({ left: 400, behavior: 'smooth' }); // Scroll 200px right
}

  //HEADER SECTION  - BURGER MENU
  const burgerMenuBtn = document.querySelector(".burger-menu-btn");
  const burgerMenuBtnClose = document.querySelector(".close-burger-menu-btn");
  const nav = document.querySelector(".navBarContainer");
  const body = document.querySelector(".body");
  const overlay = document.querySelector(".overlay");
  
  burgerMenuBtn.addEventListener("click", () => {
    nav.classList.add("js-burger-menu");
    overlay.classList.add("js-overlay");
    body.style.overflow = "hidden";
  });
  
  burgerMenuBtnClose.addEventListener("click", () => {
    nav.classList.remove("js-burger-menu");
    overlay.classList.remove("js-overlay");
    body.style.overflow = "auto";
  });
  
  overlay.addEventListener("click", () => {
    nav.classList.remove("js-burger-menu");
    overlay.classList.remove("js-overlay");
    body.style.overflow = "auto";
  });
  