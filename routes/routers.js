const router = require("express").Router();
const exercisesController = require("../controllers/exercises-controller");
const usersController = require("../controllers/users-controller");

router
  .route("/users")
  .get(usersController.getUsers)

  router.route("/exercises").get(exercisesController.getExercises);


module.exports = router;
