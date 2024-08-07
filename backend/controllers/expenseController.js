const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.addExpense = async (req, res) => {
    try {
        const { description, amount } = req.body;
        const newExpense = new Expense({ description, amount });
        await newExpense.save();
        res.json(newExpense);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Expense removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
