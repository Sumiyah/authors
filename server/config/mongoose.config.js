console.log("In config file!")

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:IBqlCFztyiR6fdg7@cluster0.6bian.mongodb.net//authors_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => {
    console.log("We have a connection to our database!!!!!")
})
.catch( err => {
    console.log("There was an error creating the database :( !!!!", err)
})