const router = require("express").Router();
const accountInfoController = require("../../controllers/acctInfoController");
const validateToken = require("../../utils/validateToken").validateToken;

router.route("/")
    .get(validateToken, accountInfoController.findAll); // protected

router.route("/:id")
    .post(validateToken, accountInfoController.create) // protected
    .get(validateToken, accountInfoController.findbyID) // protected
    .put(validateToken, accountInfoController.update) // protected
    .delete(validateToken, accountInfoController.remove); // protected

module.exports = router;