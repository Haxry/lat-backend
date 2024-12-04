const express = require('express');
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());


let gotResponse = false;
let Response = {};

app.post('/response', (req, res) => {
    const  response  = req.query.body;
    Response = String(response);
    console.log(Response);
    
    gotResponse = true;
    res.send('Response received');

});
// Route for providing a response to a specific query
app.get('/get-response', (req, res) => {
  //const { query, response } = req.body;

  if (gotResponse==false) {
    res.send('No response received yet');
    return;
  }else{
    res.send(Response);
    gotResponse = false;
    return;
  }
  
});

// Start the server
app.listen(port, () => {
  console.log(`response Server running at http://localhost:${port}`);
});
