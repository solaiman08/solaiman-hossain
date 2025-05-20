// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: highlight current section
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      section.classList.add('active-section');
    } else {
      section.classList.remove('active-section');
    }
  });
});
