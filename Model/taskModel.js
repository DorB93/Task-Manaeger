const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide the tasks title!"],
    },
    description: {
        type: String,
        required: [true, "Please provide the tasks description!"],
    },
    doDay: {
        type: Date,
        required: [true, "Please provide the do date!"],
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    reminder: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
