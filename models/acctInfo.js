const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AccountInfoSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    notes: {
        type: String
    }
});

let AccountInfo = mongoose.model("AccountInfo", AccountInfoSchema);

module.exports = AccountInfo;