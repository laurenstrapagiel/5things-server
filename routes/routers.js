const router = require("express").Router();
const exercisesController = require("../controllers/exercises-controller");
const usersController = require("../controllers/users-controller");

router
  .route("/users")
  .get(usersController.getUsers)

  router.route("/exercises").get(exercisesController.getExercises);

  router.route("/exercises/:id").get(exercisesController.getUserExercises);


module.exports = router;
