console.log("In server.js")

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 8000
const path = require('path')

require('./config/mongoose.config')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
 //if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
// }
require('./routes/authors.routes')(app)


app.get('*', function (req, res) {
    const index = path.join(__dirname, "../client", 'build', 'index.html');
    console.log(index)
    res.sendFile(index);
  });

app.listen(port, () => console.log(`Listening on port ${port}`) )