const router = require("express").Router();
const { User } = require("../../models");

// get all users
router.get("/", (req, res) => {
  User.findAll({
    //leaves password out when get.
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.post('/', (req, res) => {

=======
router.post("/", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
>>>>>>> 7a912de0a7f991f4a4fadb647e3060a855679268
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

<<<<<<< HEAD
router.post('/login', (req, res) => {

=======
router.post("/login", (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  console.log("TEST");
>>>>>>> 7a912de0a7f991f4a4fadb647e3060a855679268
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    console.log(dbUserData);
    if (!dbUserData) {
<<<<<<< HEAD
      res.status(400).json({ message: 'User information not valid' });
=======
      res.status(400).json({ message: "No user with that email address!" });
>>>>>>> 7a912de0a7f991f4a4fadb647e3060a855679268
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
<<<<<<< HEAD
      res.status(400).json({ message: 'User information not valid!' });
=======
      res.status(400).json({ message: "Incorrect password!" });
>>>>>>> 7a912de0a7f991f4a4fadb647e3060a855679268
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put("/:id", (req, res) => {
  // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

  // pass in req.body instead to only update what's passed through
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
<<<<<<< HEAD
        res.status(404).json({ message: 'User information not valid' });
=======
        res.status(404).json({ message: "No user found with this id" });
>>>>>>> 7a912de0a7f991f4a4fadb647e3060a855679268
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
<<<<<<< HEAD
        res.status(404).json({ message: 'User information not valid' });
=======
        res.status(404).json({ message: "No user found with this id" });
>>>>>>> 7a912de0a7f991f4a4fadb647e3060a855679268
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
