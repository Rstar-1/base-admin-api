const team = require("../../models/management/TeamSchema");

// Team add
exports.teamadddata = async (req, res) => {
  const { sectionid, title, subtitle, description } = req.body;
  try {
    const adduser = new team({
      sectionid,
      title,
      subtitle,
      description,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "teamadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Team all data
exports.teamgetdata = async (req, res) => {
  try {
    const userdata = await team.find();
    res.status(201).json(userdata);

    // console.log(userdata, "teamalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Team pagination all data
exports.teampaginationdata = async (req, res) => {
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
    const teamstore = await team.find(searchObject).skip(offset).limit(6);
    const totalCount = await team.countDocuments(searchObject);
    res.json({ teamstore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Team single data
exports.teamsingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await team.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "teamsingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Team update data
exports.teamupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await team.findByIdAndUpdate(
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

    //console.log(updateduser, "teamupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Team delete data
exports.teamdeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await team.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "teamdeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
