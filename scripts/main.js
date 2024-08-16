// Make boolean value to change the post data and when refreshed still the same?
let forYou = 1

document.querySelector('.foryou-tab').addEventListener('click', () => {
  // Add for foryou
  document.querySelector('.foryou-title')
    .classList.add('current-title')

  document.querySelector('.foryou-current')
    .classList.add('full-opacity')

  // Remove for following
  document.querySelector('.following-title')
    .classList.remove('current-title')

  document.querySelector('.following-current')
    .classList.remove('full-opacity')
})


document.querySelector('.following-tab').addEventListener('click', () => {
  // Add for following
  document.querySelector('.following-title')
    .classList.add('current-title')

  document.querySelector('.following-current')
    .classList.add('full-opacity')

  // Remove for foryou
  document.querySelector('.foryou-title')
    .classList.remove('current-title')

  document.querySelector('.foryou-current')
    .classList.remove('full-opacity')
})

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
    postOnClick.innerHTML = `
      <div class="visibility-container">
        <img class="visibility-icon" src="img/upload-visibility.png">
        <div class="visibility-settings">Everyone can reply</div>
        <div class="visibility-tooltip">
            <div class="visibility-tooltip-content">
                <strong>Who can reply?</strong>
                <p>Choose who can reply to this post. Anyone mentioned can always reply.</p>
                <div class="visibility-option">
                    <img src="img/everyone-icon.png" alt="Everyone">
                    <span>Everyone</span>
                    <img class="checkmark" src="img/checkmark-icon.png" alt="Selected">
                </div>
                <div class="visibility-option">
                    <img src="img/accounts-follow-icon.png" alt="Accounts you follow">
                    <span>Accounts you follow</span>
                </div>
                <div class="visibility-option">
                    <img src="img/verified-icon.png" alt="Verified accounts">
                    <span>Verified accounts</span>
                </div>
                <div class="visibility-option">
                    <img src="img/mention-icon.png" alt="Only accounts you mention">
                    <span>Only accounts you mention</span>
                </div>
            </div>
        </div>
      </div>
      <hr class="horizontal-rule">
    `;

    postSection.classList.add('post-section-expanded');

    
    // Tooltip for visibility settings
    const visibilitySettings = document.querySelector('.visibility-settings');
    const visibilityTooltip = document.querySelector('.visibility-tooltip');

    visibilitySettings.addEventListener('click', () => {
        visibilityTooltip.classList.toggle('show-tooltip');
    });

    document.addEventListener('click', (e) => {
        if (!visibilitySettings.contains(e.target) && !visibilityTooltip.contains(e.target)) {
            visibilityTooltip.classList.remove('show-tooltip');
        }
    });
  });

  postInput.addEventListener("input", () => {
    postButton.style.backgroundColor = "rgb(29, 155, 240)";
    postButton.style.color = "white";
  });
});
