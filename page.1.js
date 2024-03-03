let loginButton = document.getElementById("loginButton");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let loginMessage = document.getElementById("loginMessage");

function login() {
    let username = usernameInput.value;
    let password = passwordInput.value;
    
    // Check if username is "admin" and password is "password"
    if (username === "admin" && password === "password") {
        loginMessage.innerText = "Login successful!";
        
    } else {
        loginMessage.innerText = "Invalid username or password. Please try again.";
       
    }
}

loginButton.onclick = login;

    

