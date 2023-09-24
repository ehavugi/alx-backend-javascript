const express = require('express');

// create express app
const app = express();

// business logic
app.get('/',(req, res) => {
  res.send("Hello Holberton School!");
});

app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});
// export the express app
module.exports = app;
