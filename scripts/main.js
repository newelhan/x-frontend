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
