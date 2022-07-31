const { Entry } = require("../models");

const entrydata = [
  //entry seeds go here
];

const seedEntries = () => Entry.bulkCreate(entrydata);

module.exports = seedEntries;
