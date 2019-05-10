require('dotenv').config()
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    login: function (req, res) {
        let userInfo = null;

        db.UserInfo.findOne({ email: req.body.email })
            .then(dbUserInfo => {
                userInfo = dbUserInfo;

                if (!userInfo) {
                    // no user found
                    throw {
                        status: 401,
                        message: "no user found"
                    };
                } else {
                    // if user exist in the db return as promise
                    return bcrypt.compare(req.body.Password, userInfo.Password)
                }
            })
            .then(match => {
                if (match) {
                    // if password match then generate a token
                    const payload = { user: req.body.email };
                    const options = { expiresIn: '1h', issuer: 'madTeam' };
                    const secret = process.env.JWT_SECRET;
                    const generateToken = jwt.sign(payload, secret, options);

                    res.json({
                        token: generateToken,
                        data: userInfo
                    });
                } else {
                    // no match found
                    throw {
                        status: 401,
                        message: "incorrect password."
                    };
                }
            })
            .catch(err => {
                console.log(err);
                res.status(err.status).json(err.message);
            });
    },
    logout: function (req, res) {
        console.log("logout");
    }
}