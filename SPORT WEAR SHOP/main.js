//SCROLL BUTTONS LEFT - RIGHT START
 // Get the gallery container and buttons
 const galleryContainer = document.getElementById('galleryContainer');
 const scrollLeftButton = document.getElementById('scrollLeft');
 const scrollRightButton = document.getElementById('scrollRight');

 // Define the scroll amount (e.g., how many pixels to scroll)
 const scrollAmount = 200;


 // Function to update the button states based on the current scroll position
 function updateButtonStates() {
     const maxScrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;
     const currentScrollLeft = galleryContainer.scrollLeft;

     console.log(maxScrollLeft)

     // Disable the left button if at the start
     if (currentScrollLeft <= 0) {
         scrollLeftButton.disabled = true;
     } else {
         scrollLeftButton.disabled = false;
     }

     // Disable the right button if at the end
     if (currentScrollLeft >= maxScrollLeft - 80) {
      
         scrollRightButton.disabled = true;
     } else {
         scrollRightButton.disabled = false;
     }
 }

 // Scroll left functionality
 scrollLeftButton.addEventListener('click', function() {
     galleryContainer.scrollBy({
         left: -scrollAmount,
         behavior: 'smooth'
     });
     updateButtonStates(); // Update button states after scrolling
 });

 // Scroll right functionality
 scrollRightButton.addEventListener('click', function() {
     galleryContainer.scrollBy({
         left: scrollAmount,
         behavior: 'smooth'
     });
     updateButtonStates(); // Update button states after scrolling
 });
 //SCROLL BUTTONS LEFT - RIGHT END