const Goal = require('../models/Goal');

exports.getGoals = async (req, res) => {
    try {
        const goals = await Goal.find();
        res.json(goals);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.addGoal = async (req, res) => {
    try {
        const { description, amount, targetDate } = req.body;
        const newGoal = new Goal({ description, amount, targetDate });
        await newGoal.save();
        res.json(newGoal);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.updateGoal = async (req, res) => {
    try {
        const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(goal);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.deleteGoal = async (req, res) => {
    try {
        await Goal.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Goal removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
