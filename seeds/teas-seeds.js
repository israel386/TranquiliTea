const { Teas } = require("../models");

const TeasData = [
      {
        tea_type: "Yerba Green tea",
        benefits: "energy boost & staying focused ",
      },
      {
        tea_type: "Valerian tea",
        benefits: "calms your mind and nerves",
      },
      {
        tea_type: "Ginger tea",
        benefits: "Helps relax the mind and body",
      },
      {
        tea_type: "Lemongrass tea",
        benefits: "reduces anxiety and stress levels",
      },
      {
        tea_type: "Rooibos tea",
        benefits: "mood boosting tea that also helps lower stress levels",
      },
      {
        tea_type: "Turmeric tea",
        benefits: "increases the production of dopamine and serotonin levels",
      },
      {
        tea_type: "Chamomile tea",
        benefits: "reduces stress levels and helps induce sleep",
      },
      {
        tea_type: "Pepermint tea",
        benefits: "reduces stress levels",
      },
];

//connect to index.js in models folder
const seedTeas = () => Teas.bulkCreate(TeasData);

module.exports = seedTeas;

