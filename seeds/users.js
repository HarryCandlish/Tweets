exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "tim" },
        { id: 2, username: "bob" },
        { id: 3, username: "alice" }
      ]);
    });
};
