const router = require("express").Router();
const affirmationsRoutes = require("./affirmations-routes");
const quotesRoutes = require("./quotes-routes");
const teasRoutes = require("./teas-routes");
<<<<<<< HEAD
const userRoutes = require("./user-routes")
=======
const entryRoutes = require("./entry-routes");
const userRouted = require("./user-routes");
>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3

router.use("/affirmations", affirmationsRoutes);
router.use("/quotes", quotesRoutes);
router.use("/teas", teasRoutes);
<<<<<<< HEAD
router.use("/user", userRoutes);
=======
router.use("/entry", entryRoutes);
router.use("/user", userRouted);
>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3

module.exports = router;
