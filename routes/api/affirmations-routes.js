const router = require("express").Router();
const { Affirmations } = require("../../models");

//get all affirmations and associated moods
router.get("/", (req, res) => {
  Affirmations.findAll({
    attributes: ["id", "affirmation_phrase"],
  })
    .then((affirmationData) => res.json(affirmationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//find one affirmation
router.get("/:id", (req, res) => {
  Affirmations.findOne({
    // find affirmation based on mood
    where: {
      id: req.params.id,
    },
    attributes: ["id", "affirmation_phrase"],
  })
    .then((affirmationData) => {
      if (!affirmationData) {
        res
          .status(404)
          .json({ message: "No affirmation found with this mood" });
        return;
      }
      res.json(AffirmationsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create a affirmation
router.post("/", (req, res) => {
  // create a new Affirmations
  Affirmations.create({
    affirmation_phrase: req.body.affirmation_phrase,
  })
    .then((AffirmationsData) => res.json(AffirmationsData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update a affirmation
router.put("/:id", (req, res) => {
  Affirmations.update(
    {
      affirmation_phrase: req.body.affirmation_phrase,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((affirmationData) => {
      if (!affirmationData) {
        res.status(404).json({ message: "No affirmation found with this id" });
        return;
      }
      res.json(affirmationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//delete a affirmation

router.delete("/:id", (req, res) => {
  // delete a Affirmations by its `id` value
  Affirmations.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((AffirmationsData) => {
      if (!AffirmationsData) {
        res.status(404).json({ message: "No Affirmations found with this id" });
        return;
      }
      res.json(AffirmationsData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
