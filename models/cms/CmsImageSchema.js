const mongoose = require("mongoose");

const cmsimageSchema = new mongoose.Schema(
  {
    sectionid: {
      type: String,
      required: true,
    },
    sectionname: {
      type: String,
      required: true,
    },
    cmsdata: {
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

// model cmsimage
const cmsimage = new mongoose.model("cmsimage", cmsimageSchema);
module.exports = cmsimage;
