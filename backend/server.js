const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// PostgreSQL client setup
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'physio_clinic',
  password: 'pass',
  port: 5432,
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client', err.stack);
  } else {
    console.log('Database connected successfully');
  }
  release();
});

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Route to handle doctor registration
app.post('/api/doctors', upload.single('cv'), async (req, res) => {
  const { name, gender, qualification, college, address, contact_no, email, expertise, document_required } = req.body;
  const cv = req.file ? req.file.path : null;

  try {
    await pool.query(
      `INSERT INTO doctors (name, gender, qualification, college, address, contact_no, email, expertise, document_required, cv)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [name, gender, qualification, college, address, contact_no, email, expertise, document_required, cv]
    );
    res.status(201).json({ message: 'Doctor registered successfully!' });
  } catch (error) {
    console.error('Error saving doctor data:', error);
    res.status(500).json({ message: 'Failed to register doctor.' });
  }
});

// Book an appointment
app.post('/api/appointments', async (req, res) => {
  const { name, email, contact_no, date, slot, age, condition, gender, address } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO appointments (name, email, contact_no, date, slot, age, condition, gender, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, email, contact_no, date, slot, age, condition, gender, address]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).send('Error saving appointment');
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contact_form (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, subject, message]
    );
    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Error inserting data: ', err.message);
    res.status(500).json({ success: false, error: 'Failed to submit message' });
  }
});

// Get all appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const allAppointments = await pool.query('SELECT * FROM appointments ORDER BY booked_at DESC');
    res.json(allAppointments.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get today's appointments
app.get('/api/appointments/today', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const appointments = await pool.query('SELECT * FROM appointments WHERE date = $1', [today]);
    res.json(appointments.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
