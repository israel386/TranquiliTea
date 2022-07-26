const router = require("express").Router();

// connects the models
//const sequelize = require("../config/connection");
const { Affirmations, Quotes, Teas } = require("../models");

router.get("/", (req, res) => {
  Affirmations.findAll({
    attributes: ["id", "affirmation_phrase", "mood"],
  })
    .then((AffirmationsData) => {
      // pass a single post object into the homepage template
      const affirmations = AffirmationsData.map((affirmations) =>
        affirmations.get({ plain: true })
      );

      Quotes.findAll({
        attributes: ["quote", "by"],
      }).then((QuotesData) => {
        // pass a single post object into the homepage template
        const quotes = QuotesData.map((quotes) => quotes.get({ plain: true }));

        //teas
        Teas.findAll({
          attributes: ["tea_type", "benefits"],
        }).then((TeasData) => {
          // pass a single post object into the homepage template
          const teas = TeasData.map((teas) => teas.get({ plain: true }));

          console.log(quotes);
          res.render("homepage", { affirmations, quotes, teas });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
