const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
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

// model service
const service = new mongoose.model("service", serviceSchema);
module.exports = service;
