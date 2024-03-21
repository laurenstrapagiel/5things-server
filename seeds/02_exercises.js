/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("exercises").del();
  await knex("exercises").insert([
    {
      id: 1,
      user_id: 1,
      created_at: new Date(),
      rating_before: 5,
      location: "home",
      see_1: "couch",
      see_2: "water bottle",
      see_3: "lamp",
      see_4: "cat",
      see_5: "fridge",
      touch_1: "arm",
      touch_2: "phone",
      touch_3: "table",
      touch_4: "t-shirt",
      hear_1: "TV",
      hear_2: "rain",
      hear_3: "sneeze",
      smell_1: "pizza",
      smell_2: "candle",
      taste_1: "mint",
      rating_after: 2,
    },
    {
      id: 2,
      user_id: 1,
      created_at: new Date(),
      rating_before: 4,
      location: "mall",
      see_1: "store",
      see_2: "bench",
      see_3: "shopper",
      see_4: "clothes",
      see_5: "palm tree",
      touch_1: "pocket",
      touch_2: "phone",
      touch_3: "purse",
      touch_4: "palm",
      hear_1: "chatter",
      hear_2: "music",
      hear_3: "footsteps",
      smell_1: "cinnamon buns",
      smell_2: "cleaner",
      taste_1: "strawberry lip balm",
      rating_after: 1,
    },
  ]);
};
