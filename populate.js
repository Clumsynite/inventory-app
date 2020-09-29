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

const createBrand = (cb) => {
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

      // Samsung - 13 Items
      (callback) => {
        itemCreate(
          "Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)",
          brand[1],
          40,
          13999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
          brand[1],
          45,
          17499,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M31s (Mirage Blue, 6GB RAM, 64GB Storage)",
          brand[1],
          26,
          19499,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)",
          brand[1],
          40,
          24999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M01 (Black, 3GB RAM, 32GB Storage)",
          brand[1],
          40,
          7999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M11 (Metallic Blue, 4GB RAM, 64GB Storage)",
          brand[1],
          20,
          11999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M01s (Blue, 3GB RAM, 32GB Storage)",
          brand[1],
          40,
          9499,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy A21s (Blue, 4GB RAM, 64GB Storage)",
          brand[1],
          30,
          14999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy A71 (Prism Crush, 8GB RAM, 128GB Storage)",
          brand[1],
          40,
          29999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy Note10 lite (Aura Glow, 8GB RAM, 128GB Storage)",
          brand[1],
          40,
          39999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy Z Fold2 5G (Mystic Bronze, 12GB RAM, 25GB Storage)",
          brand[1],
          8,
          14999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy S10 Plus (Black, 8GB RAM, 128GB Storage)",
          brand[1],
          30,
          52999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy Note 20 Ultra (Mystic Bronze, 12GB RAM, 256GB Storage)",
          brand[1],
          10,
          104999,
          new Date(),
          callback
        );
      },

      //OnePlus - 6 items
      (callback) => {
        itemCreate(
          "OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)",
          brand[2],
          39,
          29999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 7T (Glacier Blue, 6GB RAM, 128 Storage)",
          brand[2],
          29,
          41999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 7T (Haze Blue, 8GB RAM, 256GB Storage)",
          brand[2],
          35,
          43999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 8 Pro (Glacier Green, 8GB RAM, 128GB Storage)",
          brand[2],
          19,
          54999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 5T (Midnight Black, 6GB RAM, 64GB Storage)",
          brand[2],
          25,
          26999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 6 (Mirror Black, 6GB RAM, 64GB Storage)",
          brand[2],
          39,
          20495,
          new Date(),
          callback
        );
      },

      //Nokia - 7 Items
      (callback) => {
        itemCreate(
          "Nokia 5.3 (Charcoal, 4GB RAM, 64GB Storage)",
          brand[3],
          30,
          13999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 2.3 (Charcoal, 2GB RAM, 32GB Storage)",
          brand[3],
          40,
          8650,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia C3 (Black, 2GB RAM, 16GB Storage)",
          brand[3],
          23,
          7499,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 4.2 (Black, 3GB RAM, 32GB Storage)",
          brand[3],
          25,
          11999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 3.2 (Black, 3GB RAM, 32GB Storage)",
          brand[3],
          35,
          10690,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 7.2 (Cyan Green, 4GB RAM, 64GB Storage)",
          brand[3],
          32,
          19999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 9 PureView (Blue, 6GB RAM, 128GB Storage)",
          brand[3],
          20,
          34875,
          new Date(),
          callback
        );
      },

      // Redmi - 3 Items
      (callback) => {
        itemCreate(
          "9 (Carbon, 4GB RAM, 64GB Storage)",
          brand[4],
          30,
          8999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "8A Dual (Sea Blue, 2GB RAM, 32GB Storage)",
          brand[4],
          30,
          7499,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "K20 Pro (Flame Red, 6GB RAM, 128GB Storage)",
          brand[4],
          10,
          23501,
          new Date(),
          callback
        );
      },

      // Motorola - 4 items
      (callback) => {
        itemCreate(
          "G Plus, 4th Gen (White, 32GB Storage)",
          brand[5],
          30,
          9800,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Raz Gold (Gold, 6GB RAM)",
          brand[5],
          3,
          114400,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Edge+ (Thunder Grey, 12GB RAM, 256GB Storage)",
          brand[5],
          10,
          72490,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Razr (Black, 6GB RAM, 128GB Storage)",
          brand[5],
          30,
          7499,
          new Date(),
          callback
        );
      },

      // ASUS - 3 items
      (callback) => {
        itemCreate(
          "Zenfone Max M2 (Black, 3GB RAM, 32GB Storage)",
          brand[6],
          20,
          7999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Zenfone 3 (Gold, 3GB RAM, 32GB Storage)",
          brand[6],
          21,
          13999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Zenfone Max M1 (Gold, 3GB RAM, 32GB Storage)",
          brand[6],
          12,
          6999,
          new Date(),
          callback
        );
      },

      // HTC - 0 item to test if a brand has no items
    ],
    cb
  );
}

async.series(
  [createBrand, createItems],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log("FINAL ERR: " + err);
    } else {
      console.log("Items: " + items);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
