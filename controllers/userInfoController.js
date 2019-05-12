require("dotenv").config();
const db = require("../models");
const mad = require("../utils/encryption");
const bcrypt = require("bcrypt");

module.exports = {
    findAll: function (req, res) {

        const payload = req.decoded;
        //console.log(payload);

        if (payload && payload.user === 'admin') {
            db.UserInfo
                .find(req.query)
                .populate("accountInfo")
                .sort({ lastName: 1 })
                .then(dbUserInfo => {
                    //console.log("dbUser: ", dbUserInfo);
                    let decrptedData = [];

                    dbUserInfo.forEach(item => {
                        decrptedData.push({
                            _id: item._id,
                            email: item.email,
                            Password: item.Password,
                            accountInfo: mad.decryptAccountArr(item.accountInfo)
                        });
                    });

                    //console.log("decrypt: ", decrptedData);
                    res.json(decrptedData);
                })
                .catch(err => res.status(422).json(err));
        } else {
            res.status(500).json({
                error: "Admin authentication required."
            });
        }

    },
    findById: function (req, res) {
        db.UserInfo
            .findById(req.params.id)
            .populate("accountInfo")
            .then(dbUserInfo => {
                //console.log(dbUserInfo);

                let decrptedData = {
                    _id: dbUserInfo._id,
                    email: dbUserInfo.email,
                    Password: dbUserInfo.Password,
                    accountInfo: mad.decryptAccountArr(dbUserInfo.accountInfo)
                }

                res.json(decrptedData);
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        // make sure email does not exist in DB before creating
        db.UserInfo.findOne({ email: req.body.email })
            .then(dbUser => {
                if (dbUser) {
                    //console.log(dbUser);
                    // if email is found then dont make new user
                    // send an error
                    res.status(401).json({
                        error: dbUser.email + " already exist."
                    });
                } else {
                    // if user does not exist yet
                    // hash the password by returning a bcrypt prmose
                    return bcrypt.hash(req.body.Password, 10);
                }
            }).then(hash => {
                // create a object out of the user email and
                // the new hashed password
                let registerUser = {
                    email: req.body.email,
                    Password: hash
                }
                // save it to the DB by returning a promise
                return db.UserInfo.create(registerUser);
            }).then(userDB => {
                // send it back to client when sucessful
                res.json(userDB);
            }).catch(err => {
                // return an error if not
                res.status(422).json(err);
            });

    },
    update: function (req, res) {

        bcrypt.hash(req.body.Password, 10)
            .then(hash => {
                let encrytedData = {
                    email: req.body.email,
                    Password: hash
                };

                return db.UserInfo.findOneAndUpdate({ _id: req.params.id }, encrytedData)
            })
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));

    },
    remove: function (req, res) {
        db.UserInfo
            .findById({ _id: req.params.id })
            .then(dbUserInfo => dbUserInfo.remove())
            .then(removedDB => res.json(removedDB))
            .catch(err => res.status(422).json(err));
    }
};