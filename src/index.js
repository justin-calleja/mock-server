const express = require('express');
const app = express();
const port = 4000;

app.post('/internal-error', (req, res) => {
  res.status(500);
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
