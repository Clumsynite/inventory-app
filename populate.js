#! /usr/bin/env node
require("dotenv").config();
console.log(
  "This script populates some test items, brands to your database. Specified database as argument"
);

const async = require("async");
const Item = require("./models/item");
const Brand = require("./models/brand");

const mongoose = require("mongoose");
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const items = [];
const brands = [];

const brandCreate = (name, cb) => {
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


const itemCreate = (name, brand, inStock, price, added, photo, cb) => {
  itemDetail = {
    name: name,
    brand: brand,
    price: price,
    inStock: inStock,
    added: added,
    photo: photo
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
          brands[0],
          10,
          53500,
          new Date(),
          "https://m.media-amazon.com/images/I/51qBzX0pGYL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone XR (64GB) - Coral",
          brands[0],
          15,
          47500,
          new Date(),
          "https://m.media-amazon.com/images/I/51cCOStn+rL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 7 (32GB) - Black",
          brands[0],
          20,
          27799,
          new Date(),
          "https://m.media-amazon.com/images/I/41D9NDiSzjL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 8 (12G8B) - Gold",
          brands[0],
          27,
          39999,
          new Date(),
          "https://m.media-amazon.com/images/I/51MmoFoNuoL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 Pro Max (64GB) - Space Grey",
          brands[0],
          8,
          99990,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 Pro (64GB) - Space Grey",
          brands[0],
          12,
          96990,
          new Date(),
          "https://m.media-amazon.com/images/I/61m6DjujESL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 (256GB) - White",
          brands[0],
          4,
          75900,
          new Date(),
          "https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 11 (512GB) - Space Grey",
          brands[0],
          2,
          150800,
          new Date(),
          "https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "iPhone 8 Plus (256GB) - Space Grey",
          brands[0],
          5,
          84900,
          new Date(),
          "https://m.media-amazon.com/images/I/516GyFgGHQL._AC_UY218_.jpg",
          callback
        );
      },

      // Samsung - 13 Items
      (callback) => {
        itemCreate(
          "Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)",
          brands[1],
          40,
          13999,
          new Date(),
          "https://m.media-amazon.com/images/I/71dujTTJDZL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M31 (Ocean Blue, 6GB RAM, 128GB Storage)",
          brands[1],
          45,
          17499,
          new Date(),
          "https://m.media-amazon.com/images/I/71-Su4Wr0HL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M31s (Mirage Blue, 6GB RAM, 64GB Storage)",
          brands[1],
          26,
          19499,
          new Date(),
          "https://m.media-amazon.com/images/I/61d-phh4GfL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)",
          brands[1],
          40,
          24999,
          new Date(),
          "https://m.media-amazon.com/images/I/710weRkP-nL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M01 (Black, 3GB RAM, 32GB Storage)",
          brands[1],
          40,
          7999,
          new Date(),
          "https://m.media-amazon.com/images/I/81onqHVeECL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M11 (Metallic Blue, 4GB RAM, 64GB Storage)",
          brands[1],
          20,
          11999,
          new Date(),
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy M01s (Blue, 3GB RAM, 32GB Storage)",
          brands[1],
          40,
          9499,
          new Date(),
          "https://m.media-amazon.com/images/I/712MlLutKGL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy A21s (Blue, 4GB RAM, 64GB Storage)",
          brands[1],
          30,
          14999,
          new Date(),
          "https://m.media-amazon.com/images/I/811RH5e-snL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy A71 (Prism Crush, 8GB RAM, 128GB Storage)",
          brands[1],
          40,
          29499,
          new Date(),
          "https://m.media-amazon.com/images/I/71qI1h+05qL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy Note10 lite (Aura Glow, 8GB RAM, 128GB Storage)",
          brands[1],
          40,
          39999,
          new Date(),
          "https://m.media-amazon.com/images/I/71T0KJFxCHL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy Z Fold2 5G (Mystic Bronze, 12GB RAM, 25GB Storage)",
          brands[1],
          8,
          14999,
          new Date(),
          "https://m.media-amazon.com/images/I/71U9nzW+XsL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy S10 Plus (Black, 8GB RAM, 128GB Storage)",
          brands[1],
          30,
          52999,
          new Date(),
          "https://m.media-amazon.com/images/I/619jtWsN0cL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Galaxy Note 20 Ultra (Mystic Bronze, 12GB RAM, 256GB Storage)",
          brands[1],
          10,
          104999,
          new Date(),
          "https://m.media-amazon.com/images/I/81afQk-7AjL._AC_UY218_.jpg",
          callback
        );
      },

      //OnePlus - 6 items
      (callback) => {
        itemCreate(
          "OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)",
          brands[2],
          39,
          29999,
          new Date(),
          "https://m.media-amazon.com/images/I/719CgfLcqNL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 7T (Glacier Blue, 6GB RAM, 128 Storage)",
          brands[2],
          29,
          41999,
          new Date(),
          "https://m.media-amazon.com/images/I/71ncRs6HzyL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 7T (Haze Blue, 8GB RAM, 256GB Storage)",
          brands[2],
          35,
          43999,
          new Date(),
          "https://m.media-amazon.com/images/I/61FRLa8IFTL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 8 Pro (Glacier Green, 8GB RAM, 128GB Storage)",
          brands[2],
          19,
          54999,
          new Date(),
          "https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 5T (Midnight Black, 6GB RAM, 64GB Storage)",
          brands[2],
          25,
          26999,
          new Date(),
          "https://m.media-amazon.com/images/I/81qqBAKRhTL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "OnePlus 6 (Mirror Black, 8GB RAM, 128GB Storage)",
          brands[2],
          39,
          23999,
          new Date(),
          "https://m.media-amazon.com/images/I/81YgdWkOP0L._AC_UY218_.jpg",
          callback
        );
      },

      //Nokia - 7 Items
      (callback) => {
        itemCreate(
          "Nokia 5.3 (Charcoal, 4GB RAM, 64GB Storage)",
          brands[3],
          30,
          13999,
          new Date(),
          "https://m.media-amazon.com/images/I/61L1ItFgFHL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 2.3 (Charcoal, 2GB RAM, 32GB Storage)",
          brands[3],
          40,
          8650,
          new Date(),
          "https://m.media-amazon.com/images/I/41gAZdQUyZL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia C3 (Nordic Blue, 2GB RAM, 16GB Storage)",
          brands[3],
          23,
          7499,
          new Date(),
          "https://m.media-amazon.com/images/I/71Vh6ktdqML._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 4.2 (Black, 3GB RAM, 32GB Storage)",
          brands[3],
          25,
          11499,
          new Date(),
          "https://m.media-amazon.com/images/I/81YTUmk8zCL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 3.2 (Black, 3GB RAM, 32GB Storage)",
          brands[3],
          35,
          10690,
          new Date(),
          "https://m.media-amazon.com/images/I/81dOOs7xhLL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 7.2 (Cyan Green, 4GB RAM, 64GB Storage)",
          brands[3],
          32,
          19999,
          new Date(),
          "https://m.media-amazon.com/images/I/41JwOxahweL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Nokia 9 PureView (Blue, 6GB RAM, 128GB Storage)",
          brands[3],
          20,
          34875,
          new Date(),
          "https://m.media-amazon.com/images/I/41UZcsc47KL._AC_UY218_.jpg",
          callback
        );
      },

      // Redmi - 3 Items
      (callback) => {
        itemCreate(
          "9 (Carbon Black, 4GB RAM, 64GB Storage)",
          brands[4],
          30,
          8999,
          new Date(),
          "https://m.media-amazon.com/images/I/71uZrDPrsRL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "8A Dual (Sea Blue, 2GB RAM, 32GB Storage)",
          brands[4],
          30,
          7499,
          new Date(),
          "https://m.media-amazon.com/images/I/71h+C9wJCjL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "K20 Pro (Flame Red, 6GB RAM, 128GB Storage)",
          brands[4],
          10,
          23501,
          new Date(),
          "https://m.media-amazon.com/images/I/71yNpxGXbML._AC_UY218_.jpg",
          callback
        );
      },

      // Motorola - 4 items
      (callback) => {
        itemCreate(
          "G Plus, 4th Gen (White, 32GB Storage)",
          brands[5],
          30,
          9800,
          new Date(),
          "https://m.media-amazon.com/images/I/81voLtCcvQL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Razr (Gold, 6GB RAM)",
          brands[5],
          3,
          114400,
          new Date(),
          "https://m.media-amazon.com/images/I/41ATfn4H+aL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Edge+ (Thunder Grey, 12GB RAM, 256GB Storage)",
          brands[5],
          10,
          72490,
          new Date(),
          "https://m.media-amazon.com/images/I/312uzH0HoML._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Razr (Black, 6GB RAM, 128GB Storage)",
          brands[5],
          30,
          96000,
          new Date(),
          "https://m.media-amazon.com/images/I/31mqujr+QaL._AC_UY218_.jpg",
          callback
        );
      },

      // ASUS - 3 items
      (callback) => {
        itemCreate(
          "Zenfone Max M2 (Black, 3GB RAM, 32GB Storage)",
          brands[6],
          20,
          7999,
          new Date(),
          "https://images-na.ssl-images-amazon.com/images/I/415SN0A4fBL.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Zenfone 3 (Gold, 3GB RAM, 32GB Storage)",
          brands[6],
          21,
          13999,
          new Date(),
          "https://m.media-amazon.com/images/I/71V6X8mZrgL._AC_UY218_.jpg",
          callback
        );
      },
      (callback) => {
        itemCreate(
          "Zenfone Max M1 (Gold, 3GB RAM, 32GB Storage)",
          brands[6],
          12,
          6999,
          new Date(),
          "https://images-na.ssl-images-amazon.com/images/I/41KoB26JpFL.jpg",
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
