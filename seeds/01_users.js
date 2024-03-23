const bcrypt = require("bcrypt");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();

  const hashedPasswordLauren = await bcrypt.hash("lauren", 10);
  const hashedPasswordAmanda = await bcrypt.hash("amanda", 10);

  await knex("users").insert([
    {
      id: 1,
      username: "lauren",
      password: hashedPasswordLauren,
    },
    {
      id: 2,
      username: "amanda",
      password: hashedPasswordAmanda,
    },
  ]);
};
