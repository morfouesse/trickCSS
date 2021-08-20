'use strict';

function handleSubmitLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (password.length < 3) {
        document.getElementById("errorPassword").innerHTML = "Le password n'est pas assez long (Au moins 3 caractères)"
    }
    console.log('username', username);
    console.log('password', password);
    return false;
}