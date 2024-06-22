const Controller = require("../../controllers");

module.exports = function (app) {
  app.post("/seoadddata", Controller.SeoController.seoadddata);
  app.get("/seogetdata", Controller.SeoController.seogetdata);
  app.get("/seosingledata/:id", Controller.SeoController.seosingledata);
  app.patch("/seoupdatedata/:id", Controller.SeoController.seoupdatedata);
  app.delete("/seodeletedata/:id", Controller.SeoController.seodeletedata);
};
