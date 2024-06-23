const express = require("express");
const router = express.Router();

// ----------------------------- SEO ----------------------------- //
const SeoRoute = require("./seoroutes/SeoRoutes");
// ----------------------------- SEO ----------------------------- //

// ----------------------------- CMS ----------------------------- //
const CmsTextRoute = require("./cmsroutes/CmsTextRoutes");
const CmsImagetRoute = require("./cmsroutes/CmsImageRoutes");
// ----------------------------- CMS ----------------------------- //

// ----------------------------- Automation ----------------------------- //
const DashboardRoute = require("./automationroutes/DashboardRoutes");
const SidebarRoute = require("./automationroutes/SidebarRoutes");
const ManagementRoute = require("./automationroutes/ManagementRoutes");
// ----------------------------- Automation ----------------------------- //

// ----------------------------- Management ----------------------------- //
const BrandRoute = require("./managementroutes/BrandRoutes");
const ClientRoute = require("./managementroutes/ClientRoutes");
const FaqRoute = require("./managementroutes/FaqRoutes");
const GalleryRoute = require("./managementroutes/GalleryRoutes");
const PortfolioRoute = require("./managementroutes/PortfolioRoutes");
const ReviewRoute = require("./managementroutes/ReviewRoutes");
const ServiceRoute = require("./managementroutes/ServiceRoutes");
const TeamRoute = require("./managementroutes/TeamRoutes");
// ----------------------------- Management ----------------------------- //

module.exports = function(app) {
 app.use("/api", router)
 SeoRoute(router);
 CmsTextRoute(router);
 CmsImagetRoute(router);
 DashboardRoute(router);
 SidebarRoute(router);
 ManagementRoute(router);
 BrandRoute(router);
 ClientRoute(router);
 FaqRoute(router);
 GalleryRoute(router);
 PortfolioRoute(router);
 ReviewRoute(router);
 ServiceRoute(router);
 TeamRoute(router);
}
