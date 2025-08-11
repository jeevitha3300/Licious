  // {
  //   "id": "shopcategory1",
  //   "title": "Kidsfavourite",
  //   "image": "http://localhost:5000/uploads/shopimg1.png"
  // }




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const Category = require('./models/categoryproduct'); // your model import

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Ensure 'uploads' directory exists and serve static files
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use('/uploads', express.static(uploadsDir));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Fixed GET route for categories
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: 'No categories found' });
    }
    res.json(categories);
  } catch (err) {
    console.error('Error fetching categories data:', err);
    res.status(500).json({ message: 'Failed to fetch categories data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



