document.addEventListener("DOMContentLoaded", function() {
  const postsData = [
    {
      profilePic: "img/profile-picture.jpg",
      displayname: "Ethan Welhan",
      statusicon: "img/x-private.png",
      username: "@newelhan",
      time: "1h",
      description: "hello1",
      imageSrc: "img/test-image.png",
      likes: "23",
      reposts: "3",
      comments: "45",
      views: "2"
    },
    // More posts can be added here
  ];

  const postButton = document.querySelector(".final-post");
  const postInput = document.querySelector(".post-text");

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
                ${post.imageSrc ? `<img class="post-image" src="${post.imageSrc}" alt="Post Image">` : ''}
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
    });
  
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
      const buttonElement = document.getElementById(button.id);
      const imgElement = buttonElement.querySelector('img');
      
      buttonElement.addEventListener('mouseenter', function() {
        imgElement.src = button.hoverSrc;
        const tooltip = buttonElement.querySelector('.more-addon-icon-tooltip');
        if (tooltip) {
          tooltip.style.display = 'block';
        }
      });
  
      buttonElement.addEventListener('mouseleave', function() {
        imgElement.src = button.defaultSrc;
        const tooltip = buttonElement.querySelector('.more-addon-icon-tooltip');
        if (tooltip) {
          tooltip.style.display = 'none';
        }
      });
    });
  }  

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

      const views = getRandomNumber(200000, 1000000);
      const likes = getRandomNumber(50000, views - 1);
      const reposts = getRandomNumber(10000, likes - 1);
      const comments = getRandomNumber(200, reposts - 1);

      const newPost = {
        profilePic: "img/profile-picture.jpg",
        displayname: "Ethan Welhan",
        statusicon: "img/x-private.png",
        username: "@newelhan",
        time: "Just now",
        description: postInput.value,
        imageSrc: "",
        likes: formatNumber(likes),
        reposts: formatNumber(reposts),
        comments: formatNumber(comments),
        views: formatNumber(views)
      };

      postsData.unshift(newPost);
      postInput.value = "";
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