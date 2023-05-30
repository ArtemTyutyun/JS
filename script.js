// Функція для отримання списку користувачів з API
async function getUsers() {
  try {
    const response = await fetch('https://gorest.co.in/public/v2/users');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Помилка при отриманні списку користувачів:', error);
    return [];
  }
}

// Функція для отримання списку постів для конкретного користувача з API
async function getUserPosts(userId) {
  try {
    const response = await fetch(`https://gorest.co.in/public/v2/users/${userId}/posts`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Помилка при отриманні списку постів:', error);
    return [];
  }
}

// Функція для отримання посту з коментарями з API
async function getPostWithComments(postId) {
  try {
    const postResponse = await fetch(`https://gorest.co.in/public/v2/posts/${postId}`);
    const post = await postResponse.json();

    const commentsResponse = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`);
    const comments = await commentsResponse.json();

    return {
      post: post.data,
      comments: comments.data,
    };
  } catch (error) {
    console.log('Помилка при отриманні посту з коментарями:', error);
    return null;
  }
}

// Сценарій 1. Відображення списку користувачів
async function displayUsers() {
  const users = await getUsers();

  if (users.length > 0) {
    const userList = document.getElementById('user-list');

    users.forEach(user => {
      const userLink = document.createElement('a');
      userLink.href = `user.html?userId=${user.id}`;
      userLink.textContent = user.name;

      const listItem = document.createElement('li');
      listItem.appendChild(userLink);

      userList.appendChild(listItem);
    });
  } else {
    document.getElementById('user-list').textContent = 'Користувачі незнайдені';
  }
}

// Сценарій 2. Відображення повідомлення про відсутність користувачів
function displayNoUsersMessage() {
  document.getElementById('user-list').textContent = 'Користувачі незнайдені';
}

// Сценарій 3. Відображення списку постів користувача
async function displayUserPosts(userId) {
  const posts = await getUserPosts(userId);

  if (posts.length > 0) {
    const postList = document.getElementById('post-list');

    posts.forEach(post => {
      const postLink = document.createElement('a');
      postLink.href = `post.html?postId=${post.id}`;
      postLink.textContent = post.title;

      const postDescription = document.createElement('p');
      postDescription.textContent = post.body;

      const listItem = document.createElement('li');
      listItem.appendChild(postLink);
      listItem.appendChild(postDescription);

      postList.appendChild(listItem);
    });
  } else {
    document.getElementById('post-list').textContent = 'У даного користувача відсутні пости';

    const backButton = document.createElement('a');
    backButton.href = 'index.html';
    backButton.textContent = 'Назад';

    document.getElementById('post-list').appendChild(backButton);
  }
}

// Сценарій 4. Відображення повідомлення про відсутність постів
function displayNoPostsMessage() {
  document.getElementById('post-list').textContent = 'У даного користувача відсутні пости';

  const backButton = document.createElement('a');
  backButton.href = 'index.html';
  backButton.textContent = 'Назад';

  document.getElementById('post-list').appendChild(backButton);
}

// Сценарій 5. Відображення окремого посту
async function displayPost(postId) {
  const postWithComments = await getPostWithComments(postId);

  if (postWithComments) {
    const post = postWithComments.post;
    const comments = postWithComments.comments;

    const postTitle = document.getElementById('post-title');
    postTitle.textContent = post.title;

    const postBody = document.getElementById('post-body');
    postBody.textContent = post.body;

    if (comments.length > 0) {
      const commentList = document.getElementById('comment-list');

      comments.forEach(comment => {
        const commentAuthor = document.createElement('p');
        commentAuthor.textContent = comment.name;

        const commentText = document.createElement('p');
        commentText.textContent = comment.body;

        const commentItem = document.createElement('li');
        commentItem.appendChild(commentAuthor);
        commentItem.appendChild(commentText);

        commentList.appendChild(commentItem);
      });
    } else {
      const commentText = document.createElement('p');
      commentText.textContent = 'Коментарі відсутні';

      const commentList = document.getElementById('comment-list');
      commentList.appendChild(commentText);
    }

    const backButton = document.createElement('a');
    backButton.href = `user.html?userId=${post.user_id}`;
    backButton.textContent = 'Назад';

    document.getElementById('comment-list').appendChild(backButton);
  } else {
    document.getElementById('post-details').textContent = 'Помилка при завантаженні посту';
  }
}

// Сценарій 6. Відображення коментарів до посту
async function displayPostComments(postId) {
  const postWithComments = await getPostWithComments(postId);

  if (postWithComments) {
    const comments = postWithComments.comments;

    const commentList = document.getElementById('comment-list');

    if (comments.length > 0) {
      comments.forEach(comment => {
        const commentAuthor = document.createElement('p');
        commentAuthor.textContent = comment.name;

        const commentText = document.createElement('p');
        commentText.textContent = comment.body;

        const commentItem = document.createElement('li');
        commentItem.appendChild(commentAuthor);
        commentItem.appendChild(commentText);

        commentList.appendChild(commentItem);
      });
    } else {
      const commentText = document.createElement('p');
      commentText.textContent = 'Коментарі відсутні';

      commentList.appendChild(commentText);
    }

    const backButton = document.createElement('a');
    backButton.href = `post.html?postId=${postId}`;
    backButton.textContent = 'Назад';

    commentList.appendChild(backButton);
  } else {
    document.getElementById('post-details').textContent = 'Помилка при завантаженні коментарів';
  }
}

// Сценарій 7. Відображення відсутності коментарів до посту
function displayNoCommentsMessage() {
  const commentText = document.createElement('p');
  commentText.textContent = 'Коментарі відсутні';

  const commentList = document.getElementById('comment-list');
  commentList.appendChild(commentText);

  const backButton = document.createElement('a');
  backButton.href = `post.html?postId=${postId}`;
  backButton.textContent = 'Назад';

  commentList.appendChild(backButton);
}

// Код для виконання на сторінці списку користувачів (index.html)
if (window.location.pathname === '/index.html') {
  displayUsers();
}

// Код для виконання на сторінці постів користувача (user.html)
if (window.location.pathname === '/user.html') {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');

  if (userId) {
    displayUserPosts(userId);
  } else {
    displayNoPostsMessage();
  }
}

// Код для виконання на сторінці окремого посту (post.html)
if (window.location.pathname === '/post.html') {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('postId');

  if (postId) {
    displayPost(postId);
  } else {
    displayNoCommentsMessage();
  }
}
