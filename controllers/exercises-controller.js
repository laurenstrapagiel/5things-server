const knex = require("knex")(require("../knexfile"));

const getExercises = async (req, res) => {
  try {
    let exerciseData = await knex("exercises").select(
     "id",
      "user_id",
      "created_at",
      "rating_before",
      "location",
      "see_1",
      "see_2",
      "see_3",
      "see_4",
     "see_5",
      "touch_1",
      "touch_2",
      "touch_3",
      "touch_4",
      "hear_1",
      "hear_2",
      "hear_3",
      "smell_1",
      "smell_2",
      "taste_1",
      "rating_after"
    );

    res.status(200).json(exerciseData);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving exercise data: ${error}`,
    });
  }
};

module.exports = {
  getExercises,
};
