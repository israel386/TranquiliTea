const router = require("express").Router();
const affirmationsRoutes = require("./affirmations-routes");
const quotesRoutes = require("./quotes-routes");
const teasRoutes = require("./teas-routes");

router.use("/affirmations", affirmationsRoutes);
router.use("/quotes", quotesRoutes);
router.use("/teas", teasRoutes);

module.exports = router;
