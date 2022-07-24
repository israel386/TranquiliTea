const router = require("express").Router();
const homeRoutes = require("./home-routes.js");

const apiRoutes = require("./api");

router.use("/", homeRoutes);

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
