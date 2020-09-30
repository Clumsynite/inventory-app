const Item = require("../models/Item");
const Brand = require("../models/brand");

const async = require("async");

exports.brand_list = (req, res, next) => {
  Brand.find({})
    .exec((err, items) => {
      if (err) {
        return next(err);
      }
      res.render("brand_list", { title: "Brands", brands: items });
    });
};
