const Item = require("../models/Item");
const Brand = require("../models/brand");

const async = require("async");

exports.index = (req, res, next) => {
  async.parallel(
    {
      items: (callback) => {
        Item.countDocuments({}, callback);
      },
      brand: (callback) => {
        Brand.countDocuments({}, callback);
      },
      brands: callback => {
        Brand.find({}, callback)
      }
    },
    (err, results) => {
      res.render("index", { title: "Inventory", data: results, error: err, brands: results.brands });
    }
  );
};

exports.item_list = (req, res, next) => {
  Item.find({})
    .populate("brand")
    .exec((err, items) => {
      if (err) {
        return next(err);
      }
      res.render("item_list", { title: "Items", item_list: items });
    });
};
