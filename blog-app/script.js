const postForm = document.getElementById('postForm');
const postsDiv = document.getElementById('posts');
const API_URL = 'http://127.0.0.1:5000/posts';

// Fetch and display posts from the server
function fetchPosts() {
    fetch(API_URL)
        .then(res => res.json())
        .then(posts => {
            postsDiv.innerHTML = '';
            posts.forEach(post => {
                const postEl = document.createElement('div');
                postEl.className = 'post';
                postEl.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <button onclick="deletePost(${post.id})">Delete</button>
                `;
                postsDiv.appendChild(postEl);
            });
        });
}

// Handle form submission to add a new post
postForm.onsubmit = function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (!title || !content) {
        alert('Please fill in both fields');
        return;
    }
    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    })
    .then(res => res.json())
    .then(() => {
        postForm.reset();
        fetchPosts();
    });
};

// Delete a post by ID
function deletePost(id) {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
        .then(res => res.json())
        .then(() => fetchPosts());
}

// Initial fetch
fetchPosts();