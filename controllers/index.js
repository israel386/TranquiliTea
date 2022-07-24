const router = require('express').Router();
const apiRoutes = require('./api');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');

=======
const homeRoutes = require('./home-routes.js')
>>>>>>> phil-css-dev

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use("/", homeRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;