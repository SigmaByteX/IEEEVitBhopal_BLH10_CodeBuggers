const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/expenses', require('./routes/expenseRoutes'));
app.use('/api/goals', require('./routes/goalRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
