// Make boolean value to change the post data and when refreshed still the same?
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

// Generate the addon buttons
const filenames = [
  'upload-media',
  'upload-gif', 
  'upload-poll',
  'upload-emoji',
  'upload-schedule',
  'upload-location'
];

const postAddonsContainer = document.querySelector('.post-addons');

filenames.forEach(filename => {
  const buttonHTML = `
    <div class="post-addon-buttons">
      <button class="addon-button" id="${filename}">
        <img class="addon-image" id="${filename}-img" src="img/${filename}.png">
      </button>
    </div>`;
  
  postAddonsContainer.insertAdjacentHTML('beforeend', buttonHTML);
});

document.addEventListener("DOMContentLoaded", function() {
  const postSection = document.querySelector('.post-section');
  const postInput = document.querySelector(".post-text");
  const postOnClick = document.querySelector(".post-onclick");
  const postButton = document.querySelector(".final-post")

  postInput.addEventListener("click", function() {
    if (!postOnClick.querySelector('.visibility-container')) {
      postOnClick.innerHTML = `
        <div class="visibility-container">
          <img class="visibility-icon" src="img/upload-visibility.png">
          <div class="visibility-settings">Everyone can reply</div>
        </div>
        <hr class="horizontal-rule">
      `;
      
      postSection.classList.add('post-section-expanded');
  
      const visibilityContainer = document.querySelector('.visibility-container');
      const visibilitySettings = document.querySelector('.visibility-settings');
      const visibilityIcon = document.querySelector('.visibility-icon');
  
      visibilityContainer.addEventListener('click', () => {
        if (visibilitySettings.textContent === "Everyone can reply") {
          visibilitySettings.textContent = "Accounts you follow can reply";
          visibilityIcon.src = "img/visibility-follow.png";
          visibilityContainer.style.width = "242px";
          visibilityContainer.style.transition = "none";
        } else {
          visibilitySettings.textContent = "Everyone can reply";
          visibilityIcon.src = "img/upload-visibility.png";
          visibilityContainer.style.width = "169px";
        }
      });
    }
  });

  postInput.addEventListener("input", () => {
    if (postInput.value.trim() !== "") {
      postButton.classList.add("can-post");
      postButton.disabled = false;
    } else {
      postButton.classList.remove("can-post");
      postButton.disabled = true;
    }
  });
});
