const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
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

// model team
const team = new mongoose.model("team", teamSchema);
module.exports = team;
