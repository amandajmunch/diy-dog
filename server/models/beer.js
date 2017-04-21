const db = require('../config/db');

const Beer = {};

Beer.findAll = () => db.manyOrNone('SELECT * FROM beers');

Beer.findById = (id) => {
  return db.one(
    `SELECT * FROM beers WHERE id = $1`,
    [id]
  );
}

Beer.create = (name,tagline, abv, ibu, description, image_url, malt, hops, food_pairing) => {
  return db.one(
    `INSERT INTO beers (name, tagline, abv, ibu, description, image_url, malt, hops, food_pairing) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning id`,
    [name,tagline, abv, ibu, description, image_url, malt, hops, food_pairing]
  );
}

Beer.delete = (id) => {
  return db.none(
    `DELETE FROM beers WHERE id = $1`,
    [id]
  );
}

module.exports = Beer
