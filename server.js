// Initialize Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001

// Initialize Mongoose and Routes here
const mongoose = require("mongoose");
const routes = require("./routes");

// Define Middlewares Here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static asset (when deployed to heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Add routes for API and View
app.use(routes);

// Connect to MongoDB
// TODO: Need to name database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/databaseNeedsName");

// Start the Server
app.listen(PORT, function () {
    console.log("Server runing on https://localhost:" + PORT);
});