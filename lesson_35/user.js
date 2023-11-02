document.addEventListener("DOMContentLoaded", function () {
    const userPosts = document.getElementById("user-posts");

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    fetch(`https://gorest.co.in/public-api/posts?user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => {
            const posts = data.data;
            displayUserPosts(posts);
        })
        .catch((error) => {
            console.error(error);
        });

    function displayUserPosts(posts) {
        const userPostsDiv = document.getElementById("user-posts");
        userPostsDiv.innerHTML = "";
        posts.forEach((post) => {
            const postItem = document.createElement("div");
            postItem.classList.add("post-item");
            postItem.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
            userPostsDiv.appendChild(postItem);
        });
        userPostsDiv.style.display = "block";
    }
});
