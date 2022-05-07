const book = require('../models/book.model');

const findAllBooks = (req, res) => {
    book.find()
        .then((books) => {
            res.json({ books })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

const findOneSingleBook = (req, res) => {
    book.findOne({ _id: req.params.id })
        .then(oneSingleBook => {
            res.json({ oneSingleBook })
            // remove "book: causing issues with obj"
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const createNewBook = (req, res) => {
    book.create(req.body)
        .then(newlyCreatedbook => {
            res.json({ newlyCreatedbook })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const updateBook = (req, res) => {
    book.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedbook => {
            res.json({ updatedbook })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

const deleteBook = (req, res) => {
    book.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports = {
    findAllBooks,
    findOneSingleBook,
    createNewBook,
    updateBook,
    deleteBook,
}