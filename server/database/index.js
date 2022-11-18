const dbConfig = require("../config/db.config.js"); // mongo connection string

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.comments = require("../models/Comment.js")(mongoose);

module.exports = db;