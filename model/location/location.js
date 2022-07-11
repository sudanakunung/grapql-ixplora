const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  type: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "companys" },
  image: String,
});

locationSchema.index({ location: "2dsphere" });
locationSchema.index({ name: "text" });
module.exports = mongoose.model("locations", locationSchema);
