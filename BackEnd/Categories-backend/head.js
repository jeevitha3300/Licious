// {
//  "id":"shopcategorya"
//   "breadcrumb": ["Home", "Kids Favourites"],
//   "heading": "Kids Favourites",
//   "carouselImages": [
//     {
//       "src": "http://localhost:5000/uploads/kidsbanner1.png",
//       "alt": "Banner 1"
//     },
//     {
//       "src": "http://localhost:5000/uploads/banner1.png",
//       "alt": "Banner 2"
//     }
//   ],
//  "categories": [
//     {
//       "key": "all",
//       "image":"http://localhost:5000/uploads/kidAll.webp",
//       "alt": "All",
//       "label": "All"
//     },
//     {
//       "key": "evening",
//       "image":"http://localhost:5000/uploads/kidsnacks.wepb",
//       "alt": "Evening Snacks",
//       "label": "Evening Snacks"
//     },
//     {
//       "key": "breakfast",
//       "image":"http://localhost:5000/uploads/kidbreakfast.wepb",
//       "alt": "Breakfast Staples",
//       "label": "Breakfast Staples"
//     },
//     {
//       "key": "yummy",
//       "image":"http://localhost:5000/uploads/kidyummy.wepb",
//       "alt": "Yummy Tiffins",
//       "label": "Yummy Tiffins"
//     }
//   ]
// }










const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const Product = require('./models/headproduct');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());


// Serve static files in "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure 'uploads' directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files from 'uploads' folder
app.use('/uploads', (req, res, next) => {
  console.log('Image requested:', req.url);
  next();
}, express.static(uploadsDir));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(' MongoDB connection error:', err));

// API route to fetch head document
app.get('/api/head', async (req, res) => {
  try {
    const doc = await Product.findOne({});
    if (!doc) {
      return res.status(404).json({ message: 'No head document found' });
    }
    res.json(doc);
  } catch (err) {
    console.error('Error fetching head data:', err);
    res.status(500).json({ message: 'Failed to fetch head data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
