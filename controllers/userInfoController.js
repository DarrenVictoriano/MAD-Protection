const db = require("../models");
const mad = require("./encryption");

module.exports = {
    findAll: function (req, res) {
        db.UserInfo
            .find(req.query)
            .sort({ lastName: 1 })
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.UserInfo
            .findById(req.params.id)
            .then(dbUserInfo => res.json(dbUserInfo))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.UserInfo
            .create({
                firstName : req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                Password: req.body.Password
            })
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