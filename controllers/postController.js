const postsData = require("../data/DataPosts");

// Index
function index(req, res) {
  const responseData = {
    result: postsData,
    success: true,
  };

  res.json(responseData);
}

module.exports = { index };
