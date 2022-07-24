const router = require("express").Router(); 
const { Teas } = require("../../models"); 

//get all teas and associated moods
router.get("/", (req, res) => {
    Teas.findAll({
      teas: ["id", "tea_type", "benefits"],
    })
      .then((teaData) => res.json(teaData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //find one tea
  router.get("/:id", (req, res) => {
    Teas.findOne({
      // find tea based on mood
      where: {
        id: req.params.id,
      },
      attributes: ["id", "tea_type", "benefits"],
    })
      .then((teaData) => {
        if (!teaData) {
          res
            .status(404)
            .json({ message: "No tea found with this mood" });
          return;
        }
        res.json(TeasData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //create a tea
  router.post("/", (req, res) => {
    // create a new Teas
    Teas.create({
      tea_type: req.body.tea_type,
    })
      .then((TeaData) => res.json(TeaData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //update a tea
  router.put("/:id", (req, res) => {
    Teas.update(
      {
        tea_type: req.body.tea_type,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((teaData) => {
        if (!teaData) {
          res.status(404).json({ message: "No tea found with this id" });
          return;
        }
        res.json(teaData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  //delete a affirmation
  
  router.delete("/:id", (req, res) => {
    // delete a Teas by its `id` value
    Teas.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((TeaData) => {
        if (!TeaData) {
          res.status(404).json({ message: "No Teas found with this id" });
          return;
        }
        res.json(TeaData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;
  