console.log("In server.js")

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000

require('./config/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
require('./routes/authors.routes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`Listening on port ${port}`) )