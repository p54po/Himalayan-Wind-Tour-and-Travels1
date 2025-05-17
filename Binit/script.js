
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.hero-carousel .slide');
    let current = 0;
  
    function showNextSlide() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }
  
    // Auto-slide every 4 seconds
    setInterval(showNextSlide, 4000);
  });
  
