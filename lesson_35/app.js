document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById("user-list");

    fetch("https://gorest.co.in/public-api/users")
        .then((response) => response.json())
        .then((data) => {
            const users = data.data;
            displayUserList(users);
        })
        .catch((error) => {
            console.error(error);
        });

    function displayUserList(users) {
        const userListDiv = document.getElementById("user-list");
        userListDiv.innerHTML = "";
        users.forEach((user) => {
            const userLink = document.createElement("a");
            userLink.href = `user.html?id=${user.id}`;
            userLink.textContent = user.name;
            userLink.classList.add("user-link");
            userListDiv.appendChild(userLink);
        });
        userListDiv.style.display = "block";
    }
});
