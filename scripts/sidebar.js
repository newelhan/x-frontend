document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.searchbar-container');
  const searchIcon = document.querySelector('.search-icon');

  container.addEventListener('focusin', function () {
      container.style.borderColor = '#1a73e8'; // Blue color
      searchIcon.src = 'img/search-icon-blue.png'; // Change to blue icon
      searchIcon.style.filter = 'none'; // Remove invert filter if needed
  });

  container.addEventListener('focusout', function () {
      container.style.borderColor = 'transparent'; // Reset border color
      searchIcon.src = 'img/search-icon.png'; // Reset to original icon
      searchIcon.style.filter = 'invert(100%)'; // Reapply invert filter
  });
});
