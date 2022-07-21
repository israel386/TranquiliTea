const { Affirmations } = require("../models");

const AffirmationsData = [
  {
    affirmation_phrase: "I am capable.",
  },
  {
    affirmation_phrase:
      "I am in the right place at the right time, doing the right thing.",
  },
  {
    affirmation_phrase: "Conscious breathing is my anchor.",
  },
  {
    affirmation_phrase: "I believe in my dreams, myself, and all that I am.",
  },
  {
    affirmation_phrase: "My life is filled with abundance of goodness.",
  },
  {
    affirmation_phrase: "My challenges are actually opportunities",
  },
  {
    affirmation_phrase: "I am superior to negative thoughts and low actions.",
  },
  {
    affirmation_phrase:
      "My body is healthy; my mind is brilliant; my soul is tranquil.",
  },
  {
    affirmation_phrase:
      "I possess the qualities needed to be extremely successful.",
  },
  {
    affirmation_phrase:
      "Creative energy surges through me and leads me to new and brilliant ideas.",
  },
  {
    affirmation_phrase: "I am courageous and I stand up for myself.",
  },
  {
    affirmation_phrase: "I am a powerhouse; I am indestructible.",
  },
  {
    affirmation_phrase: "I radiate beauty, charm, and grace.",
  },
  {
    affirmation_phrase:
      "I wake up today with strength in my heart and clarity in my mind.",
  },
];

const seedAffirmations = () => Affirmations.bulkCreate(AffirmationsData);

module.exports = seedAffirmations;
