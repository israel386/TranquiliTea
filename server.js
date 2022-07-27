<<<<<<< HEAD
const express = require('express');
const routes = require('./controllers');
// imported sequelize from connection.js file 
const session = require('express-session');
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars")
const path = require("path")
const helpers = require("./utils/helpers")
const SequelizeStore = require('connect-session-sequelize')(session.Store);


=======
const path = require("path");
const exphbs = require("express-handlebars");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
<<<<<<< HEAD
  secret: 'Super secret secret',
=======
  secret: "Super secret secret",
>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
<<<<<<< HEAD
    db: sequelize
  })
};

app.use(session(sess));

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))
=======
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//connecting the public files (html and css)
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3
app.use(routes);
// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
