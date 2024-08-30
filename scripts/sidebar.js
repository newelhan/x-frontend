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


document.addEventListener("DOMContentLoaded", function() {
  const trendsData = [
    {
        category: "Health · Trending",
        name: "Monkeypox Outbreak",
        posts: "32.5K posts"
    },
    {
        category: "World News · Trending",
        name: "Wildfire Crisis",
        posts: "120K posts"
    },
    {
        category: "Economy · Trending",
        name: "Global Inflation",
        posts: "90.7K posts"
    }
];


  function renderTrends() {
      const trendsContainer = document.querySelector('.trends-list');
      trendsContainer.innerHTML = '';

      trendsData.forEach(trend => {
          const trendHTML = `
              <div class="trend-item">
                  <div class="trend-info">
                      <div class="trend-category">${trend.category}</div>
                      <div class="trend-name">${trend.name}</div>
                      <div class="trend-posts">${trend.posts}</div>
                  </div>
                  <div class="more-button-container">
                      <button class="stat-button" id="more-button">
                          <img id="more-addon-icon" src="img/more-addon-icon.png" alt="More Icon">
                          <div class="stat-button-tooltip">More</div>
                      </button>
                  </div>
              </div>
          `;

          trendsContainer.insertAdjacentHTML('beforeend', trendHTML);
      });
  }

  renderTrends();
});
