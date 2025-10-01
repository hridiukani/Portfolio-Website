function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to show specific section
function showSection(sectionId) {
  // Remove 'active' class from all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Add 'active' class to the target section
  const targetSection = document.querySelector(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Show/hide footer based on section
  const footer = document.querySelector('footer');
  if (sectionId === '#contact') {
    footer.classList.add('active');
  } else {
    footer.classList.remove('active');
  }
}

// Add click event listeners to all navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Show profile section by default
  showSection('#profile');
  
  // Get all nav links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      showSection(targetId);
      
      // Close hamburger menu if open
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        icon.classList.remove('open');
      }
    });
  });
});