const { Quotes } = require("../models");

const QuotesData = [
    {
        quote: "Extraordinary things are always hiding in places people never think to look.",
        by: "Jodi Picoul",
        mood: "1",
      },
      {
        quote: "Setting goals is the first step in turning the invisible into the visible.",
        by: "Tony Robbins",
        mood: "1",
      },
      {
        quote: "Choose to be optimistic, it feels better.",
        by: "Dalai Lama",
        mood: "1",
      },
      {
        quote: "You can have it all. Just not all at once.",
        by: "Oprah Winfrey",
        mood: "1",
      },
      {
        quote: "I dwell in possibility.",
        by: "Emily Dickinson",
        mood: "1",
      },
      {
        quote: "A No. 2 pencil and a dream can take you anywhere.",
        by: "Joyce Meyer",
        mood: "2",
      },
      {
        quote: "You do not find the happy life. You make it.",
        by: "Thomas S. Monson",
        mood: "2",
      },
      {
        quote: "The most wasted of days is one without laughter.",
        by: "E. E. Cummings",
        mood: "2",
      },
      {
        quote: "The joy of life is becoming a person you are proud of.",
        by: "Bill Orender",
        mood: "2"
      },
      {
        quote: "To win big, you sometimes have to take big risks.",
        by: "Bill Gates",
        mood: "2",
      },
      {
        quote: "Try to be a rainbow in someone’s cloud.",
        by: "Maya Angelou",
        mood: "3",
      },
      {
        quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
        by: "Ralph Waldo Emerson",
        mood: "3",
      },
      {
        quote: "Think and wonder. Wonder and think.",
        by: "Dr. Suess",
        mood: "3"
      },
      {
        quote: "No act of kindness, no matter how small, is ever wasted.",
        by: "Aesop",
        mood: "3",
      },
      {
        quote: "The power of imagination makes us infinite.",
        by: "John Muir",
        mood: "3",
      },
      {
        quote: "No matter what people tell you, words and ideas can change the world.",
        by: "Robin Williams",
        mood: "4"
      },
      {
        quote: "Salvation lies within.",
        by: "Warden Samuel Norton",
        mood: "4"
      },
      {
        quote: "Jump in with both feet and be brave",
        by: "Jump in with both feet and be brave",
        mood: "4"
      },
      {
        quote: "Today is a good day to try.",
        by: "Quasimodo, The Hunchback of Notre Dame",
        mood:"4"
      },
      {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        by: "Walt Whitman",
        mood: "4",
      }
];

//connect to index.js in models folder
const seedQuotes = () => Quotes.bulkCreate(QuotesData);

module.exports = seedQuotes;

