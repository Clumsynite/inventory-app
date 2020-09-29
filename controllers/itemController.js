const Item = require('../models/Item');
const Category = require('../models/category');

const async = require('async');

exports.index = (req, res, next) => {
  async.parallel({
    items: (callback) => {
      Item.countDocuments({}, callback)
    },
    category: (callback) => {
      Category.countDocuments({}, callback)
    }
  }, (err, results) => {
    res.render('index', {title: 'Inventory', data: results, error: err})
    console.log(results);
  })
}