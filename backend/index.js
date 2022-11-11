const express = require("express"); //for install => npm i express
const notes = require("./data/notes");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Listening on port ${8000}!`));

app.get("/api/test", (req, res) => res.send({ message: "Hello" }));

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((item) => item._id === req.params.id);
  res.send(note);
});
