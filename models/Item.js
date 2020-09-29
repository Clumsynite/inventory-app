const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  brand: [{ type: Schema.Types.ObjectId, ref: "Brand" }],
  inStock: { type: Number, default: 1 },
  price: { type: Number, default: 0 },
  added: { type: Date, default: Date.now },
});

ItemSchema.virtual("url").get(function () {
  return "item/" + this._id;
});

module.exports = mongoose.model("Item", ItemSchema);
