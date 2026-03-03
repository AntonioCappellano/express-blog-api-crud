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

module.exports = { index, show };
