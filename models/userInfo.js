const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserInfoSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
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