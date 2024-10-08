document.addEventListener("DOMContentLoaded", function() {
  const postsData = [
    {
      profilePic: "img/profile-picture.jpg",
      displayname: "newelhan",
      statusicon: "img/verified-icon.png",
      username: "@newelhan",
      time: "1h",
      description: "#%^&@ !^&% (Please scroll here)",
      mediaSrc: "img/gatto.gif",
      likes: "9.4k",
      reposts: "3.2k",
      comments: "432",
      views: "12.1k"
    },
    // More posts can be added here
  ];

  const postButton = document.querySelector(".final-post");
  const postInput = document.querySelector(".post-text");
  let uploadedMediaSrc = "";

  const mediaPreview = document.getElementById("media-preview");
  const deleteButton = document.getElementById("delete-button");

  // Show image and delete button when a new image is selected
  function showImage() {
    mediaPreview.style.display = "block";
    deleteButton.style.display = "block";
  }


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
      const reader = new FileReader();
      reader.onload = function(e) {
        uploadedMediaSrc = e.target.result;
        console.log('Media selected:', file.name);
        document.getElementById('media-preview').src = uploadedMediaSrc;
        showImage();
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById('upload-gif-input').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        uploadedMediaSrc = e.target.result;
        console.log('GIF selected:', file.name);
        document.getElementById('media-preview').src = uploadedMediaSrc;
        document.getElementById('media-preview').style.display = 'block';
        showImage();
      };
      reader.readAsDataURL(file);
    }
  });

  function renderPosts() {
    const postContainer = document.querySelector('.post-container');
    postContainer.innerHTML = '';
  
    postsData.forEach(post => {
      const postHTML = `
        <div class="post">
          <div class="post-header">
            <img class="post-profile-pic" src="${post.profilePic}" alt="Profile Picture">
            <div class="post-contents">
              <div class="top-info">
                <div class="post-user-info">
                  <div class="post-displayname">${post.displayname}</div>
                  <img class="post-statusicon" src="${post.statusicon}" alt="Status Icon">
                  <div class="post-username">${post.username}</div>
                  <div class="post-time">• ${post.time}</div>
                </div>
                <button class="stat-button" id="more-button">
                  <img id="more-addon-icon" src="img/more-addon-icon.png" alt="More Icon">
                  <div class="stat-button-tooltip">More</div>
                </button>
              </div>
              
              <div class="post-content">
                <div class="post-description">${post.description}</div>
                ${post.mediaSrc ? `<img class="post-media" src="${post.mediaSrc}" alt="Post Media">` : ''}
              </div>
              <div class="post-footer">
                <div class="post-stat">
                  <button class="stat-button" id="comment-button">
                    <img id="comment-icon" src="img/comment-icon.png" alt="Comment Icon">
                    <div class="stat-button-tooltip">Comment</div>
                  </button>
                  <div>${post.comments}</div>
                </div>
                <div class="post-stat">
                  <button class="stat-button green" id="repost-button">
                    <img id="repost-icon" src="img/repost-icon.png" alt="Retweet Icon">
                    <div class="stat-button-tooltip">Retweet</div>
                  </button>
                  <div>${post.reposts}</div>
                </div>
  
                <div class="post-stat">
                  <button class="stat-button red" id="like-button">
                    <img id="heart-icon" src="img/heart-icon.png" alt="Heart Icon">
                    <div class="stat-button-tooltip">Like</div>
                  </button>
                  <div>${post.likes}</div>
                </div>
  
                <div class="post-stat">
                  <button class="stat-button" id="views-button">
                    <img id="views-icon" src="img/views-icon.png" alt="Views Icon">
                    <div class="stat-button-tooltip">Views</div>
                  </button>
                  <div>${post.views}</div>
                </div>
  
                <div class="post-stat">
                  <button class="stat-button" id="bookmark-button">
                    <img id="bookmark-icon" src="img/bookmark-icon.png" alt="Bookmark Icon">
                    <div class="stat-button-tooltip">Bookmark</div>
                  </button>
                  <button class="stat-button" id="share-button">
                    <img id="share-icon" src="img/share-icon.png" alt="Share Icon">
                    <div class="stat-button-tooltip">Share</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      postContainer.insertAdjacentHTML('beforeend', postHTML);

      const postElement = postContainer.querySelector('.post:last-child');
      const hoverButtons = [
        { id: 'comment-button', defaultSrc: 'img/comment-icon.png', hoverSrc: 'img/comment-icon-active.png' },
        { id: 'repost-button', defaultSrc: 'img/repost-icon.png', hoverSrc: 'img/repost-icon-active.png' },
        { id: 'like-button', defaultSrc: 'img/heart-icon.png', hoverSrc: 'img/heart-icon-active.png' },
        { id: 'views-button', defaultSrc: 'img/views-icon.png', hoverSrc: 'img/views-icon-active.png' },
        { id: 'bookmark-button', defaultSrc: 'img/bookmark-icon.png', hoverSrc: 'img/bookmark-icon-active.png' },
        { id: 'share-button', defaultSrc: 'img/share-icon.png', hoverSrc: 'img/share-icon-active.png' },
        { id: 'more-button', defaultSrc: 'img/more-addon-icon.png', hoverSrc: 'img/more-addon-icon-active.png' }
      ];

      hoverButtons.forEach(button => {
        const buttonElement = postElement.querySelector(`#${button.id}`);
        const imgElement = buttonElement.querySelector('img');
        
        buttonElement.addEventListener('mouseenter', function() {
          imgElement.src = button.hoverSrc;
        });
    
        buttonElement.addEventListener('mouseleave', function() {
          imgElement.src = button.defaultSrc;
        });
      });
    });
  }  

  // Handle delete button click to remove the image
  deleteButton.addEventListener("click", () => {
    postsData.mediaSrc = "";
    uploadedMediaSrc = "";
    mediaPreview.src = "";
    mediaPreview.style.display = "none";
    deleteButton.style.display = "none";
  });

  function handlePost() {
    if (postInput.value.trim() === "") {
      postButton.classList.remove("can-post");
      console.log("Nothing to post.");
    } else {
      function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(1) + "m";
        } else if (number >= 1000) {
          return (number / 1000).toFixed(1) + "k";
        } else {
          return number.toString();
        }
      }

      let currentStatusIcon;
      const visibilitySettings = document.querySelector('.visibility-settings');
      // Change the user's status icon
      let views = 0;
      let likes = 0;
      let reposts = 0;
      let comments = 0;
      if (visibilitySettings.textContent === "Everyone can reply") {
        currentStatusIcon = "img/verified-icon.png";
        views = getRandomNumber(200000, 1000000);
        likes = getRandomNumber(50000, views - 1);
        reposts = getRandomNumber(10000, likes - 1);
        comments = getRandomNumber(200, reposts - 1);
      }
      else {
        currentStatusIcon = "img/x-private.png";
        views = getRandomNumber(100, 1000);
        likes = getRandomNumber(900, views - 1);
        reposts = getRandomNumber(700, likes - 1);
        comments = getRandomNumber(200, reposts - 1);
      }

      const newPost = {
        profilePic: "img/profile-picture.jpg",
        displayname: "newelhan",
        statusicon: currentStatusIcon,
        username: "@newelhan",
        time: "Just now",
        description: postInput.value,
        mediaSrc: uploadedMediaSrc,
        likes: formatNumber(likes),
        reposts: formatNumber(reposts),
        comments: formatNumber(comments),
        views: formatNumber(views)
      };

      postsData.unshift(newPost);
      postInput.value = "";

      uploadedMediaSrc = "";
      document.getElementById('media-preview').style.display = 'none';
      deleteButton.style.display = "none";
      
      renderPosts();
      postButton.classList.remove("can-post");
    }
  } 

  // Event listener for the post button click
  postButton.addEventListener("click", handlePost);

  // Event listener for the Enter key
  postInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter" && postInput.value.trim() !== "") {
      event.preventDefault();
      handlePost();
    }
  });

  renderPosts();
});
