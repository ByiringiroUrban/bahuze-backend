// Function to open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
  document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// document.getElementById("login-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Get input values
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value.trim();
//   const messageElement = document.getElementById("login-message");

//   // Reset message
//   messageElement.className = "hidden";
//   messageElement.textContent = "";

//   // Validation Logic
//   if (!email || !password) {
//       messageElement.className = "";
//       messageElement.style.color = "red";
//       messageElement.textContent = "Please fill out all fields.";
//   } else if (!validateEmail(email)) {
//       messageElement.className = "";
//       messageElement.style.color = "red";
//       messageElement.textContent = "Please enter a valid email address.";
//   } else {
//       messageElement.className = "";
//       messageElement.style.color = "#ff7f00"; /* Orange success */
//       messageElement.textContent = "Login successful!";
//   }
// });

// // Email Validation Function
// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }


// document.getElementById('loginForm').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     // Collect form data
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     try {
//       const response = await fetch('http://localhost:3000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Save JWT token to localStorage
//         localStorage.setItem('token', data.token);
//         alert('Login successful!');
//         window.location.href = 'index.html'; // Redirect to home page
//       } else {
//         alert(data.error || 'Invalid email or password.');
//       }
//     } catch (err) {
//       console.error('Error:', err.message);
//     }
//   });



  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get values from the form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    const loginMessage = document.getElementById('login-message');

    try {
      // Send POST request to backend API
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        loginMessage.classList.remove('hidden');
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login successful! Redirecting...';

        // Save token in localStorage (or sessionStorage based on "remember me")
        if (rememberMe) {
          localStorage.setItem('token', data.token);
        } else {
          sessionStorage.setItem('token', data.token);
        }

        // Redirect to home page after 1 second
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      } else {
        // Login failed
        loginMessage.classList.remove('hidden');
        loginMessage.style.color = 'red';
        loginMessage.textContent = data.error || 'Invalid email or password.';
      }
    } catch (error) {
      // Handle network errors
      console.error('Error:', error.message);
      loginMessage.classList.remove('hidden');
      loginMessage.style.color = 'red';
      loginMessage.textContent = 'An error occurred. Please try again later.';
    }
  });