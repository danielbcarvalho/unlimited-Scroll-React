const mongoose = require("mongoose");

const scrollSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Scroll", scrollSchema);
