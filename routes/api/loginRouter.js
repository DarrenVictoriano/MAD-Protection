const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
    .post(loginController.login)
    .get(loginController.logout);

module.exports = router;