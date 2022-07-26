const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Entry } = require("../../models");

// get all entries
router.get("/", (req, res) => {
  console.log("======================");
  Entry.findAll({
    attributes: ["id", "entry_title", "entry_text", "created_at"],

    order: [["created_at", "DESC"]],
  })
    .then((EntryData) => res.json(EntryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get a single entry
router.get("/:id", (req, res) => {
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
      res.json(EntryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//create an entry
router.post("/", (req, res) => {
  Entry.create({
    entry_title: req.body.entry_title,
    entry_text: req.body.entry_text,
  })
    .then((EntryData) => res.json(EntryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//update an entry
router.put("/:id", (req, res) => {
  Entry.update(
    {
      entry_title: req.body.entry_title,
      entry_text: req.body.entry_text,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((EntryData) => {
      if (!EntryData) {
        res.status(404).json({ message: "Entry not found" });
        return;
      }
      res.json(EntryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Delete entry
router.delete("/:id", (req, res) => {
  Entry.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((EntryData) => {
      if (!EntryData) {
        res.status(404).json({ message: "Entry not found" });
        return;
      }
      res.json(EntryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
