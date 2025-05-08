const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');
const hamburgerIcon = hamburger.querySelector('img');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Toggle icon
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
  