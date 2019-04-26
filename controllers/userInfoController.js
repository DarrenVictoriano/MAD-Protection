// Pulling in the <userInfo> model from the <models> directory
// Should I only require the whole directory or be specific?
const db = require("../models/userInfo");

// Defining and exporting methods for userInfoController
module.exports = {
    // Method for finding user in userInfo collection
    findOne: function(req, res) {
        // TODO: Confirm UserInfo collection name
        db.UserInfo
            // TODO: Not sure on <(req.query)>
            .findOne(req.query)
            // TODO: write logic for finding user by _id 
            // and confirming password?

            // Populates account info from <acctInfo> model
            // TODO: Work with Darren to determine what to populate
            .populate("NEEDTODEFINE")
            // TODO: Doublecheck <dbModel> usage
            .then(dbModel => res.json(dbModel))
            // TODO: Doublecheck <status(422)> usage
            .catch(err => res.status(422).json(err));
    },

    // Method for creating user in UserInfo collection
    create: function(req, res) {
        // TODO: Same as all above for <findOne> method
        db.UserInfo
            .create(req, body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};