const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');
const brandController = require('../controllers/brandController');

router.get('/', itemController.index)

router.get('/item', itemController.item_list)

router.get('/brand', brandController.brand_list)

module.exports = router;
