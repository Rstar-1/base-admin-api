const teamService = require("../../services/managementservice/TeamService");

exports.teamadddata = async function (req, res) {
  try {
    var users = await teamService.teamadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.teamgetdata = async function (req, res) {
  try {
    var users = await teamService.teamgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.teampaginationdata = async function (req, res) {
  try {
    var users = await teamService.teampaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.teamsingledata = async function (req, res) {
  try {
    var users = await teamService.teamsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.teamupdatedata = async function (req, res) {
  try {
    var users = await teamService.teamupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.teamdeletedata = async function (req, res) {
  try {
    var users = await teamService.teamdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
