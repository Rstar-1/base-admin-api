const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },
    sectionid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// model gallery
const gallery = new mongoose.model("gallery", gallerySchema);
module.exports = gallery;
