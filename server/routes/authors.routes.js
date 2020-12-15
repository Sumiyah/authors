const { createAuthor, findAllAuthors, viewAuthor, updateAuthor, deleteAuthor } = require("../controllers/authors.controller")

console.log(" -> In ROUTES <- ")

module.exports = function (app){
    app.get('/api/authors', findAllAuthors)
    app.get('/api/authors/:id', viewAuthor)
    app.post('/api/authors/new', createAuthor)
    app.put('/api/authors/update/:_id', updateAuthor)
    app.delete('/api/authors/delete/:_id', deleteAuthor)
}