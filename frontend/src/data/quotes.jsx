const productivityQuotes = [
  {
    quote:
      "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
    author: "Paul J. Meyer",
  },
  {
    quote:
      "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    author: "Stephen R. Covey",
  },
  {
    quote:
      "You don't have to see the whole staircase, just take the first step.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
  },
  {
    quote:
      "Efficiency is doing things right. Effectiveness is doing the right things.",
    author: "Peter Drucker",
  },
  {
    quote: "Small deeds done are better than great deeds planned.",
    author: "Peter Marshall",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "The most effective way to do it, is to do it.",
    author: "Amelia Earhart",
  },
  {
    quote: "Done is better than perfect.",
    author: "Sheryl Sandberg",
  },
  {
    quote:
      "Productivity is less about what you do with your time and more about how you run your mind.",
    author: "Robin Sharma",
  },
  {
    quote:
      "The shorter way to do many things is to do only one thing at a time.",
    author: "Mozart",
  },
  {
    quote: "You may delay, but time will not.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Plans are nothing; planning is everything.",
    author: "Dwight D. Eisenhower",
  },
];

// Function to get a random quote
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * productivityQuotes.length);
  return productivityQuotes[randomIndex];
};

// Export all quotes if needed
export default productivityQuotes;
