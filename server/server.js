console.log("In server.js")

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000
const path = require('path')

require('./config/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('./routes/authors.routes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('../client/build')));
}

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('../client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`))