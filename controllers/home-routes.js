const router = require('express').Router();
const { Model } = require('sequelize/types');
const sequelioze = require('../config/connection');

router.get('/', (req, res) => {

    res.render('homepage'
    );
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;

    }

    res.render('login');
});

module.exports = router;