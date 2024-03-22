const knex = require("knex")(require("../knexfile"));

const getExercises = async (req, res) => {
  try {
    let exerciseData = await knex("exercises")
      .select(
        "exercises.id",
        "users.id as user_id",
        "exercises.created_at",
        "exercises.rating_before",
        "exercises.location",
        "exercises.see_1",
        "exercises.see_2",
        "exercises.see_3",
        "exercises.see_4",
        "exercises.see_5",
        "exercises.touch_1",
        "exercises.touch_2",
        "exercises.touch_3",
        "exercises.touch_4",
        "exercises.hear_1",
        "exercises.hear_2",
        "exercises.hear_3",
        "exercises.smell_1",
        "exercises.smell_2",
        "exercises.taste_1",
        "exercises.rating_after"
      )

      .join("users", "exercises.user_id", "users.id");
    res.status(200).json(exerciseData);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving exercise data: ${error}`,
    });
  }
};

const getUserExercises = async (req, res) => {
  try {
    const { id } = req.params;

    const userExercises = await knex("exercises")
      .select(
        "exercises.id",
        "users.id as user_id",
        "exercises.created_at",
        "exercises.rating_before",
        "exercises.location",
        "exercises.see_1",
        "exercises.see_2",
        "exercises.see_3",
        "exercises.see_4",
        "exercises.see_5",
        "exercises.touch_1",
        "exercises.touch_2",
        "exercises.touch_3",
        "exercises.touch_4",
        "exercises.hear_1",
        "exercises.hear_2",
        "exercises.hear_3",
        "exercises.smell_1",
        "exercises.smell_2",
        "exercises.taste_1",
        "exercises.rating_after"
      )
      .join("users", "exercises.user_id", "users.id")
      .where("users.id", id);

    res.status(200).json(userExercises);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving user exercises: ${error}`,
    });
  }
};

module.exports = {
  getExercises,
  getUserExercises,
};
