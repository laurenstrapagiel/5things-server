const knex = require("knex")(require("../knexfile"));

const getUsers = async (req, res) => {
  try {
    let usersData = await knex("users").select(
      "id",
      "username",
      "password"
    );

    res.status(200).json(usersData);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving users data: ${error}`,
    });
  }
};

module.exports = {
  getUsers,
};
