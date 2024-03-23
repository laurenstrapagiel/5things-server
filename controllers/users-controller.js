const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await knex("users").where({ username }).first();
    if (!user) {
      return res.status(401).json({ message: "Invalid username" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, "secret_key", {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: `Error logging in: ${error}` });
  }
};

module.exports = {
  getUsers,
  loginUser,
};
