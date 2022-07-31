const { Quotes } = require("../models");

const QuotesData = [
    {
        quote: "Extraordinary things are always hiding in places people never think to look.",
        by: "BY: Jodi Picoul",
        mood: "1",
      },
      {
        quote: "Setting goals is the first step in turning the invisible into the visible.",
        by: "BY: Tony Robbins",
        mood: "1",
      },
      {
        quote: "Choose to be optimistic, it feels better.",
        by: "BY: Dalai Lama",
        mood: "1",
      },
      {
        quote: "You can have it all. Just not all at once.",
        by: "BY: Oprah Winfrey",
        mood: "1",
      },
      {
        quote: "I dwell in possibility.",
        by: "BY: Emily Dickinson",
        mood: "1",
      },
      {
        quote: "A No. 2 pencil and a dream can take you anywhere.",
        by: "BY: Joyce Meyer",
        mood: "2",
      },
      {
        quote: "You do not find the happy life. You make it.",
        by: "BY: Thomas S. Monson",
        mood: "2",
      },
      {
        quote: "The most wasted of days is one without laughter.",
        by: "BY: E. E. Cummings",
        mood: "2",
      },
      {
        quote: "The joy of life is becoming a person you are proud of.",
        by: "BY: Bill Orender",
        mood: "2"
      },
      {
        quote: "To win big, you sometimes have to take big risks.",
        by: "BY: Bill Gates",
        mood: "2",
      },
      {
        quote: "Try to be a rainbow in someone’s cloud.",
        by: "BY: Maya Angelou",
        mood: "3",
      },
      {
        quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
        by: "BY: Ralph Waldo Emerson",
        mood: "3",
      },
      {
        quote: "Think and wonder. Wonder and think.",
        by: "BY: Dr. Suess",
        mood: "3"
      },
      {
        quote: "No act of kindness, no matter how small, is ever wasted.",
        by: "BY: Aesop",
        mood: "3",
      },
      {
        quote: "The power of imagination makes us infinite.",
        by: "BY: John Muir",
        mood: "3",
      },
      {
        quote: "No matter what people tell you, words and ideas can change the world.",
        by: "BY: Robin Williams",
        mood: "4"
      },
      {
        quote: "Salvation lies within.",
        by: "BY:Warden Samuel Norton",
        mood: "4"
      },
      {
        quote: "Jump in with both feet and be brave",
        by: "BY: Unkown",
        mood: "4"
      },
      {
        quote: "Today is a good day to try.",
        by: "BY: Quasimodo, The Hunchback of Notre Dame",
        mood:"4"
      },
      {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        by: "BY: Walt Whitman",
        mood: "4",
      }
];

//connect to index.js in models folder
const seedQuotes = () => Quotes.bulkCreate(QuotesData);

module.exports = seedQuotes;

