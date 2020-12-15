const { Author } = require("../models/authors.models")

console.log("in Controllers for the authors :)")

//I do not think we need this
module.exports.findAllAuthors = (req,res) => {
    Author.find().sort({name:1})
    .then(allAuthors => res.json({author: allAuthors}))
}

module.exports.createAuthor = (req, res) => {
    const {name} = req.body
    Author.create({
        name
    })
    .then ( author => res.json(author))
    .catch( err => res.json(err))
}

module.exports.viewAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneAuthor => res.json({author: oneAuthor}))
    .catch(err=>res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({_id: req.params._id}, req.body, {new: true ,runValidators:true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err=>res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params._id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
    // .then(deletedProduct => res.json(deletedProduct))
    // .catch(err=>res.json(err))
}