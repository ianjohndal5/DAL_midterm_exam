const express = require('express');
const app = express ();
const port = 10000;

app.use (express.static('public'));

app.get('/test', (req, res) => {

    res.json({ message: 'Express is working! Ian Dal' });
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });