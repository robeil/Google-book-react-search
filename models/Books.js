const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  onlineId:  {
    type: String,
    unique: true,
    required: true
  },
  volumeInfo: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        canonicalVolumeLink: {
            type: String,
            required: true
        },
        imageLinks: {
            smallThumbnail: {
                type: String,
                required: true
            }
        }
    },
});

const BooksCollection = mongoose.model("BooksCollection", BooksSchema);

module.exports = BooksCollection;