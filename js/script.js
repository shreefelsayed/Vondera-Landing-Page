
  // JavaScript to create a slide show with arrow buttons (enable only on mobile devices)

  // Variables to keep track of the current slide index and slide count
  let currentSlide = 0;
  const slideCount = document.querySelectorAll('#pricing-slides > div').length;

  // Function to show a specific slide
  function showSlide(slideIndex) {
    const slides = document.querySelectorAll('#pricing-slides > div');
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? 'block' : 'none';
    });
  }

  // Function to handle the automatic sliding (only on mobile devices)
  function startSlideshow() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      showSlide(currentSlide);
      // Set the interval to advance to the next slide every 3 seconds (adjust as needed)
      setInterval(nextSlide, 3000);
    }
  }

  // Function to go to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
  }

  // Event listeners for arrow buttons (only on mobile devices)
  if (window.matchMedia('(max-width: 768px)').matches) {
    document.querySelector('.arrow.left').addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      showSlide(currentSlide);
    });

    document.querySelector('.arrow.right').addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % slideCount;
      showSlide(currentSlide);
    });
  }

  // Start the slideshow when the page loads
  window.addEventListener('load', startSlideshow);
