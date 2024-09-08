document.addEventListener("DOMContentLoaded", function() {
  const postsData = [
    {
      profilePic: "img/profile-picture.jpg",
      displayname: "Ethan Welhan",
      statusicon: "img/x-private.png",
      username: "@newelhan",
      time: "1h",
      description: "",
      mediaSrc: "",
      likes: "",
      reposts: "",
      comments: "",
      views: ""
    },
    // More posts can be added here
  ];

  const postContainer = document.querySelector('.post-container');

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

    if (post.mediaSrc !== "") {
      document.querySelector(".post-content").insertAdjacentHTML('beforeend', `<img class="post-image" src="${post.mediaSrc}" alt="Post Media">`);
    }
  });
});