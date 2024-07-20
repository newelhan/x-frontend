// Use JS to auto generate the SIDEBAR buttons cause i'm lazy
sidebarButtons = ['home', 'explore', 'notifications', 'messages', 'grok', 'communities', 'profile', 'more']

sidebarButtons.forEach(name => {
  document.querySelector('.button-lists').innerHTML += `<div class="sidebar-buttons">
        <button onclick="location.href='https://x.com/${name}'">
          <img id="${name}-icon" src="img/x-${name}.png">
          <span class="button-text">${name.charAt(0).toUpperCase() + name.slice(1)}</span>
        </button>
      </div>`
})

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
