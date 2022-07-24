const { Affirmations } = require("../models");

const AffirmationsData = [
  {
    affirmation_phrase: "I am capable.",
    mood: "anxious",
  },
  {
    affirmation_phrase:
      "I am in the right place at the right time, doing the right thing.",
      mood: "anxious",
  },
  {
    affirmation_phrase: "Conscious breathing is my anchor.",
    mood: "calm",
  },
  {
    affirmation_phrase: "I believe in my dreams, myself, and all that I am.",
    mood: "anxious",
  },
  {
    affirmation_phrase: "My life is filled with abundance of goodness.",
    mood: "happy",
  },
  {
    affirmation_phrase: "My challenges are actually opportunities",
    mood: "anxious",
  },
  {
    affirmation_phrase: "I am superior to negative thoughts and low actions.",
    mood: "anxious",
  },
  {
    affirmation_phrase:
      "My body is healthy; my mind is brilliant; my soul is tranquil.",
      mood: "happy",
  },
  {
    affirmation_phrase:
      "I possess the qualities needed to be extremely successful.",
      mood: "happy",
  },
  {
    affirmation_phrase:
      "Creative energy surges through me and leads me to new and brilliant ideas.",
      mood: "happy",
  },
  {
    affirmation_phrase: "I am courageous and I stand up for myself.",
    mood: "angry",

  },
  {
    affirmation_phrase: "I am a powerhouse; I am indestructible.",
    mood: "sad",
  },
  {
    affirmation_phrase: "I radiate beauty, charm, and grace.",
    mood: "sad",
  },
  {
    affirmation_phrase:
      "I wake up today with strength in my heart and clarity in my mind.",
      mood: "sad",
  },
];

const seedAffirmations = () => Affirmations.bulkCreate(AffirmationsData);

module.exports = seedAffirmations;
