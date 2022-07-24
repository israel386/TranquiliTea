const router = require("express").Router();
const { Quotes } = require("../../models");

//get all quotes and associated moods
router.get("/", (req, res) => {
  Quotes.findAll({
    attributes: ["id", "quote", "by"],
  })
    .then((quotesData) => res.json(quotesData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find one quote
router.get("/:id", (req, res) => {
  Quotes.findOne({
    // find quotes based on mood
    where: {
      id: req.params.id,
    },
    attributes: ["id", "quote"],
  })
    .then((quotesData) => {
      if (!quotesData) {
        res
          .status(404)
          .json({ message: "No quotes found with this mood" });
        return;
      }
      res.json(QuotesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a quotes
router.post("/", (req, res) => {
  // create a new Quotes
  Quotes.create({
    quote: req.body.quote,
  })
    .then((QuotesData) => res.json(QuotesData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a quotes
router.put("/:id", (req, res) => {
  Quotes.update(
    {
      quote: req.body.quote,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((quotesData) => {
      if (!quotesData) {
        res.status(404).json({ message: "No quotes found with this id" });
        return;
      }
      res.json(quotesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a quotes

router.delete("/:id", (req, res) => {
  // delete a Quotes by its `id` value
  Quotes.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((QuotesData) => {
      if (!QuotesData) {
        res.status(404).json({ message: "No Quotes found with this id" });
        return;
      }
      res.json(QuotesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
