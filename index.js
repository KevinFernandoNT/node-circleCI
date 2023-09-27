// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Use the specified port or default to 3000

// Middleware: Parse JSON requests
app.use(express.json());

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
