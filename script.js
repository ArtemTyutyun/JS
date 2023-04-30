// Zoom in and out of the photo with a click //
const photo = document.querySelector('.photo');

photo.addEventListener('click', () => {
    photo.classList.toggle('active');
});



// Navigation by letters //
var navLetters = document.querySelectorAll('.nav-letter');

document.addEventListener('keydown', function(event) {
 
  var navLetter = event.key.toUpperCase();
  
  
  var letterToNavigate = Array.from(navLetters).find(function(letter) {
    return letter.getAttribute('data-nav') === navLetter;
  });
  
  
  if (letterToNavigate) {
    var section = letterToNavigate.parentNode;
    section.scrollIntoView({behavior: "smooth"});
  }
});