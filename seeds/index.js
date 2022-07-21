const seedAffirmations = require("./affirmations-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedAffirmations();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  process.exit(0);
};

seedAll();
