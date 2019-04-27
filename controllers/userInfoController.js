const db = require("../models");
const mad = require("./encryption");

module.exports = {
    findAll: function (req, res) {
        db.UserInfo
            .find()
            .sort({ lastName: 1 })
            .then(dbUserInfo => {
                console.log(dbUserInfo);
                // let decrptedData = {
                //     _id: dbUserInfo._id,
                //     firstName: mad.decrypt(dbUserInfo.firstName),
                //     lastName: mad.decrypt(dbUserInfo.lastName),
                //     email: mad.decrypt(dbUserInfo.email),
                //     Password: mad.decrypt(dbUserInfo.Password)
                // }
                res.json(decrptedData)
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.UserInfo
            .findById(req.params.id)
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(typeof req.body.Password);
        encrytedData = {
            firstName: mad.encrypt(req.body.firstName).toString(),
            lastName: mad.encrypt(req.body.lastName).toString(),
            email: mad.encrypt(req.body.email).toString(),
            Password: mad.encrypt(req.body.Password).toString()
        };

        db.UserInfo
            .create(encrytedData)
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.UserInfo
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.UserInfo
            .findById({ _id: req.params.id })
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));
    }
};