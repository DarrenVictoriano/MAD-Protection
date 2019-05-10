require('dotenv').config()
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    login: function (req, res) {

        db.UserInfo.findOne({ email: req.body.email })
            .then(userInfo => {
                if (!userInfo) {
                    // no user found
                    res.status(500).json({
                        error: "no user found"
                    });
                } else {
                    // if user exist in the db return as promise
                    bcrypt.compare(req.body.Password, userInfo.Password)
                        .then(match => {
                            if (match) {
                                // if password match then generate a token
                                const payload = { user: req.body.email };
                                const options = { expiresIn: '1h', issuer: 'madTeam' };
                                const secret = process.env.JWT_SECRET;
                                const generateToken = jwt.sign(payload, secret, options);

                                res.status(401).json({
                                    token: generateToken,
                                    data: userInfo
                                });
                            } else {
                                // no match found
                                res.status(500).json({
                                    error: "incorrect password."
                                });
                            }
                        }).catch(err => {
                            console.log(err);
                            res.status(500).json(err);
                        });
                }
            }).catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    logout: function (req, res) {
        console.log("logout");
    }
}