const router = require("express").Router();
const accountInfoController = require("../../controllers/acctInfoController");

router.route("/")
    .get(accountInfoController.findAll);

router.route("/:id")
    .post(accountInfoController.create)
    .get(accountInfoController.findbyID)
    .put(accountInfoController.update)
    .delete(accountInfoController.remove);

module.exports = router;