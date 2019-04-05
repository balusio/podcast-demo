
const express = require('express');
const app = express();
const path = require('path');
const port = '8080';
// TEST THE PRODUCTION BUILD WITH THIS APP
// viewed at http://localhost:8080
app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))