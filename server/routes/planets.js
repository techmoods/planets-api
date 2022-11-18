const express = require('express')
const router = express.Router()
const data = require('../database/data')
const comments = require("../controllers/CommentController")

// Create 
router.post("/comments", comments.create);

// Retrieve all
router.get("/comments", comments.findAll);

// Retrieve a single
router.get("/comments/:id", comments.findOne);

// Update 
router.put("/comments/:id", comments.update);

// Delete 
router.delete("/comments/:id", comments.delete);

// Delete all Comments
router.delete("/comments", comments.deleteAll);

router.get("/", (req, res) => {
    res.json(data)
})

module.exports = router