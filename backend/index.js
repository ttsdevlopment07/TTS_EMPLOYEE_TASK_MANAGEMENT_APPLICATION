const express = require('express');
const sequelize = require('./models/mysql');
const employeeRoutes = require('./routes/employeeRoutes');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
  origin: 'http://localhost:3000', // allow your frontend
  credentials: true
}));

// API routes
app.use('/api/employees', employeeRoutes);

// Test DB connection and start server
const PORT = 5000;
sequelize.authenticate()
  .then(() => {
    console.log('Database connected.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });