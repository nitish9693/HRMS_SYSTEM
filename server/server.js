const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorMiddleware = require('./middleware/error.middleware');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth',        require('./routes/auth.routes'));
app.use('/api/employees',   require('./routes/employee.routes'));
app.use('/api/departments', require('./routes/department.routes'));
app.use('/api/attendance',  require('./routes/attendance.routes'));
app.use('/api/leaves',      require('./routes/leave.routes'));
app.use('/api/payroll',     require('./routes/payroll.routes'));

app.get('/', (req, res) => res.json({ message: 'HRMS API Running...' }));

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
