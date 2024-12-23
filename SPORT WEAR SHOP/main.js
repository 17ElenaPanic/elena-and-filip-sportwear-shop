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
  