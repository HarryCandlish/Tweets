const express = require("express");
const router = express.Router();

const { getTweets } = require("../db/tweets");

// GET /api/v1/tweets
router.get("/", (req, res) => {
  getTweets()
    .then(tweets => {
      res.json(tweets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

// POST / api / v1 / tweets;
router.get("/", (req, res) => {
  res.json({
    id: 6
  });
});

// GET /api/v1/tweets/:username
router.get("/:username", (req, res) => {
  res.json([
    {
      id: 5,
      text: "this is a tweet"
    }
  ]);
});

module.exports = router;
