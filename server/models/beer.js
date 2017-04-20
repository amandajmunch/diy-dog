const db = require('../config/db');

const Beer = {};

Beer.findAll = () => db.manyOrNone('SELECT * FROM beers');

Beer.findById = (id) => {
  return db.one(
    `SELECT * FROM beers WHERE id = $1`,
    [id]
  );
}

Beer.create = (title, year, rated, plot, poster) => {
  return db.one(
    `INSERT INTO beers (title, year, rated, plot, poster) VALUES ($1, $2, $3, $4, $5) returning id`,
    [title, year, rated, plot, poster]
  );
}

Beer.delete = (id) => {
  return db.none(
    `DELETE FROM beers WHERE id = $1`,
    [id]
  );
}

module.exports = Beer
