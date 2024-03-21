const router = require("express").Router();
const exercisesController = require("../controllers/exercises-controller");
const usersController = require("../controllers/users-controller");

router
  .route("/users")
  .get(usersController.getUsers)


module.exports = router;
