const { Entry } = require("../models");

const entrydata = [
  //entry seeds go here

  {
    entry_title: "BLANK",
    entry_text: "BLANK",
  },
];

const seedEntries = () => Entry.bulkCreate(entrydata);

module.exports = seedEntries;
