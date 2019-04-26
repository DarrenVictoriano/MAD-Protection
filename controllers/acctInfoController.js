// Pulling in the <acctInfo> model from the <models> directory
// Should I only require the whole directory or be specific?
const db = require("../models/acctInfo");

// Defining and exporting methods for acctInfoController
module.exports = {
    // Method for finding user in acctInfo collection
    findAll: function(req, res) {
        // TODO: Confirm acctInfo collection name
        db.AcctInfo
            // TODO: Not sure on <(req.query)>
            .findOne(req.query)
            // TODO: write logic for finding account info by _id 

            // TODO: Doublecheck <dbModel> usage
            .then(dbModel => res.json(dbModel))
            // TODO: Doublecheck <status(422)> usage
            .catch(err => res.status(422).json(err));
    },

    // Method for creating new account in acctInfo collection
    create: function(req, res) {
        // TODO: Same as all above for <findAll> method
        db.AcctInfo
            .create(req, body)
            // TODO: Need to push to existing account info?
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // TODO: Create UPDATE method
    // TODO: Create REMOVE method
};