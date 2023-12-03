const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');

const port = 3001   ;
app.use(cors());

 

// Generate a random message
const getRandomMessage = () => {
  const messages = [
     'Welcome to the React app!',
    'Random message here!',
    'Have a great day!!',
    'shadowflex',
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