// -------------------------------------------- SEO -------------------------------------------- //
const SeoController = require('../controllers/seocontroller/SeoController.js');
// -------------------------------------------- SEO -------------------------------------------- //

// -------------------------------------------- CMS -------------------------------------------- //
const CmsTextController = require('../controllers/cmscontroller/CmsTextController.js');
const CmsImageController = require("../controllers/cmscontroller/CmsImageController.js");
// -------------------------------------------- CMS -------------------------------------------- //

// -------------------------------------------- Automation -------------------------------------------- //
const DashboardController = require("../controllers/automationcontroller/DashboardController.js");
const ManagementController = require("../controllers/automationcontroller/ManagementController.js");
const SidebarController = require("../controllers/automationcontroller/SidebarController.js");
// -------------------------------------------- Automation -------------------------------------------- //

// -------------------------------------------- Management -------------------------------------------- //
const BrandController = require("../controllers/managementcontroller/BrandController.js");
const ClientController = require("../controllers/managementcontroller/ClientController.js");
const FaqController = require("../controllers/managementcontroller/FaqController.js");
const GalleryController = require("../controllers/managementcontroller/GalleryController.js");
const PortfolioController = require("../controllers/managementcontroller/PortfolioController.js");
const ReviewController = require("../controllers/managementcontroller/ReviewController.js");
const ServiceController = require("../controllers/managementcontroller/ServiceController.js");
const TeamController = require("../controllers/managementcontroller/TeamController.js");
// -------------------------------------------- Management -------------------------------------------- //

module.exports = {
  SeoController,
  CmsTextController,
  CmsImageController,
  DashboardController,
  ManagementController,
  SidebarController,
  BrandController,
  ClientController,
  FaqController,
  GalleryController,
  PortfolioController,
  ReviewController,
  ServiceController,
  TeamController,
};