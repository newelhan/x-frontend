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
      <button class="addon-button">
        <img class="addon-image" id="${filename}" src="img/${filename}.png">
      </button>
    </div>`;
  
  postAddonsContainer.insertAdjacentHTML('beforeend', buttonHTML);
});