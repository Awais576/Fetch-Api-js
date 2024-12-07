const usersApi = "https://jsonplaceholder.typicode.com/users";
    const postsApi = "https://jsonplaceholder.typicode.com/posts";

    // Function to create user blocks
    function createUserBlock(user) {
      const userBlock = document.createElement('div');
      userBlock.classList.add('user-block');
      userBlock.innerHTML = `
        <h3>${user.name} (@${user.username})</h3>
        <p>Email: <a href="mailto:${user.email}">${user.email}</a></p>
        <p class="address">Address: ${user.address.street}, ${user.address.city}</p>
      `;
      return userBlock;
    }

    // Function to create post blocks
    function createPostBlock(post) {
      const postBlock = document.createElement('div');
      postBlock.classList.add('post-block');
      postBlock.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      return postBlock;
    }

    // Fetch and display users
    fetch(usersApi)
      .then(response => response.json())
      .then(users => {
        const usersContainer = document.getElementById('users-container');
        users.forEach(user => {
          usersContainer.appendChild(createUserBlock(user));
        });
      })
      .catch(error => console.error('Error fetching users:', error));

    // Fetch and display posts
    fetch(postsApi)
      .then(response => response.json())
      .then(posts => {
        const postsContainer = document.getElementById('posts-container');
        posts.forEach(post => {
          postsContainer.appendChild(createPostBlock(post));
        });
      })
      .catch(error => console.error('Error fetching posts:', error));