const express = require('express');
const app = express();
const cors = require('cors');

const port = 3000;
app.use(cors());
// Generate a random message
const getRandomMessage = () => {
  const messages = [
    'Hello from the server!',
    'Welcome to the React app!',
    'Random message here!',
    'Have a great day!',
    '1'
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

// Define a route for the /hello endpoint
app.get('/hello', (req, res) => {
  const randomMessage = getRandomMessage();
  res.send(randomMessage);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});