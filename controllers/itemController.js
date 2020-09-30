const Item = require("../models/Item");
const Brand = require("../models/brand");

const async = require("async");

exports.item_list = (req, res, next) => {
  async.parallel(
    {
      items: (callback) => {
        Item.find({}).populate("brand").exec(callback);
      },
      brands: (callback) => {
        Brand.find({}, callback);
      },
    },
    (err, data) => {
      if (err) {
        return next(err);
      }
      res.render("item_list", {
        title: "Items",
        item_list: data.items,
        brands: data.brands,
      });
    }
  );
};
