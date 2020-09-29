const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');
const brandController = require('../controllers/brandController');

router.get('/', itemController.index)

router.get('/items', itemController.item_list)

module.exports = router;
