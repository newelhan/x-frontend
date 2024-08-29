document.addEventListener("DOMContentLoaded", function() {
  let forYou = localStorage.getItem("forYou") === "1" ? 1 : 0;

  function updateTabUI() {
    if (forYou === 1) {
      document.querySelector('.foryou-title').classList.add('current-title');
      document.querySelector('.foryou-current').classList.add('full-opacity');
      document.querySelector('.following-title').classList.remove('current-title');
      document.querySelector('.following-current').classList.remove('full-opacity');
    } else {
      document.querySelector('.following-title').classList.add('current-title');
      document.querySelector('.following-current').classList.add('full-opacity');
      document.querySelector('.foryou-title').classList.remove('current-title');
      document.querySelector('.foryou-current').classList.remove('full-opacity');
    }
  }

  updateTabUI();

  document.querySelector('.foryou-tab').addEventListener('click', () => {
    forYou = 1;
    localStorage.setItem("forYou", "1");
    updateTabUI();
  });

  document.querySelector('.following-tab').addEventListener('click', () => {
    forYou = 0;
    localStorage.setItem("forYou", "0");
    updateTabUI();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const postSection = document.querySelector('.post-section');
  const addonButtons = [
    'upload-media',
    'upload-gif',
    'upload-emoji',
    'upload-schedule',
    'upload-location'
  ];

  const postAddonsContainer = document.querySelector('.post-addons');

  addonButtons.forEach(buttonId => {
    const buttonHTML = `
      <div class="post-addon-buttons">
        <button class="addon-button" id="${buttonId}">
          <img class="addon-image" id="${buttonId}-img" src="img/${buttonId}.png">
        </button>
      </div>`;
    
    postAddonsContainer.insertAdjacentHTML('beforeend', buttonHTML);
  });

  const postInput = document.querySelector(".post-text");
  const postOnClick = document.querySelector(".post-onclick");
  const postButton = document.querySelector(".final-post");

  // Upload media and GIFs
  document.getElementById('upload-media').addEventListener('click', () => {
    document.getElementById('upload-media-input').click();
  });

  document.getElementById('upload-gif').addEventListener('click', () => {
    document.getElementById('upload-gif-input').click();
  });

  // File input change event listeners
  document.getElementById('upload-media-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Media selected:', file.name);
      // Handle file upload logic here
    }
  });

  document.getElementById('upload-gif-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('GIF selected:', file.name);
      // Handle GIF upload logic here
    }
  });

  function updatePostSection() {
    if (postInput.value.trim() !== "") {
      postButton.classList.add("can-post");
      postSection.style.height = "157px"; // Increase height to 157px
      postButton.disabled = false;

      // Only update innerHTML if it’s not already set
      if (!postOnClick.querySelector('.visibility-container')) {
        postOnClick.innerHTML = `
          <div class="visibility-container">
            <img class="visibility-icon" src="img/upload-visibility.png">
            <div class="visibility-settings">Everyone can reply</div>
          </div>
          <hr class="horizontal-rule">
        `;

        const visibilityContainer = document.querySelector('.visibility-container');
        const visibilitySettings = document.querySelector('.visibility-settings');
        const visibilityIcon = document.querySelector('.visibility-icon');

        visibilityContainer.addEventListener('click', () => {
          if (visibilitySettings.textContent === "Everyone can reply") {
            visibilitySettings.textContent = "Accounts you follow can reply";
            visibilityIcon.src = "img/visibility-follow.png";
            visibilityContainer.style.width = "242px";
          } else {
            visibilitySettings.textContent = "Everyone can reply";
            visibilityIcon.src = "img/upload-visibility.png";
            visibilityContainer.style.width = "169px";
          }
        });
      }
    } else {
      postButton.classList.remove("can-post");
      postButton.disabled = true;
      postOnClick.innerHTML = ''; // Clear the postOnClick content
      postSection.style.height = "120px"; // Reset height to 120px
    }
  }

  postInput.addEventListener("input", updatePostSection);
  
  postInput.addEventListener("click", () => {
    // Only handle postInput click if not already processed
    if (postInput.value.trim() !== "") {
      updatePostSection(); // Update section based on input value
    }
  });
});