// this is a sample front end API calls
import axios from "axios";

export default {
    // Login User
    loginUser: function (loginCred) {
        return axios.post("/api/login/", loginCred);
    },
    // Create new user
    createUser: function (newUser) {
        return axios.post("/api/user/", newUser);
    },
    // Gets the UserInfo and AccountDB with the given id
    getUserInfo: function (userID, config) {
        return axios.get("/api/user/" + userID, config);
    },

    // Update User Password
    updateUserPass: function (userID, newPassword, config) {
        return axios.put("/api/user/" + userID, newPassword, config);
    },

    // Create Account/Password
    createAcctPass: function (userID, config, newAcctPass) {
        return axios.post("/api/account/" + userID, newAcctPass, config);
    },

    // Update Account Info
    updateAccount: function (userID, newAccountInfo, config) {
        return axios.put("/api/account/" + userID, newAccountInfo, config);
    },

    // Delete Account
    deleteAccount: function (userID, config) {
        return axios.delete("/api/account/" + userID, config);
    }
};
