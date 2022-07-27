const router = require("express").Router();
const affirmationsRoutes = require("./affirmations-routes");
const quotesRoutes = require("./quotes-routes");
const teasRoutes = require("./teas-routes");
const userRoutes = require("./user-routes")

router.use("/affirmations", affirmationsRoutes);
router.use("/quotes", quotesRoutes);
router.use("/teas", teasRoutes);
router.use("/user", userRoutes);

module.exports = router;
