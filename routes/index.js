const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');
const brandController = require('../controllers/brandController');

router.get('/', (req, res, next) => {res.redirect('/item')})

router.get('/item', itemController.item_list)

router.get('/item/:id/view', itemController.item_view)

router.get('/item/new', itemController.item_new_get)

router.post('/item/new', itemController.item_new_post)

router.get('/item/:id/update', itemController.item_update_get)

router.post('/item/:id/update', itemController.item_update_post)

router.get('/brand/:id/view', brandController.brand_view)

router.get('/brand/new', brandController.brand_new_get)

router.post('/brand/new', brandController.brand_new_post)

router.get('/brand/:id/update', brandController.brand_update_get)

router.post('/brand/:id/update', brandController.brand_update_post)

module.exports = router;
