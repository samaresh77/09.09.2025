const User = require('../models/userModel');

exports.getUsers = (req, res) => {
  const users = User.getAllUsers();
  res.render('index', { users });
};
