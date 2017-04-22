const db = require('../config/db');

const Image = {};

Image.findAll = () => db.manyOrNone('SELECT * FROM images');

Image.create = (name) => {
  return db.one(
    `INSERT INTO images (name) VALUES ($1) returning id`,
    [name]
  );
}

Image.delete = (id) => {
  return db.none(
    `DELETE FROM images WHERE id = $1`,
    [id]
  );
}

module.exports = Image;
