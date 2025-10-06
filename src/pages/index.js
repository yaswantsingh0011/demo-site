const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // You can put your website's HTML code here later
  res.send('<h1>It Works! My website is finally live!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
