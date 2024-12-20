// JavaScript for Search and Tabs Interaction
document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.querySelector('.search-button');
  const tabButtons = document.querySelectorAll('.tab-button');

  // Click event for search button
  searchButton.addEventListener('click', function() {
      alert('Search functionality will be implemented here.');
  });

  // Tab switching functionality
  tabButtons.forEach(button => {
      button.addEventListener('click', function() {
          tabButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
      });
  });
});



// Function to open the side menu
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px"; // Adjust width as needed
    document.getElementById("menu").style.display = "none"
}

// Function to close the side menu
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}



document.addEventListener('DOMContentLoaded', () => {
  const authBtn = document.getElementById('auth-btn');
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');

  if (token) {
    // User is logged in: show logout
    authBtn.textContent = 'Logout';
    authBtn.addEventListener('click', () => {
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
      alert('You have logged out successfully.');
      window.location.href = 'login.html'; // Redirect to login
    });
  } else {
    // User is not logged in: show login
    authBtn.textContent = 'Login';
    authBtn.addEventListener('click', () => {
      window.location.href = 'login.html'; // Redirect to login
    });
  }
});
