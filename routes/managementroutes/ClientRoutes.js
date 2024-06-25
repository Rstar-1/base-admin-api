const Controller = require("../../controllers");
const path = require("path");
const multer = require("multer");
const { fileUpload } = require("../../middleware/FileUpload");
const { uploadToCloud } = require("../../middleware/Upload");

module.exports = function (app) {
  app.post(
    "/clientadddata",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ClientController.clientadddata
  );
  app.get("/clientgetdata", Controller.ClientController.clientgetdata);
  app.post(
    "/clientpaginationdata",
    Controller.ClientController.clientpaginationdata
  );
  app.get(
    "/clientsingledata/:id",
    Controller.ClientController.clientsingledata
  );
  app.patch(
    "/clientupdatedata/:id",
    fileUpload("picture", false),
    uploadToCloud(),
    Controller.ClientController.clientupdatedata
  );
  app.delete(
    "/clientdeletedata/:id",
    Controller.ClientController.clientdeletedata
  );
};
