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
    status: {
        type: String,
        enum: ['todo', 'in-progress', 'done'],
        default: 'todo'
    },
    dueDate: {
        type: Date,
        required: [true, "Please provide the do date!"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    reminder: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: true,
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
});

taskSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
