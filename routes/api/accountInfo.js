const router = require("express").Router();
const accountInfoController = require("../../controllers/acctInfoController");

router.route("/")
    .get(accountInfoController.findAll); // admin protected

router.route("/:id")
    .post(accountInfoController.create) // protected
    .get(accountInfoController.findbyID) // protected
    .put(accountInfoController.update) // protected
    .delete(accountInfoController.remove); // protected

module.exports = router;