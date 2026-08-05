const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Welcome to Scorpion. This is our main server");
});

app.listen(port, () => {
  console.log(`Server is running on ${port} PORT`);
});