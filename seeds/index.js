const seedAffirmations = require("./affirmations-seeds");
const seedQuotes = require("./quotes-seed");

const sequelize = require("../config/connection");


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedAffirmations();
  console.log("\n----- AFFIRMATIONS SEEDED -----\n");
  await seedQuotes();
  console.log("\n----- QUOTES SEEDED -----\n");

  process.exit(0);
};

seedAll();
