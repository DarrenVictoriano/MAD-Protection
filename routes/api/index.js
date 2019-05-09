const router = require("express").Router();
const userInfoRouter = require("./userInfo");
const accountInfoRouter = require("./accountInfo");
const loginRouter = require("./loginRouter");

router.use("/user", userInfoRouter);
router.use("/account", accountInfoRouter);
router.use("/login", loginRouter);

module.exports = router;
