const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));


const jokes = [

  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "How does a penguin build its house? Igloos it together!",
  "What did one plate say to the other plate? Dinner's on me!",
  "What do you call fake spaghetti? An impasta!",
  "Why did the coffee file a police report? It got mugged!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised!",
  "I'm reading a book on the history of glue. I just can't seem to put it down!",
  "What do you call a man with a rubber toe? Roberto!",
  "Why did the old man fall in the well? Because he couldn't see that well!",
  "What do you call an alligator in a vest? An in-vest-igator!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why couldn't the bicycle stand up by itself? It was two tired!",
  "Why did the math book look sad? Because it had too many problems!",
  "What did one ocean say to the other ocean? Nothing, they just waved!",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "Why don't eggs tell jokes? Because they might crack up!"
];

app.get("/jokes", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

app.get("/test", (req, res) => {
  console.log("hello");
  res.send("Test endpoint reached!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
