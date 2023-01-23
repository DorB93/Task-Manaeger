require('dotenv').config({path: './.env', override: true});
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const morgan = require("morgan");

// Creating app with express
const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Development logs
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Allow Cross-Origin Resource Sharing
app.use(cors())


process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception! 💥 Shutting Down....");
    console.error(`${err.name}: ${err.message}`);

    process.exit(1);
});

// Connect to MongoDB database
mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@bsm.vlluoqa.mongodb.net/Angular-Todo?retryWrites=true&w=majority`).then(() => {
        console.log("MongoDB connected successfully!");
    });


// Get Port
const port = process.env.PORT || 8000;

// START THE SERVER
const server = app.listen(port, () => {
    console.log(`App running on port: ${port}...`);
});


process.on("unhandleRejection", (err) => {
    console.error(`${err.name}: ${err.message}`);
    console.log("Unhandled Rejection! 💥 Shutting Down....");
    server.close(() => {
        process.exit(1);
    });
});