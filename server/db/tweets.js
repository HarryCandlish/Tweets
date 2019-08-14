const connection = require("./connection");

// data base queries

function getTweets(testDb) {
  const db = testDb || connection;
  return db("tweets").select();
}

function createTweet(tweet, testDb) {
  const db = testDb || connection;

  return db("tweet").insert(tweet);
}

// Two Step Query

function getTweetsByUsername(username, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("username", username)
    .then(user => {
      return db("tweets").where("user_id", user.id);
    });
}

module.exports = {
  getTweets,
  createTweet,
  getTweetsByUsername
};
