const Item = require('../models/Item');
const Brand = require('../models/brand');

const async = require('async');

exports.index = (req, res, next) => {
  async.parallel({
    items: (callback) => {
      Item.countDocuments({}, callback)
    },
    brand: (callback) => {
      Brand.countDocuments({}, callback)
    }
  }, (err, results) => {
    res.render('index', {title: 'Inventory', data: results, error: err})
    console.log(results);
  })
}