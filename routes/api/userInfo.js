const router = require("express").Router();
const userInfoController = require("../../controllers/userInfoController");

router.route("/")
    .get(userInfoController.findAll)
    .post(userInfoController.create);

router.route("/:id")
    .get(userInfoController.findById)
    .put(userInfoController.update)
    .delete(userInfoController.remove);

module.exports = router;