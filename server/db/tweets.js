const connection = require("./connection");

// data base queries

function getTweets(testDb) {
  const db = testDb || connection;

  return db("tweets")
    .join("users", "tweets.user_id", "users.id")
    .select("*", "tweets.id AS id")
    .then(tweets => {
      return tweets.map(tweet => {
        tweet.user = {
          id: tweet.user_id,
          username: tweet.username
        };
        delete tweet.user_id;
        delete tweet.username;
        return tweet;
      });
    });
}

function createTweet(tweet, testDb) {
  const db = testDb || connection;

  return db("users")
    .where("username", tweet.username)
    .first()
    .then(user => {
      const newTweet = {
        text: tweet.text,
        tweeted_at: new Date().getTime(),
        user_id: user.id
      };

      return db("tweets").insert(newTweet);
    });
}
// Two Step Query

function getTweetsByUsername(username, testDb) {
  const db = testDb || connection;

  // Two step query
  return db("users")
    .where("username", username)
    .first()
    .then(user => {
      return db("tweets")
        .where("user_id", user.id)
        .then(tweets => {
          return tweets.map(tweet => {
            tweet.user = {
              id: tweet.user_id,
              username: user.username
            };
            delete tweet.user_id;
            return tweet;
          });
        });
    });
}

module.exports = {
  getTweets,
  createTweet,
  getTweetsByUsername
};
