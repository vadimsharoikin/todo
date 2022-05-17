const mongoose = require("mongoose");

module.exports = async () => {
    try {
        await mongoose.connect(
            "mongodb://localhost:27017/todo_db",
            { useUnifiedTopology: true, useNewUrlParser: true }
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
