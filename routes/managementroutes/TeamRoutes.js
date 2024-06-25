const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/teamadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.TeamController.teamadddata
  );
  app.get("/teamgetdata", Controller.TeamController.teamgetdata);
  app.post(
    "/teampaginationdata",
    Controller.TeamController.teampaginationdata
  );
  app.get(
    "/teamsingledata/:id",
    Controller.TeamController.teamsingledata
  );
  app.patch(
    "/teamupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.TeamController.teamupdatedata
  );
  app.delete(
    "/teamdeletedata/:id",
    Controller.TeamController.teamdeletedata
  );
};
