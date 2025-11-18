let userDetails = JSON.parse(localStorage.getItem('userDetails')) || {};

let userName = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signUpButton = document.getElementById('signUp');
let logInLink = document.getElementById('logIn');



signUpButton.addEventListener('click', function (event) {
      
      if (!userName.value || !email.value || !password.value) {
            alert('Please fill all the fields');
            return;
      }

      if(localStorage.getItem('userDetails')){
            let storedDetails = JSON.parse(localStorage.getItem('userDetails'));
            if(storedDetails.email === email.value){
                  alert('User already exists. Please log in.');
                  return;
            }
            if(storedDetails.name === userName.value){
                  alert('Username already taken. Please choose another one.');
                  return;
            }     
      }

      userDetails.name = userName.value;
      userDetails.email = email.value;
      userDetails.password = password.value;
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      alert('Sign Up Successful!');
});

