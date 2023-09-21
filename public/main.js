const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

document.addEventListener('DOMContentLoaded', function() {
    var image = document.querySelector('.hero img');
  
    image.style.opacity = '0'; // Set initial opacity to 0
  
    setTimeout(function() {
      image.style.transition = 'opacity 1s ease-in'; // Apply transition effect
      image.style.opacity = '1'; // Set opacity to 1 for fade-in effect
    }, 200); // Delay the fade-in effect by 100 milliseconds
  });
  