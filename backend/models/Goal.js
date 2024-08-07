const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    targetDate: {
        type: Date,
        required: true,
    },
    achieved: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Goal', GoalSchema);
