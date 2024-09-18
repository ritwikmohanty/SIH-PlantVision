const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests

// Set up the SQLite database
const db = new sqlite3.Database('/mnt/data/vhg.db');

// API route to get plant data
app.get('/plants', (req, res) => {
  const query = 'SELECT plantname, t_medical, descriptive_info FROM Plant';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    
    // Prepare data for frontend
    const plants = rows.map((row) => ({
      name: row.plantname,
      system: row.t_medical,
      description: row.descriptive_info,
      image: '/images/default.jpg', // Placeholder, adjust for actual image paths
    }));

    res.json(plants);
  });
});

// Serve static image files if needed
app.use('/images', express.static(path.join(__dirname, 'images')));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});