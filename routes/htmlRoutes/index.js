const path = require('path');
const router = require('express').Router();



// GET route for index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  // GET route for animals.html
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });
  // GET route for zookeepers.html
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });
  // Wildcard route (if anything other than the above is entered as a route, it will go to index.html)
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  

  module.exports = router;