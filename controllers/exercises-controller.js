const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

//post new exercise

const postExercise = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_key");
    const userId = decodedToken.userId;

    const {
      location,
      rating_before,
      see_1,
      see_2,
      see_3,
      see_4,
      see_5,
      touch_1,
      touch_2,
      touch_3,
      touch_4,
      hear_1,
      hear_2,
      hear_3,
      smell_1,
      smell_2,
      taste_1,
      rating_after,
    } = req.body;

    const created_at = new Date();

    await knex("exercises").insert({
      user_id: userId,
      created_at,
      location,
      rating_before,
      see_1,
      see_2,
      see_3,
      see_4,
      see_5,
      touch_1,
      touch_2,
      touch_3,
      touch_4,
      hear_1,
      hear_2,
      hear_3,
      smell_1,
      smell_2,
      taste_1,
      rating_after,
    });

    res.status(201).json({ message: "Exercise created successfully" });
  } catch (error) {
    res.status(500).json({ message: `Error creating exercise: ${error}` });
  }
};

//delete exercise

const deleteExercise = async (req, res) => {
  try {
    const { id } = req.params; 

    await knex("exercises").where({ id }).delete();

    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error deleting exercise: ${error.message}` });
  }
};

module.exports = {
  postExercise,
  deleteExercise,
};