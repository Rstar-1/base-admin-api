const seoService = require("../../services/seoservice/SeoService");

exports.seoadddata = async function (req, res) {
  try {
    var users = await seoService.seoadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.seogetdata = async function (req, res) {
  try {
    var users = await seoService.seogetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.seosingledata = async function (req, res) {
  try {
    var users = await seoService.seosingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.seoupdatedata = async function (req, res) {
  try {
    var users = await seoService.seoupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.seodeletedata = async function (req, res) {
  try {
    var users = await seoService.seodeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
