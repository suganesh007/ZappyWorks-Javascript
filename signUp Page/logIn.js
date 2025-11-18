let email = document.getElementById('email');
let password = document.getElementById('password');
let logInButton = document.getElementById('logIn');
logInButton.addEventListener('click', function (event) {
      if (!email.value || !password.value) {
            alert('Please fill all the fields');
            return;
      }
      let storedDetails = JSON.parse(localStorage.getItem('userDetails'));
      if (!storedDetails) {
            alert('No user found. Please sign up first.');
            return;
      }
      if (storedDetails.email === email.value && storedDetails.password === password.value) {
            alert('Log In Successful!');
      }
      else {
            alert('Invalid email or password. Please try again.');
      }     
});
