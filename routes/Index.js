const express = require("express");
const router = express.Router();
const SeoRoute = require("./seoroutes/SeoRoutes");
const CmsTextRoute = require("./cmsroutes/CmsTextRoutes");
const CmsImagetRoute = require("./cmsroutes/CmsImageRoutes");

module.exports = function(app) {
 app.use("/api", router)
 SeoRoute(router);
 CmsTextRoute(router);
 CmsImagetRoute(router);
}
