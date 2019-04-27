const router = require("express").Router();
const userInfoRouter = require("./userInfo");
const accountInfoRouter = require("./accountInfo");

router.use("/user", userInfoRouter);
//router.use("/account", accountInfoRouter);

module.exports = router;

