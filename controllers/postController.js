const postsData = require("../data/DataPosts");

// Index

function index(req, res) {
  const responseData = {
    result: postsData,
    success: true,
  };

  res.json(responseData);
}

// Show

function show(req, res) {
  const postsId = parseInt(req.params.id);
  const post = postsData.find((post) => post.id === postsId);

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
}

// Destroy

function destroy(req, res) {

  const postId = parseInt(req.params.id);
 
  // findIndex restituisce la posizione se non la trova restituisce -1
  const postIndex = postsData.findIndex((post) => post.id === postId);
 
  // se il post non esiste rispondiamo con un errore 404
  if (postIndex === -1) {
    const responseData = {
      message: "Post non trovato",
      success: false,
    };

    return res.status(404).json(responseData);
  }
  
  // usando splice cancello l'elemento dall'array
  postsData.splice(postIndex, 1);

  console.log("Post eliminato ");
  console.log("Lista aggiornata:", postsData);

  res.sendStatus(204);
}

// Store

function store(req, res) {
  const responseData = {
    result: `Creazione post`,
    success: true,
  };

  res.json(responseData);
}

// Update

function update(req, res) {
  const postsId = req.params.id;
  const responseData = {
    result: `Modifica post ${postsId}`,
    success: true,
  };

  res.json(responseData);
}

// Modify

function modify(req, res) {
  const postsId = req.params.id;
  const responseData = {
    result: `Modifica parziale del post ${postsId}`,
    success: true,
  };

  res.json(responseData);
}

module.exports = { index, show, destroy, store, update, modify };
