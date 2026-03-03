const express = require("express");
const posts = require("../data/DataPosts");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  const responseData = {
    result: posts,
    success: true,
  };

  res.json(responseData);
});

// SHOW
router.get("/:id", (req, res) => {
  const postsId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postsId);

  if (!post) {
    const respondeData = {
      messagge: `Post numero ${postsId} non trovato`,
      success: false,
    };

    return res.status(404).json(respondeData);
  }

  const responseData = {
    results: post,
    message: `Post ${postsId}`,
    success: true,
  };

  res.json(responseData);
});

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
