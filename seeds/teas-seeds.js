const { Teas } = require("../models");

const TeasData = [
      {
        tea_type: "Yerba Green tea",
        benefits: "BENEFITS: energy boost & staying focused ",
      },
      {
        tea_type: "Valerian tea",
        benefits: "BENEFITS: calms your mind and nerves",
      },
      {
        tea_type: "Ginger tea",
        benefits: "BENEFITS: helps relax the mind and body",
      },
      {
        tea_type: "Lemongrass tea",
        benefits: "BENEFITS: reduces anxiety and stress levels",
      },
      {
        tea_type: "Rooibos tea",
        benefits: "BENEFITS: mood boosting tea that also helps lower stress levels",
      },
      {
        tea_type: "Turmeric tea",
        benefits: "BENEFITS: increases the production of dopamine and serotonin levels",
      },
      {
        tea_type: "Chamomile tea",
        benefits: "BENEFITS: reduces stress levels and helps induce sleep",
      },
      {
        tea_type: "Pepermint tea",
        benefits: "BENEFITS: reduces stress levels",
      },
];

//connect to index.js in models folder
const seedTeas = () => Teas.bulkCreate(TeasData);

module.exports = seedTeas;

