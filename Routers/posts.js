const express = require("express");
const posts = require("../data/DataPosts");
const router = express.Router();
const postController = require("../controllers/postController")

// INDEX
router.get("/", postController.index);

// SHOW
router.get("/:id", postController.show);

// STORE
router.post("/", (req, res) => {
  const responseData = {
    result: `Creazione post`,
    success: true,
  };

  res.json(responseData);
});

// UPDATE
router.put("/:id", (req, res) => {
  const postsId = req.params.id;
  const responseData = {
    result: `Modifica post ${postsId}`,
    success: true,
  };

  res.json(responseData);
});

// MODIFY
router.patch("/:id", (req, res) => {
  const postsId = req.params.id;
  const responseData = {
    result: `Modifica parziale del post ${postsId}`,
    success: true,
  };

  res.json(responseData);
});

//DESTROY
router.delete("/:id", (req, res) => {
  const postsId = req.params.id;
  const responseData = {
    result: `Eliminazione del post ${postsId}`,
    success: true,
  };

  res.json(responseData);
});

module.exports = router;
