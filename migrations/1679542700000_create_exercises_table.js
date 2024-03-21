/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("exercises", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.integer("rating_before").notNullable();
    table.string("location").notNullable();

    table.string("see_1").notNullable();
    table.string("see_2").notNullable();
    table.string("see_3").notNullable();
    table.string("see_4").notNullable();
    table.string("see_5").notNullable();
    table.string("touch_1").notNullable();
    table.string("touch_2").notNullable();
    table.string("touch_3").notNullable();
    table.string("touch_4").notNullable();
    table.string("hear_1").notNullable();
    table.string("hear_2").notNullable();
    table.string("hear_3").notNullable();
    table.string("smell_1").notNullable();
    table.string("smell_2").notNullable();
    table.string("taste_1").notNullable();
    table.integer("rating_after").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("exercises");
};
