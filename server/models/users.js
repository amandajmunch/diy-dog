const db = require('../config/db');

const User = {};

User.findAll = () => db.manyOrNone('SELECT * FROM users');

// creates a new user
User.create = (name,email,accessToken) => {
  // const accessToken = bcrypt.hashSync(user.accessToken, 10);
  return db.oneOrNone(`
    INSERT INTO users
    (name, email, accessToken)
    VALUES
    ($1, $2, $3)
    RETURNING *;`,
    [name, email, accessToken]
  );
};

// finds a user by their email
User.findByEmail = (email) => {
  return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE email = $1;`,
    [email]
  );
};

module.exports = User;
