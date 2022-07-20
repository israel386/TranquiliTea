const seedAffirmations = require("./affirmations-seeds");
const seedQuotes = require("./quotes-seed");
const seedTeas = require("./teas-seeds")

const sequelize = require("../config/connection");


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedAffirmations();
  console.log("\n----- AFFIRMATIONS SEEDED -----\n");
  await seedQuotes();
  console.log("\n----- QUOTES SEEDED -----\n");
  await seedTeas();
  console.log("\n----- TEAS SEEDED -----\n");

  process.exit(0);
};

seedAll();
