const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String },
  authors: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  infolink: { type: String, required: true },
  thumbnail: { type: Object, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
