const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');
const brandController = require('../controllers/brandController');

router.get('/', itemController.index)

module.exports = router;
