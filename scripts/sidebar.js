// Use JS to auto generate the SIDEBAR buttons cause i'm lazy
const sidebarButtons = ['home', 'explore', 'notifications', 'messages', 'grok', 'communities', 'profile', 'more']

// FIX THE LOCATION LATER !!
sidebarButtons.forEach(name => {
  document.querySelector('.button-lists').innerHTML += `<div class="sidebar-buttons">
        <button onclick="location.href='https://x.com/${name}'">
          <img id="${name}-icon" src="img/x-${name}.png">
          <span class="button-text">${name.charAt(0).toUpperCase() + name.slice(1)}</span>
        </button>
      </div>`
})

// Tooltip for profile button
document.addEventListener("DOMContentLoaded", function () {
  const profileButton = document.getElementById("profile-button");
  const tooltip = document.querySelector(".profile-button-tooltip");

  profileButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (tooltip.style.opacity == 0 || tooltip.style.opacity === '') {
      gsap.to(tooltip, { duration: 0.3, opacity: 1, visibility: 'visible', ease: "power2.inOut" });
    } else {
      gsap.to(tooltip, { duration: 0.3, opacity: 0, visibility: 'hidden', ease: "power2.inOut" });
    }
  });

  document.addEventListener("click", function () {
    gsap.to(tooltip, { duration: 0.3, opacity: 0, visibility: 'hidden', ease: "power2.inOut" });
  });

  tooltip.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
