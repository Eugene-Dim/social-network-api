const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startServer = async () => {
  try {
    await db.connect();
    console.log('Connected to database!');
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

startServer();
