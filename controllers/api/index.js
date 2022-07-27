const router = require("express").Router();
const affirmationsRoutes = require("./affirmations-routes");
const quotesRoutes = require("./quotes-routes");
const teasRoutes = require("./teas-routes");
const entryRoutes = require("./entry-routes");
const userRouted = require("./user-routes");

router.use("/affirmations", affirmationsRoutes);
router.use("/quotes", quotesRoutes);
router.use("/teas", teasRoutes);
router.use("/entry", entryRoutes);
router.use("/user", userRouted);

module.exports = router;
