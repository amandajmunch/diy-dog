const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://amandamunch@localhost:5432/beer_db');

module.exports = db;
