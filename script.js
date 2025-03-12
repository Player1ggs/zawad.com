// Smooth scrolling and color change effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      let target = document.querySelector(this.getAttribute('href'));
      
      // Smooth scroll
      target.scrollIntoView({
        behavior: 'smooth'
      });
  
      // Remove 'active' class from all sections
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  
      // Add 'active' class to clicked section
      target.classList.add('active');
    });
  });
  
  // Scroll animations
  function revealOnScroll() {
    let sections = document.querySelectorAll('.section');
    let imageContainer = document.querySelector('.image-container');
    
    sections.forEach(section => {
      let sectionTop = section.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  
    // Reveal image
    let imageTop = imageContainer.getBoundingClientRect().top;
    if (imageTop < window.innerHeight - 100) {
      imageContainer.classList.add('visible');
    }
  }
  
  // Run on scroll
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  