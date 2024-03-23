const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await knex("users").insert({ username, password: hashedPassword });

    res.status(201).json({ message: "Successfully registered" });
  } catch (error) {
    res.status(500).json({ message: `Error registering user: ${error}` });
  }
};

const getProfile = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, "secret_key");
    const userId = decodedToken.userId;

    const userProfile = await knex("users").where({ id: userId }).first();
    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    const userExercises = await knex("exercises").where({ user_id: userId });

    const userData = {
      profile: userProfile,
      exercises: userExercises,
    };

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving user profile: ${error}`,
    });
  }
};

module.exports = {
  loginUser,
  getProfile,
  registerUser,
};
