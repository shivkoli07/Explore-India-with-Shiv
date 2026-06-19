// LOGIN FORM HANDLER
const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email && password.length >= 4) {

            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("userEmail", email);

            alert("Login Successful 🇮🇳 Welcome!");

            // REDIRECT TO MAP PAGE
            window.location.href = "map.html";

        } else {
            alert("Please enter valid email & password (min 4 characters)");
        }
    });
}


// FAKE GOOGLE LOGIN
function fakeGoogleLogin() {

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userEmail", "google-user");
    localStorage.setItem("userName", "Explorer");

    alert("Google Login Successful 🇮🇳");

    window.location.href = "map.html";
}