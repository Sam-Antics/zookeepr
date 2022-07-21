const express = require('express'); // this requires Express.js

const PORT = process.env.PORT || 3001;
const app = express(); // this starts Express.js
// parse incoming string or array data
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// get all the assets for the HTML to load properly
app.use(express.static('public'));

// use apiRoutes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
