const router = require("express").Router();
const { Entry } = require("../../models");
const withAuth = require('../../utils/auth');

// get all entries

router.get("/", (req, res) => {
  Entry.findAll({
    where: {
      user_id: req.session.user_id
    },
    teas: ["id", "entry_title", "entry_text", "created_at"],
    order: [["created_at", "DESC"]],
  })
    .then((entrydata) => res.json(entrydata))
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

//create an entry
router.post("/", withAuth, (req, res) => {
  Entry.create({
    entry_title: req.body.entry_title,
    entry_text: req.body.entry_text,
    user_id: req.session.user_id
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
