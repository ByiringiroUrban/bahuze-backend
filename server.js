// const express = require('express');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/auth');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.use('/api/auth', authRoutes);

// // Home Route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Bahuze Backend!');
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });






const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static('public'));

// Routes
app.use('/api/auth', authRoutes);

// Home Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/register.html'); // Default page
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
