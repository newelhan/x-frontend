document.addEventListener("DOMContentLoaded", function() {
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

  // Emoji picker
  document.getElementById('upload-emoji').addEventListener('click', () => {
    const emoji = prompt("Enter emoji:");
    if (emoji) {
      postInput.value += emoji;
      postInput.focus();
    }
  });

  // Schedule post
  document.getElementById('upload-schedule').addEventListener('click', () => {
    const scheduleInput = document.getElementById('schedule-datetime-input');
    scheduleInput.click();

    scheduleInput.addEventListener('change', (event) => {
      const scheduledTime = event.target.value;
      if (scheduledTime) {
        console.log('Post scheduled for:', scheduledTime);
        // Store the scheduled time or handle scheduling logic here
      }
    });
  });

  postInput.addEventListener("click", function() {
    if (!postOnClick.querySelector('.visibility-container')) {
      postOnClick.innerHTML = `
        <div class="visibility-container">
          <img class="visibility-icon" src="img/upload-visibility.png">
          <div class="visibility-settings">Everyone can reply</div>
        </div>
        <hr class="horizontal-rule">
      `;
      
      document.querySelector('.post-section').classList.add('post-section-expanded');

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
  });

  postInput.addEventListener("input", () => {
    const postSection = document.querySelector('.post-section');
    if (postInput.value.trim() !== "") {
      postButton.classList.add("can-post");
      postSection.style.height = "157px"; // Increase height to 157px
      postButton.disabled = false;
    } else {
      postButton.classList.remove("can-post");
      postSection.style.height = "120px"; // Reset height to 120px
      postButton.disabled = true;
    }
  });
});
