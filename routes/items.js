const express = require('express');
const data = require('../models/items');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(data);
});

module.exports = router;
