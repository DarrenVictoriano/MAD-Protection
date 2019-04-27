const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.AccountInfo
            .find(req.query)
            .then(dbAccountInfo => res.json(dbAccountInfo))
            .catch(err => res.status(422).json(err));
    },
    findbyID: function(req, res) {
        db.AccountInfo
            .findbyId(req.params.id)
            .then(dbAccountInfo => res.json(dbAccountInfo))
            .catch(err => res.json(dbAccountInfo));
    },
    create: function(req, body) {
        db.AccountInfo
            .create(req, body)
            .then(dbAccountInfo => res.json(dbAccountInfo))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.AccountInfo
            .findOneAndUpdate( { _id : req.params.id }, req.body )
            .then(dbAccountInfo => res.json(dbAccountInfo))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.AccountInfo
            .findById( { _id : req.params.id })
            .then(dbAccountInfo => res.json(dbAccountInfo))
            .catch(err => res.status(422).json(err));
    }
};
