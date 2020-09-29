const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: Schema.Types.ObjectId, ref: "Brand" },
  inStock: { type: Number, default: 1 },
  price: { type: Number, default: 0 },
  added: { type: Date, default: Date.now },
});

ItemSchema.virtual("url").get(function () {
  return "item/" + this._id;
});

ItemSchema.virtual("price_formatted").get(function () {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    this.price
  );
});

ItemSchema.virtual("item_name").get(function () {
  return this.name.substring(0, this.name.indexOf('('))
});

module.exports = mongoose.model("Item", ItemSchema);
