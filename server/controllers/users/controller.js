const Users = require('../../models/users');

const controller = {};

controller.index = (req, res) => {
  Users
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR: ', err));
}

controller.create = (req, res) => {
  console.log("Adding to db:", req.body);

  const name = req.body.name,
        email = req.body.email,
        accessToken = req.body.accessToken;

  Users
    .create(name, email, accessToken)
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('CONTROLLER ERROR: ', err));
}


// controller.show = (req, res) => {
//     const id = req.params.id;
//     Users
//         .findById(id)
//         .then((data) => {
//             res.send(data);
//         })
//         .catch(err => console.log('ERROR:', err));
// };




module.exports = controller;
