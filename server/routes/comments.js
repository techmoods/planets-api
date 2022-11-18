module.exports = app => {
    const comments = require("../controllers/CommentController");
    const router = require("express").Router();
  
    // Create 
    router.post("/", comments.create);
  
    // Retrieve all
    router.get("/", comments.findAll);
  
    // Retrieve a single
    router.get("/:id", comments.findOne);
  
    // Update 
    router.put("/:id", comments.update);
  
    // Delete 
    router.delete("/:id", comments.delete);
  
    // Delete all Comments
    router.delete("/", comments.deleteAll);
  
    app.use('/comments', router);
  };