const router = require("express").Router();
const sequelize = require("../config/connection");

// connects the models
//const sequelize = require("../config/connection");
const { Affirmations, Quotes, Teas, Entry, User } = require("../models");

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

          //entries
          Entry.findAll({
            attributes: ["entry_title", "entry_text", "created_at"],
          }).then((EntriesData) => {
            // pass a single post object into the homepage template
            const entry = EntriesData.map((entry) =>
              entry.get({ plain: true })
            );

            console.log(quotes);
            res.render("homepage", { affirmations, quotes, teas, entry });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//single entry
router.get("/entries", (req, res) => {
  Entry.findAll({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "entry_title", "entry_text", "created_at"],
  })
    .then((EntryData) => {
      if (!EntryData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const entry = EntryData.get({ plain: true });

      // pass data to template
      res.render("entries", { entry });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//single entry
router.get("/entry/:id", (req, res) => {
  Entry.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "entry_title", "entry_text", "created_at"],
  })
    .then((EntryData) => {
      if (!EntryData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const entry = EntryData.get({ plain: true });

      // pass data to template
      res.render("entry", { entry });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // user
// router.get('/', (req, res) => {
//   console.log('======================');
//   User.findAll({
//   })
//     .then(dbUserData => {
//       res.render('login');
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
