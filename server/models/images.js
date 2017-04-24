const db = require('../config/db');

const Image = {};

Image.findAll = () => db.manyOrNone('SELECT * FROM images');

Image.create = (name,content) => {
  return db.one(
    `INSERT INTO images (name, content) VALUES ($1, $2) returning id`,
    [name, content]
  );
}

Image.delete = (id) => {
  return db.none(
    `DELETE FROM images WHERE id = $1`,
    [id]
  );
}

module.exports = Image;
