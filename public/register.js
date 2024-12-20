// Function to open the side menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
  document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

// document.getElementById('registerForm').addEventListener('submit', function (event) {
//   event.preventDefault();

//   const names = document.getElementById('names').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const tel = document.getElementById('tel').value.trim();
//   const password = document.getElementById('password').value;
//   const confirmPassword = document.getElementById('confirm-password').value;

//   if (password !== confirmPassword) {
//     alert('Passwords do not match!');
//     return;
//   }

//   if (!names || !email || !tel || !password || !confirmPassword) {
//     alert('All fields are required!');
//     return;
//   }

//   alert('Registration Successful!');
// });




document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Collect form data
  const names = document.getElementById('names').value;
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        names,
        email,
        tel,
        password,
        confirmPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Registration successful!');
      window.location.href = 'index.html'; // Redirect to home page
    } else {
      alert(data.error || 'Registration failed. Try again.');
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
});