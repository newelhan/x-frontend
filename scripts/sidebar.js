document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.searchbar');
  const searchIcon = document.querySelector('.search-icon');

  container.addEventListener('focusin', function () {
      container.style.backgroundColor = 'black';
      container.style.borderColor = '#1a73e8';
      searchIcon.src = 'img/search-icon-blue.png';
      searchIcon.style.width = '16px';
  });

  container.addEventListener('focusout', function () {
      container.style.backgroundColor = 'rgb(32, 35, 40)';
      container.style.borderColor = 'transparent';
      searchIcon.src = 'img/search-icon.png';
      searchIcon.style.width = '17px';
  });
});
