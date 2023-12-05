document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
  
    window.addEventListener('scroll', function () {
      fadeElements.forEach((element) => {
        const revealPosition = element.getBoundingClientRect().top + window.scrollY - window.innerHeight + 100;
  
        if (window.scrollY > revealPosition) {
          element.classList.add('reveal');
        }
      });
    });
  });
  