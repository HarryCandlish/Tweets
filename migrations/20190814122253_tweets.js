exports.up = function(knex) {
  return knex.schema.createTable("tweets", table => {
    table.increments("id").primary();
    table.string("text");
    table.integer("tweeted_at");
    table.integer("user_id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tweets");
};
