const client = require("../../models/management/CllientSchema");

// Client add
exports.clientadddata = async (req, res) => {
  const { sectionid, title, subtitle, description } = req.body;
  try {
    const adduser = new client({
      sectionid,
      title,
      subtitle,
      description,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "clientadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Client all data
exports.clientgetdata = async (req, res) => {
  try {
    const userdata = await client.find();
    res.status(201).json(userdata);

    // console.log(userdata, "clientalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Client pagination all data
exports.clientpaginationdata = async (req, res) => {
  try {
    const { offset, search } = req.body;
    const searchObject = {};

    if (search) {
      Object.assign(searchObject, {
        sectionname: {
          $regex: `${search.toString().trim()}`,
          $options: "i",
        },
      });
    }
    const clientstore = await client.find(searchObject).skip(offset).limit(6);
    const totalCount = await client.countDocuments(searchObject);
    res.json({ clientstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Client single data
exports.clientsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await client.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "clientsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Client update data
exports.clientupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await client.findByIdAndUpdate(
      id,
      {
        sectionid: req.body.sectionid,
        title: req.body.title,
        subtitle: req.body.subtitle,
        description: req.body.description,
        picture: req.body.picture,
      },
      {
        new: true,
      }
    );

    //console.log(updateduser, "clientupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Client delete data
exports.clientdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await client.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "clientdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
