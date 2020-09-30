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
        title: "View Items",
        item_list: data.items,
        brands: data.brands,
      });
    }
  );
};

exports.item_view = (req, res, next) => {
  async.parallel(
    {
      item: (callback) => {
        Item.findById(req.params.id).populate("brand").exec(callback);
      },
      brands: (callback) => {
        Brand.find({}, callback);
      },
    },
    (err, data) => {
      if (err) {
        return next(err);
      }
      res.render("item_view", {
        title: data.item.name,
        item: data.item,
        brands: data.brands,
      });
    }
  );
};

exports.item_new_get = (req, res, next) => {
  Brand.find({}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.render("item_form", { title: "New Item", brands: data });
  });
};

exports.item_new_post = (req, res, next) => {
  const item = new Item({
    name: req.body.name,
    brand: req.body.brand,
    price: req.body.price,
    inStock: req.body.quantity,
    added: new Date()
  });

  item.save((err, data) => {
    if (err) { return next(err) }
    res.redirect(item.url)
  })
};
