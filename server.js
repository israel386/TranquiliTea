//stylesheets
const path = require("path");

//importing handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const express = require("express");
const routes = require("./controllers/");
// imported sequelize from connection.js file
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connecting the public files (html and css)
app.use(express.static(path.join(__dirname, "public")));

//handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
