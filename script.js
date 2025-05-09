const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('.main-nav');
const hamburgerIcon = hamburger.querySelector('img');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    hamburgerIcon.src = './images/icon-close.svg';
  } else {
    hamburgerIcon.src = './images/icon-hamburger.svg';
  }
});



document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault(); // May not be necessary for <span>
      const parentItem = toggle.closest('.nav-item');
  
      // Close other open dropdowns
      document.querySelectorAll('.nav-item').forEach(item => {
        if (item !== parentItem) item.classList.remove('open');
      });
  
      parentItem.classList.toggle('open');
    });
  });
  
  document.addEventListener('click', function (e) {
    const isDropdownToggle = e.target.closest('.dropdown-toggle');
    const isInsideDropdown = e.target.closest('.nav-item');
  
    // If click is NOT on a dropdown toggle and NOT inside a dropdown
    if (!isDropdownToggle && !isInsideDropdown) {
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('open');
      });
    }
  });
  