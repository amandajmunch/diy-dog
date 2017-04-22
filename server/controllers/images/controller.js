const Images = require('../../models/images');

const controller = {};

controller.index = (req, res) => {
  Images
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR: ', err));
}

controller.create = (req, res) => {

  console.log("Adding to db:", req.body);
  const name = req.body.name;

  Images
    .create(name)
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('CONTROLLER ERROR: ', err));
}

controller.delete = (req, res) => {
  const id = req.params.id;

  Images
    .delete(id)
    .then((data) => {
      res.send('Deleted from DB.');
    })
    .catch(err => console.log('ERROR: ', err));
}

controller.show = (req, res) => {
    const id = req.params.id;
    Images
        .findById(id)
        .then((data) => {
            res.send(data);
        })
        .catch(err => console.log('ERROR:', err));
};




module.exports = controller;
