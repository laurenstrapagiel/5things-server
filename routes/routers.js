const router = require("express").Router();
const exercisesController = require("../controllers/exercises-controller");
const usersController = require("../controllers/users-controller");


router.route("/login").post(usersController.loginUser);

router.route("/profile").get(usersController.getProfile);

router.route("/exercises").post(exercisesController.postExercise);


module.exports = router;
