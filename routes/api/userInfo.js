const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

router.route("/")
    .get(userInfoController.findAll) // admin protected
    .post(userInfoController.create); // protected

router.route("/:id")
    .get(userInfoController.findById) // protected
    .put(userInfoController.update) // protected
    .delete(userInfoController.remove); // protected

module.exports = router;

