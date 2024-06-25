const clientService = require("../../services/managementservice/ClientService");

exports.clientadddata = async function (req, res) {
  try {
    var users = await clientService.clientadddata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.clientgetdata = async function (req, res) {
  try {
    var users = await clientService.clientgetdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.clientpaginationdata = async function (req, res) {
  try {
    var users = await clientService.clientpaginationdata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.clientsingledata = async function (req, res) {
  try {
    var users = await clientService.clientsingledata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.clientupdatedata = async function (req, res) {
  try {
    var users = await clientService.clientupdatedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};

exports.clientdeletedata = async function (req, res) {
  try {
    var users = await clientService.clientdeletedata(req, res);

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Record data successfully",
    });
  } catch (error) {
    error;
  }
};
