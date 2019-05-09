const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

let UserInfoSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    accountInfo: [{
        type: Schema.Types.ObjectId,
        ref: "AccountInfo"
    }],
    profileImage: {
        type: String
    }
});

let UserInfo = mongoose.model("UserInfo", UserInfoSchema);

module.exports = UserInfo;