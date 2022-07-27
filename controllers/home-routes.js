const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models')

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  User.findAll({
  })
    .then(dbUserData => {
      res.render('homepage');
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
