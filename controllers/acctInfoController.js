const db = require("../models");
const mad = require("../utils/encryption");

module.exports = {

    findAll: function (req, res) {

        db.AccountInfo
            .find(req.query)
            .then(dbAccountInfo => {
                let decryptedData = [];

                dbAccountInfo.forEach(item => {
                    decryptedData.push({
                        _id: item._id,
                        name: mad.decrypt(item.name),
                        username: mad.decrypt(item.username),
                        password: mad.decrypt(item.password),
                        link: mad.decrypt(item.link),
                        notes: mad.decrypt(item.notes)
                    });
                });

                res.json(decryptedData);
            })
            .catch(err => res.status(422).json(err));
    },
    findbyID: function (req, res) {
        db.AccountInfo
            .findById(req.params.id)
            .then(dbAccountInfo => {
                //console.log(dbAccountInfo);

                let decryptedData = {
                    _id: dbAccountInfo._id,
                    name: dbAccountInfo.name,
                    username: mad.decrypt(dbAccountInfo.username),
                    password: mad.decrypt(dbAccountInfo.password),
                    link: mad.decrypt(dbAccountInfo.link),
                    notes: mad.decrypt(dbAccountInfo.notes)
                }

                res.json(decryptedData);
            })
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {

        let encryptData = {
            name: req.body.name,
            username: mad.encrypt(req.body.username),
            password: mad.encrypt(req.body.password),
            link: mad.encrypt(req.body.link),
            notes: mad.encrypt(req.body.notes)
        }

        db.AccountInfo
            .create(encryptData)
            .then(dbAccountInfo => {
                return db.UserInfo.findOneAndUpdate({
                    _id: req.params.id
                }, {
                        $push: { accountInfo: dbAccountInfo._id },
                    }, {
                        new: true
                    }).populate("accountInfo")
            })
            .then(dbUserInfo => {

                // not decrypting after create
                // not needed for now
                res.json(dbUserInfo)
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        let encryptData = {
            name: req.body.name,
            username: mad.encrypt(req.body.username),
            password: mad.encrypt(req.body.password),
            link: mad.encrypt(req.body.link),
            notes: mad.encrypt(req.body.notes)
        }

        db.AccountInfo
            .findOneAndUpdate({ _id: req.params.id }, encryptData)
            .then(dbAccountInfo => {
                let decryptedData = {
                    _id: dbAccountInfo._id,
                    name: dbAccountInfo.name,
                    username: mad.decrypt(dbAccountInfo.username),
                    password: mad.decrypt(dbAccountInfo.password),
                    link: mad.decrypt(dbAccountInfo.link),
                    notes: mad.decrypt(dbAccountInfo.notes)
                }
                console.log(decryptedData);
                res.json(decryptedData);
            })
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.AccountInfo
            .findById({ _id: req.params.id })
            .then(dbAccount => dbAccount.remove())
            .then(dbAccountInfo => res.json(dbAccountInfo))
            .catch(err => res.status(422).json(err));
    }
};
