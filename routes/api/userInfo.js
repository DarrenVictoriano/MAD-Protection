const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");
const validateToken = require("../../utils/validateToken").validateToken;

router.route("/")
    .get(validateToken, userInfoController.findAll) // admin protected
    .post(userInfoController.create); // not protected

router.route("/:id")
    .get(validateToken, userInfoController.findById) // protected
    .put(validateToken, userInfoController.update) // protected
    .delete(validateToken, userInfoController.remove); // protected

module.exports = router;

