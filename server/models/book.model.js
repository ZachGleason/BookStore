const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        maxlength: [50, "Book Length is over 50 characters!"],
        },
    author: {
        type: String,
        required: [true, "Author is required!"],
        maxlength: [40, "Author Length is over 40 characters!"],
        },
    genre: {
        type: String,
        enum: ["Fiction", "Nonfiction", "Drama", "Poetry", "Folktale"],
        default: "Fiction",
        },
    description: {
        type: String,
        maxlength: [100, "Book Description over 100 characters!"],
    },
    price: {
        type: Number,
    },
    },
    { timestamps: true }
    );

    module.exports = mongoose.model("Book", BookSchema);