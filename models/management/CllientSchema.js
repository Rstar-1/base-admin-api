const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
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

// model client
const client = new mongoose.model("client", clientSchema);
module.exports = client;
