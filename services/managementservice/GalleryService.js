const gallery = require("../../models/management/GallerySchema");

// Gallery add
exports.galleryadddata = async (req, res) => {
  const { sectionid, title, subtitle, description } = req.body;
  try {
    const adduser = new gallery({
      sectionid,
      title,
      subtitle,
      description,
      picture: req.body.picture,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "galleryadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery all data
exports.gallerygetdata = async (req, res) => {
  try {
    const userdata = await gallery.find();
    res.status(201).json(userdata);

    // console.log(userdata, "galleryalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery pagination all data
exports.gallerypaginationdata = async (req, res) => {
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
    const gallerystore = await gallery.find(searchObject).skip(offset).limit(6);
    const totalCount = await gallery.countDocuments(searchObject);
    res.json({ gallerystore, totalCount });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Gallery single data
exports.gallerysingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await gallery.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "gallerysingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery update data
exports.galleryupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await gallery.findByIdAndUpdate(
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

    //console.log(updateduser, "galleryupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Gallery delete data
exports.gallerydeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await gallery.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "gallerydeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
