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
  res.render('brand_form', {title: 'New Brand'}) 
}

exports.brand_new_post = (req, res, next) => {
  const brand = new Brand({name: req.body.name})

  Brand.findOne({'name': req.body.name})
  .exec((err, found) => {
    if (err) { return next(err) }
    if(found) {
      res.redirect(found.url)
    }else {
      brand.save((err) => {
        if (err) {return next(err)}
        res.redirect(brand.url)
      })
    }
  })
}