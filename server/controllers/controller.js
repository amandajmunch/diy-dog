const Beers = require('../models/beer');

const controller = {};

controller.index = (req, res) => {
  Beers
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR: ', err));
}

controller.create = (req, res) => {
  console.log("Adding to db:", req.body);
  const name = req.body.Name,
        tagline = req.body.Tagline,
        abv = req.body.Abv,
        ibu = req.body.Ibu,
        description = req.body.Description,
        image_url = req.body.Image_url;

  Beers
    .create(name,tagline, abv, ibu, description, image_url)
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('CONTROLLER ERROR: ', err));
}

controller.delete = (req, res) => {
  const id = req.params.id;

  Beers
    .delete(id)
    .then((data) => {
      res.send('Deleted from DB.');
    })
    .catch(err => console.log('ERROR: ', err));
}

module.exports = controller;
