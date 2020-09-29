#! /usr/bin/env node
require("dotenv").config();
console.log(
  "This script populates some test items, brands to your database. Specified database as argument"
);

const async = require("async");
const Item = require("./models/item");
const Brand = require("./models/brand");

const mongoose = require("mongoose");
const brand = require("./models/brand");
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const items = [];
const brands = [];

function itemCreate(name, brand, inStock, price, added, cb) {
  itemDetail = {
    name: name,
    brand: brand,
    price: price,
    inStock: inStock,
    added: added,
  };

  const item = new Item(itemDetail);

  item.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Items: " + item);
    items.push(item);
    cb(null, item);
  });
}

function brandCreate(name, cb) {
  const brand = new Brand({ name: name });

  brand.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Brand: " + brand);
    brands.push(brand);
    cb(null, brand);
  });
}
// name: { type: String, required: true },
// Brand: { type: Schema.Types.ObjectId, ref: "Brand" },
// inStock: { type: Number, default: 1 },
// price: { type: Number, default: 0 },
// added: { type: Date, default: Date.now }

const createGenre = (cb) => {
  async.parallel(
    [
      (callback) => {
        brandCreate("Apple", callback);
      },
      (callback) => {
        brandCreate("Samsung", callback);
      },
      (callback) => {
        brandCreate("OnePlus", callback);
      },
      (callback) => {
        brandCreate("Nokia", callback);
      },
      (callback) => {
        brandCreate("Redmi", callback);
      },
      (callback) => {
        brandCreate("Oppo", callback);
      },
      (callback) => {
        brandCreate("Vivo", callback);
      },
      (callback) => {
        brandCreate("Realme", callback);
      },
      (callback) => {
        brandCreate("Motorola", callback);
      },
      (callback) => {
        brandCreate("ASUS", callback);
      },
      (callback) => {
        brandCreate("HTC", callback);
      },
    ],
    cb
  );
};

function createItems(cb) {
  async.parallel(
    [
      //Apple - 9 Items
      (callback) => {
        itemCreate(
          "iPhone XR (128GB) - Black",
          brand[0],
          10,
          53500,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone XR (64GB) - Coral",
          brand[0],
          15,
          47500,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 7 (32GB) - Black",
          brand[0],
          20,
          27799,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 8 (12G8B) - Gold",
          brand[0],
          27,
          39999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 Pro Max (64GB) - Space Grey",
          brand[0],
          8,
          99990,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 Pro (64GB) - Space Grey",
          brand[0],
          12,
          96990,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 (256GB) - White",
          brand[0],
          4,
          75900,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 (512GB) - Space Grey",
          brand[0],
          2,
          150800,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 8 Plus (256GB) - Space Grey",
          brand[0],
          5,
          84900,
          new Date(),
          callback
        );
      },

      // Samsung
      (callback) => {
        itemCreate('Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)', brand[1], 40, 13999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)', brand[1], 45, 17499, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M31s (Mirage Blue, 6GB RAM, 64GB Storage)', brand[1], 26, 19499, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)', brand[1], 40, 24999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M01 (Black, 3GB RAM, 32GB Storage)', brand[1], 40, 7999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M11 (Metallic Blue, 4GB RAM, 64GB Storage)', brand[1], 20, 11999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M01s (Blue, 3GB RAM, 32GB Storage)', brand[1], 40, 9499, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy A21s (Blue, 4GB RAM, 64GB Storage)', brand[1], 30, 14999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy A71 (Prism Crush, 4GB RAM, 64GB Storage)', brand[1], 40, 13999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)', brand[1], 40, 13999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)', brand[1], 40, 13999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)', brand[1], 40, 13999, new Date(), callback);
      },
      (callback) => {
        itemCreate('Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)', brand[1], 40, 13999, new Date(), callback);
      },
    ],
    cb
  );
}

async.series(
  [createGenreAuthors, createBooks, createBookInstances],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("BOOKInstances: " + bookinstances);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
