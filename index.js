<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Jo Mart Login</title>

<style>
body{
    font-family: Arial, sans-serif;
    background:#f2f2f2;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    background:white;
    padding:30px;
    width:320px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}

h2{
    text-align:center;
}

input{
    width:100%;
    padding:10px;
    margin:10px 0;
    box-sizing:border-box;
}

button{
    width:100%;
    padding:10px;
    margin-top:10px;
    border:none;
    background:green;
    color:white;
    cursor:pointer;
}

button:hover{
    background:darkgreen;
}

#message{
    margin-top:10px;
    text-align:center;
}
</style>

</head>
<body>

<div class="container">

<h2>Jo Mart</h2>

<input type="email" id="email" placeholder="Enter Email">

<input type="password" id="password" placeholder="Enter Password">

<button onclick="signup()">Sign Up</button>

<button onclick="login()">Login</button>

<p id="message"></p>

</div>

<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyATHrYpOU3aacGaEMOojc7yEExxTirZP9Y",
  authDomain: "jomart-25e95.firebaseapp.com",
  projectId: "jomart-25e95",
  storageBucket: "jomart-25e95.firebasestorage.app",
  messagingSenderId: "198575358257",
  appId: "1:198575358257:web:ce3ea530211fd908e4f010",
  measurementId: "G-X23BMLP0JX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        document.getElementById("message").innerHTML =
        "Account created successfully!";
    })
    .catch((error) => {
        document.getElementById("message").innerHTML =
        error.message;
    });
};

window.login = function(){

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        document.getElementById("message").innerHTML =
        "Login successful!";
    })
    .catch((error) => {
        document.getElementById("message").innerHTML =
        error.message;
    });
};

</script>

</body>
</html>