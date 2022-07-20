const { Quotes } = require("../models");

const QuotesData = [
    {
        quote: "Extraordinary things are always hiding in places people never think to look.",
        by: "Jodi Picoul",
      },
      {
        quote: "Setting goals is the first step in turning the invisible into the visible.",
        by: "Tony Robbins",
      },
      {
        quote: "You can have it all. Just not all at once.",
        by: "Oprah Winfrey",
      },
      {
        quote: "I dwell in possibility.",
        by: "Emily Dickinson",
      },
      {
        quote: "A No. 2 pencil and a dream can take you anywhere.",
        by: "Joyce Meyer",
      },
      {
        quote: "You do not find the happy life. You make it.",
        by: "Thomas S. Monson",
      },
      {
        quote: "The most wasted of days is one without laughter.",
        by: "E. E. Cummings",
      },
      {
        quote: "To win big, you sometimes have to take big risks.",
        by: "Bill Gates",
      },
      {
        quote: "Try to be a rainbow in someone’s cloud.",
        by: "Maya Angelou",
      },
      {
        quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
        by: "Ralph Waldo Emerson",
      },
      {
        quote: "Think and wonder. Wonder and think.",
        by: "Dr. Suess",
      },
      {
        quote: "No act of kindness, no matter how small, is ever wasted.",
        by: "Aesop",
      },
      {
        quote: "No matter what people tell you, words and ideas can change the world.",
        by: "Robin Williams",
      },
      {
        quote: "Salvation lies within.",
        by: "Warden Samuel Norton",
      },
      {
        quote: "Jump in with both feet and be brave",
        by: "Jump in with both feet and be brave",
      },
      {
        quote: "Today is a good day to try.",
        by: "Quasimodo, The Hunchback of Notre Dame",
      },
      {
        quote: "Choose to be optimistic, it feels better.",
        by: "Dalai Lama",
      },
      {
        quote: "The joy of life is becoming a person you are proud of.",
        by: "Bill Orender",
      },
      {
        quote: "The power of imagination makes us infinite.",
        by: "John Muir",
      },
];

//connect to index.js in models folder
const seedQuotes = () => Quotes.bulkCreate(QuotesData);

module.exports = seedQuotes;

