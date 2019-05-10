// this is a sample front end API calls
import axios from "axios";

export default {
    // Login User
    loginUser: function (loginCred) {
        return axios.post("/api/login/", loginCred);
    },
    // Gets the book with the given id
    getUserInfo: function (userID) {
        return axios.get("/api/user/" + userID);
    },
    // Deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
