const { Affirmations } = require("../models");

const AffirmationsData = [
  {
    affirmation_phrase: "I am capable.",
    mood: "1",
  },
  {
    affirmation_phrase:
      "I am in the right place at the right time, doing the right thing.",
      mood: "1",
  },
  {
    affirmation_phrase: "Conscious breathing is my anchor.",
    mood: "1",
  },
  {
    affirmation_phrase: "I believe in my dreams, myself, and all that I am.",
    mood: "1",
  },
  {
    affirmation_phrase: "My life is filled with abundance of goodness.",
    mood: "1",
  },
  {
    affirmation_phrase: "My challenges are actually opportunities",
    mood: "1",
  },
  {
    affirmation_phrase: "I am superior to negative thoughts and low actions.",
    mood: "2",
  },
  {
    affirmation_phrase:
      "My body is healthy; my mind is brilliant; my soul is tranquil.",
      mood: "2",
  },
  {
    affirmation_phrase:
      "I possess the qualities needed to be extremely successful.",
      mood: "2",
  },
  {
    affirmation_phrase:
      "Creative energy surges through me and leads me to new and brilliant ideas.",
      mood: "2",
  },
  {
    affirmation_phrase: "I am courageous and I stand up for myself.",
    mood: "2",

  },
  {
    affirmation_phrase: "I am a powerhouse; I am indestructible.",
    mood: "2",
  },
  {
    affirmation_phrase: "I radiate beauty, charm, and grace.",
    mood: "3",
  },
  {
    affirmation_phrase:
      "I wake up today with strength in my heart and clarity in my mind.",
      mood: "3",
  },
  {
    affirmation_phrase: "I am love. I am purpose. I was made with divine intention. ",
      mood: "3",
  },
  {
    affirmation_phrase: "I can. I will. End of story.",
      mood: "3",
  },
  {
    affirmation_phrase: "I am in charge of my life. ",
      mood: "3",
  },
  {
    affirmation_phrase: "I am worthy. I am loved. I am enough.",
      mood: "3",
  },
  {
    affirmation_phrase: "I am my light.",
      mood: "4",
  },
  {
    affirmation_phrase: "I have the power to create change",
      mood: "4",
  },
  {
    affirmation_phrase: "I believe in the good things coming.",
      mood: "4",
  },
  {
    affirmation_phrase: "I am resilient and can get through anything.",
      mood: "4",
  },
  {
    affirmation_phrase: "I am not pushed by my problems; I am led by my dreams.",
      mood: "4",
  },
  {
    affirmation_phrase: "I use obstacles to motivate me to learn and grow.",
      mood: "4",
  },

];

const seedAffirmations = () => Affirmations.bulkCreate(AffirmationsData);

module.exports = seedAffirmations;
