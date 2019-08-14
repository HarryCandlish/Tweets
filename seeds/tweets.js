exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tweets")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tweets").insert([
        { id: 10, text: "hello", tweeted_at: 1565743528957, user_id: 1 },
        { id: 20, text: "bye", tweeted_at: 1565743547743, user_id: 3 },
        { id: 30, text: "good", tweeted_at: 1565743558598, user_id: 2 }
      ]);
    });
};
