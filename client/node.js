// server.js

const express = require('express');
const app = express();

// Route handler for getting a random fortune
app.get('/fortune', (req, res) => {
  const fortunes = [
    "You will have a great day today.",
    "A wonderful surprise is coming your way.",
    "Good things come to those who wait.",
    "Your hard work will pay off soon.",
    "A new opportunity will arise in your life."
  ];
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  res.json({ fortune });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

