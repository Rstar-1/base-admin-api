const express = require("express");
const router = express.Router();
const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/seoadddata", Controller.SeoController.seoregister);
  app.get("/seogetdata", Controller.SeoController.getseodata);
  app.get("/seosingledata/:id", Controller.SeoController.getseosingledata);
  app.patch("/seoupdatedata/:id", Controller.SeoController.updateseodata);
  app.delete("/seodeletedata/:id", Controller.SeoController.deleteseodata);
};
