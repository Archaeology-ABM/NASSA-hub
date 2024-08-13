// Get the current page URL
const currentPage = window.location.href;

// Select all the 'nav ul li a' elements
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
  // Check if the href of the 'a' tag matches the current URL
  if (item.href === currentPage) {
    // Add the 'active' class to the parent 'li' element
    item.parentElement.classList.add('active');
  } else {
    // Optionally, remove the 'active' class from the parent 'li' element
    item.parentElement.classList.remove('active');
  }
});
