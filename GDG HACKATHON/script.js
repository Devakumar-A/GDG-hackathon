// Store users (temporary storage for testing)
let users = JSON.parse(localStorage.getItem("users")) || {
    authority: [{ username: "admin", password: "admin123" }],
    fisherman: [{ username: "fishman", password: "fish123" }],
    buyer: [{ username: "buyer", password: "buyer123" }]
};

// 🌟 Login Function
function login() {
    const role = document.getElementById("userRole").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Check if user exists in selected role
    const userExists = users[role].some(user => user.username === username && user.password === password);

    if (userExists) {
        alert(`Welcome ${role}! Redirecting to your dashboard...`);
        window.location.href = `${role}.html`; // Redirect to respective dashboard
    } else {
        errorMessage.classList.remove("hidden");
    }
}

// 📝 Register Function
function registerUser() {
    const role = document.getElementById("newUserRole").value;
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const successMessage = document.getElementById("successMessage");

    // Add new user to the selected role
    users[role].push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    successMessage.classList.remove("hidden");
}
