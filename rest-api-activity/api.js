const getPostsButton = document.querySelector('#getPosts');
const getPostButton = document.querySelector('#getPost');
const createPostButton = document.querySelector('#createPost');
const updatePostButton = document.querySelector('#updatePost');
const patchPostButton = document.querySelector('#patchPost');
const removePostButton = document.querySelector('#removePost');
const dataDiv = document.querySelector('.displayData');

function postHTML(post) {
  let newUl = document.createElement('ul');
  let newUserId = document.createElement('li');
  let newPostId = document.createElement('li');
  let newTitle = document.createElement('li');
  let newBody = document.createElement('li');
  newUserId.innerHTML = `userId: ${post.userId}`;
  newPostId.innerHTML = `postId: ${post.id}`;
  newTitle.innerHTML = `title: ${post.title}`;
  newBody.innerHTML = `body: ${post.body}`;
  newUl.className = 'list-group mb-3';
  newUserId.className = 'list-group-item';
  newPostId.className = 'list-group-item';
  newTitle.className = 'list-group-item';
  newBody.className = 'list-group-item';
  newUl.appendChild(newUserId);
  newUl.appendChild(newPostId);
  newUl.appendChild(newTitle);
  newUl.appendChild(newBody);
  dataDiv.appendChild(newUl);
}

let getPosts = async () => {
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let posts = await data.json();

    posts.forEach(post => {
      postHTML(post);
    });
  } catch (error) {
    console.log(error);
  }
}

let getPost = async (id) => {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    let post = await data.json();

    postHTML(post);
  } catch (error) {
    // dataDiv.innerHTML = "";
    // errorHTML(post);
    console.log(error);
  }
}

let createPost = async (title, body, userId) => {
  try {
    let data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    let createdPost = await data.json();

    console.log(createdPost.id);
  } catch (error) {
    console.log(error);
  }
}

let updatePost = async (id, title, body, userId) => {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: userId
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    let updatedPost = await data.json();
    postHTML(updatedPost);

  } catch (error) {
    console.log(error)
  }
}

let patchPost = async (id, title) => {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    let updatedPost = await data.json();
    postHTML(updatedPost);

  } catch (error) {
    console.log(error)
  }
}

let removePost = async (id) => {
  try {
    let data = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    let newP = document.createElement('p');
    newP.innerHTML = `Post with id of ${id} has been successfully deleted.`;
    dataDiv.appendChild(newP);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// Event Listeners

getPostsButton.addEventListener('click', event => {
  event.preventDefault();
  dataDiv.innerHTML = "";
  getPosts();
});

getPostButton.addEventListener('click', event => {
  event.preventDefault();
  dataDiv.innerHTML = "";
  const postId = document.querySelector('#postId').value;
  getPost(postId);
});

createPostButton.addEventListener('click', event => {
  event.preventDefault();
  dataDiv.innerHTML = "";
  const title = document.querySelector('#postTitle').value;
  const body = document.querySelector('#postBody').value;
  const userId = document.querySelector('#postUserId').value;
  createPost(title, body, userId);
});

updatePostButton.addEventListener('click', event => {
  event.preventDefault();
  dataDiv.innerHTML = "";
  const title = document.querySelector('#updatePostTitle').value;
  const body = document.querySelector('#updatePostBody').value;
  const postId = document.querySelector('#updatePostId').value;
  const postUserId = document.querySelector('#updatePostUserId').value;
  updatePost(postId, title, body, postUserId);
});

patchPostButton.addEventListener('click', event => {
  event.preventDefault();
  dataDiv.innerHTML = "";
  const title = document.querySelector('#patchPostTitle').value;
  const postId = document.querySelector('#patchPostId').value;
  patchPost(postId, title);
});

removePostButton.addEventListener('click', event => {
  event.preventDefault();
  dataDiv.innerHTML = "";
  const postId = document.querySelector('#removePostId').value;
  removePost(postId);
});
// getPosts();