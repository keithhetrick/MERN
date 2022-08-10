const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: String,
    Price: Number,
    Description: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Products", ProductSchema);
