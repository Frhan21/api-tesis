const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const port = 3000; 

const app = express();
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', routes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

