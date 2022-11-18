const db = require("../database");
const Comment = db.comments;

// Create and Save a new Comment
exports.create = (req, res) => {
    console.log(req.body)  

    // Create a Comment
    const comment = new Comment({
      name: req.body.name,
      email: req.body.email,
      vote: req.body.vote,
      comment: req.body.comment
    });
  
    // Save Comment in database.
    comment
      .save(comment)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Comment."
        });
      });
  };

// Retrieve all Comments from the database.
exports.findAll = (req, res) => {
    const vote = req.query.vote;
    let condition = vote ? { vote: { $regex: new RegExp(vote), $options: "i" } } : {};
  
    Comment.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving comments."
        });
      });
  };

// Find a single Comment with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Comment.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Comment not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Comment with id=" + id });
      });
  };

// Update a Comment by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Comment.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Comment with id=${id}. Maybe Comment was not found!`
          });
        } else res.send({ message: "Comment was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Comment with id=" + id
        });
      });
  };

// Delete a Comment with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Comment.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Comment with id=${id}.`
          });
        } else {
          res.send({
            message: "Comment was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Comment with id=" + id
        });
      });
  };

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Comment.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Comments were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all comments."
        });
      });
  };