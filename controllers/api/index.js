const router = require("express").Router();
const affirmationsRoutes = require("./affirmations-routes");

router.use("/affirmations", affirmationsRoutes);

module.exports = router;
