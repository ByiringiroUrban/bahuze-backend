const db = require('../config/db');

const User = {
  create: (user, callback) => {
    const { names, email, tel, password } = user;
    const sql = 'INSERT INTO users (names, email, tel, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [names, email, tel, password], callback);
  },

  findByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  },
};

module.exports = User;
