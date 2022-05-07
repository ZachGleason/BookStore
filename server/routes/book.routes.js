const BookRoutes = require('../controllers/book.controller');

module.exports = (app) => {
    app.get('/api/books', BookRoutes.findAllBooks)
    app.get('/api/book', BookRoutes.findOneSingleBook)
    app.put('/api/book', BookRoutes.updateBook)
    app.post('/api/book', BookRoutes.createNewBook)
    app.delete('/api/book/:id', BookRoutes.deleteBook)
}