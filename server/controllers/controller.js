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
  const name = req.body.name,
        tagline = req.body.tagline,
        abv = req.body.abv,
        ibu = req.body.ibu,
        description = req.body.description,
        image_url = req.body.image_url;

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

controller.show = (req, res) => {
    const id = req.params.id;
    Beers
        .findById(id)
        .then((data) => {
            res.send(data);
        })
        .catch(err => console.log('ERROR:', err));
};




module.exports = controller;
