const seedAffirmations = require("./affirmations-seeds");
const seedQuotes = require("./quotes-seed");
<<<<<<< HEAD
const seedTeas = require("./teas-seeds")

const sequelize = require("../config/connection");


=======
const seedTeas = require("./teas-seeds");
const seedEntries = require("./entry-seeds");

const sequelize = require("../config/connection");

>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedAffirmations();
  console.log("\n----- AFFIRMATIONS SEEDED -----\n");
  await seedQuotes();
  console.log("\n----- QUOTES SEEDED -----\n");
  await seedTeas();
  console.log("\n----- TEAS SEEDED -----\n");
<<<<<<< HEAD
=======
  await seedEntries();
  console.log("\n----- ENTRIES SEEDED -----\n");
>>>>>>> 3c058fb906e51c30079deec08d0129e4107db9a3

  process.exit(0);
};

seedAll();
