const express = require('express')              // express server
const app = express()                           // initiate
const planets = require('./routes/planets')     // routes
const bodyParser = require("body-parser")      // body parser
const cors = require("cors")                   // cors options
const db = require("./database")               // mongoose
const corsOptions = {
    origin: "http://localhost:3000"
  }
  
app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/planets', planets)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.json({ message: "Welcome!" });
})

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

require('./routes/comments.js')

// set port, listen for requests
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})