// Use JS to auto generate the sidebar buttons cause i'm lazy
sidebarButtons = ['home', 'explore', 'notifications', 'messages', 'grok', 'communities', 'profile', 'more']

sidebarButtons.forEach(name => {
  document.querySelector('.button-lists').innerHTML += `<div class="sidebar-buttons">
        <button onclick="location.href='https://x.com/${name}'">
          <img id="${name}-icon" src="img/x-${name}.png">
          <span class="button-text">${name.charAt(0).toUpperCase() + name.slice(1)}</span>
        </button>
      </div>`
})