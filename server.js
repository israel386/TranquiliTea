const express = require('express');
const routes = require('./controllers');
// imported sequelize from connection.js file 
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars")
const path = require("path")
const helpers = require("./utils/helpers")


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
const hbs = exphbs.create({ helpers })
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", hbs.engine)
app.use(routes);
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "handlebars")
// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});