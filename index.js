const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');

const port = 3001;
app.use(cors());


const client = new Client({
  host: 'dummycloud.cpldgl5e8yx3.us-east-1.rds.amazonaws.com',
  user: 'postgres',
  port: 5432,
  password: '3141531415',
  database: 'dummyCloud',
});

client.connect();

// Generate a random message
const getRandomMessage = () => {
  const messages = [
    'Hello from the server!',
    'Welcome to the React app!',
    'Random message here!',
    'Have a great day!',
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
};

// Define a route for the /hello endpoint
app.get('/hello', (req, res) => {
  const randomMessage = getRandomMessage();
  res.send(randomMessage);
    client.query('INSERT INTO messages (messages) VALUES ($1)  ', [randomMessage]);

});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});