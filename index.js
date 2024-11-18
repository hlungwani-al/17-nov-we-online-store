let product = document.querySelectorAll(".product");

function userLogin(event){
    event.preventDefault();
    const usernameLogin = document.getElementById('userLogin').value.trim();
    const passwordLogin = document.getElementById('userPassword').value;
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    const loggedIn = JSON.parse(localStorage.getItem('currentUser')) || [];

    if(!usernameLogin){
        alert("please enter a valid username")
        return;
    }else if(passwordLogin.length < 5){
        alert('password must have at least 5 characters');
        return;
    }else {
        userDetails.forEach(user => {
            if(usernameLogin === userDetails.username && passwordLogin === userDetails.password ){
                loggedIn = userDetails.username;
                localStorage.setItem("currentUser", JSON.stringify(loggedIn));
                window.location.href = "./home.html";
            }else {
                alert('user not found, please sign up if you don\'t have an account')
                return;
            }
        });
    }
}

function signupUser(event){
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
    const loggedIn = JSON.parse(localStorage.getItem('currentUser')) || [];
    const userExist = userDetails.some((user) => (userDetails.username === username));
    if(userExist){
        alert("username already exist, login if you already have an account or choose a new username");
        return;
    }

    if(!username){
        alert("please enter a username");
        return;
    }else if(password !== confirmPassword){
        alert("passwords don\'t match");
        return;
    }else if (password.length < 5){
        alert('password must have at least 5 characters');
        return;
    }else {
        userDetails.push({username: username, password: password, cart:0, cartItems:[]});
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        localStorage.setItem('currentUser', JSON.stringify({currentUser:username}))
        window.location.href = "./home.html"; 
    }
}





product.forEach(item => {
    item.addEventListener('click', function(e){
        let selected = item.getAttribute("data-index");
        console.log(selected, " has been clicked");
    })
});