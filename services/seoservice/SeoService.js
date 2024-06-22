const seo = require("../../models/seo/SeoSchema");

// Seo add
exports.seoadddata = async (req, res) => {
  const { metatitle, metadescription, metakeyword, metaauthor } = req.body;
  try {
    const adduser = new seo({
      metatitle,
      metadescription,
      metakeyword,
      metaauthor,
    });

    await adduser.save();
    res.status(201).json(adduser);

    //console.log(adduser, "seoadddata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo all data
exports.seogetdata = async (req, res) => {
  try {
    const userdata = await seo.find();
    res.status(201).json(userdata);

    // console.log(userdata, "seoalldata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo single data
exports.seosingledata = async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await seo.findById({ _id: id });
    res.status(201).json(userindividual);

    //console.log(userindividual, "seosingledata");
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo update data
exports.seoupdatedata = async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await seo.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    //console.log(updateduser, "seoupdatedata");
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
};

// Seo delete data
exports.seodeletedata = async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await seo.findByIdAndDelete({ _id: id });
    res.status(201).json(deletuser);

    //console.log(deletuser, "seodeletedata");
  } catch (error) {
    res.status(422).json(error);
  }
};
