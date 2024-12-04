const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());



// Route for the user to get a response based on their query
app.post('/query', (req, res) => {
  const query = req.query.body;

  if (!query) {
    return res.status(400).send('Query parameter is missing');
  }

  console.log(query);


});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

