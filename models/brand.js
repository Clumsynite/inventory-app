const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brandSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 100 },
});

brandSchema.virtual("url").get(function () {
  return "/brand/" + this._id;
});

module.exports = mongoose.model("Genre", brandSchema);
