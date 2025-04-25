const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed To Connect");
  });

// design Book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  date: String,
  image: String,
});
//design model
const Book = mongoose.model("MyBook", BookSchema);

app.post("/books", async (req, res) => {
  try {
    const newbook = new Book(req.body);
    await newbook.save();
    res.status(200).send("Book Added");
  } catch {
    res.status(500).send("Server Error");
  }
});

app.get("/books", async (req, res) => {
  try {
    const Books = await Book.find();
    res.json(Books);
  } catch (error) {
    console.log(error);
    res.status(500).send("server Error");
  }
});

app.get("/search", async (req, res) => {
  const { title } = req.query;
  try {
    const books = await Book.find({ title: { $regex: title, $options: "i" } });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send("Book not found");
    res.send("Book deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
