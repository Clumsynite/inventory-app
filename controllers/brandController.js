const Item = require("../models/Item");
const Brand = require("../models/brand");

const async = require("async");

exports.brand_view = (req, res, next) => {
  async.parallel(
    {
      brand: (callback) => {
        Brand.findById(req.params.id).exec(callback);
      },
      brand_items: (callback) => {
        Item.find({ brand: req.params.id }).populate("brand").exec(callback);
      },
      brands: (callback) => {
        Brand.find({}, callback);
      },
    },
    (err, data) => {
      if (err) {
        return next(err);
      }
      res.render("brand_view", {
        title: data.brand.name,
        brand: data.brand,
        item_list: data.brand_items,
        brands: data.brands,
      });
    }
  );
};

exports.brand_new_get = (req, res, next) => {
  res.render("brand_form", { title: "New Brand" });
};

exports.brand_new_post = (req, res, next) => {
  const brand = new Brand({ name: req.body.name });

  Brand.findOne({ name: req.body.name }).exec((err, found) => {
    if (err) {
      return next(err);
    }
    if (found) {
      res.redirect(found.url);
    } else {
      brand.save((err) => {
        if (err) {
          return next(err);
        }
        res.redirect(brand.url);
      });
    }
  });
};

exports.brand_update_get = (req, res, next) => {
  Brand.findById(req.params.id).exec((err, data) => {
    if (err) {
      return next(err);
    }
    if (data == null) {
      const err = new error("Brand not found");
      err.status = 404;
      return next(err);
    }
    res.render("brand_form", { title: "Update Brand", brand: data });
  });
};

exports.brand_update_post = (req, res, next) => {
  const brand = new Brand({
    name: req.body.name,
    _id: req.params.id,
  });
  Brand.findByIdAndUpdate(req.params.id, brand, {}, (err, data) => {
    if (err) {
      return next(err);
    }
    res.redirect(brand.url);
  });
};

exports.brand_delete_get = (req, res, next) => {
  async.parallel(
    {
      items: (callback) => {
        Item.find({ brand: req.params.id }).exec(callback);
      },
      brands: (callback) => {
        Brand.find({}, callback);
      },
      brand: (callback) => {
        Brand.findById(req.params.id).exec(callback);
      },
    },
    (err, data) => {
      if (err) {
        return next(err);
      }
      if (data.items === null) {
        res.redirect("/");
      }
      res.render("brand_delete", {
        title: `Delete ${data.brand.name}`,
        brand: data.brand,
        items: data.items,
        brands: data.brands,
      });
    }
  );
};

exports.brand_delete_post = (req, res, next) => {
  async.parallel(
    {
      items: (callback) => {
        Item.find({ brand: req.params.id }).exec(callback);
      },
      brand: (callback) => {
        Brand.findById(req.params.id).exec(callback);
      },
    },
    (err, data) => {
      if (err) {
        return next(err);
      }
      if (data.items.length > 0) {
        res.render("item_delete", {
          title: "Delete Item",
          brand: results.brand,
          item: results.item,
        });
        return;
      } else {
        Brand.findByIdAndRemove(req.body.brandid, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/");
        });
      }
    }
  );
};
