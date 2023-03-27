const express = require('express');
// const { default: test } = require('node:test');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//pp.use(routes);
app.get('/api/test', (req, res) => {
    res.send('test');
    return;
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
