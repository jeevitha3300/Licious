// --------------banner-------cutomersay-------------------
// {
//   "image": "http://localhost:5000/uploads/banner3.png"
// }
// ----------flavour-----bestselelr--------premiumfood-----
  // {
  //   "category": "Meals in Minutes",
  //   "subcategory": "Chicken Snacks",
  //   "id": "Favour1",
  //   "name": "Crispy Chicken Nuggets",
  //   "desc": "12 pieces",
  //   "weight": "250g",
  //   "price": 210,
  //   "offerPrice": 189,
  //   "discount": "10% off",
  //   "time": "Today 2PM - 5PM",
  //   "images": ["http://localhost:5000/uploads/fav1.webp"]
  // }
// ----------subcategories-------------
// // {
// //   "category": "kidevening",
// //   "subcategory":"kidevening",
// //   "id": "Crispy Chicken Nuggets",
// //   "name": "Crispy Chicken Nuggets",
// //   "desc": "Juicy & meaty snack for your kiddos even",
// //   "weight": "250 g | 12 Pieces | Serves 3-4",
// //   "price": 210,
// //   "offerPrice": 189,
// //   "discount": "8% off",
// //   "time": "Today 2PM - 5P",
// //   "images": ["http://localhost:5000/uploads/eveningA1.wepb",
// //     "http://localhost:5000/uploads/eveningA2.wepb",
// //     "http://localhost:5000/uploads/eveningA3.wepb",
// //     "http://localhost:5000/uploads/eveningAa.wepb"
// // ]
// // }
//----------------------categories------------
// {
//     "id": "shopcategory1",
//     "title": "Kidsfavourite",
//     "image": "http://localhost:5000/uploads/shopimg1.png"
//   }
// ------------headcategory------------------
// {
//   "id": "shopcategory2",
//   "breadcrumb": ["Home", "Daily Fish delights"],
//   "heading": "Daily Fish Delights",
//   "carouselImages": [
//     {
//       "src": "http://localhost:5000/uploads/kidsbanner1.png",
//       "alt": "Banner 1"
//     },
//     {
//       "src": "http://localhost:5000/uploads/kidsbanner2.png",
//       "alt": "Banner 2"
//     }
//   ],
//   "categories": [
//     {
//       "key": "all",
//       "image": "http://localhost:5000/uploads/kidAll.webp",
//       "alt": "All",
//       "label": "All"
//     },
//     {
//       "key": "evening",
//       "image": "http://localhost:5000/uploads/kidsnacks.webp",
//       "alt": "Evening Snacks",
//       "label": "Evening Snacks"
//     },
//     {
//       "key": "breakfast",
//       "image": "http://localhost:5000/uploads/kidbreakfast.webp",
//       "alt": "Breakfast Staples",
//       "label": "Breakfast Staples"
//     },
//     {
//       "key": "yummy",
//       "image": "http://localhost:5000/uploads/kidyummy.webp",
//       "alt": "Yummy Tiffins",
//       "label": "Yummy Tiffins"
//     }
//   ]
// }
// ===============================================================================================================
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// Models
const Product = require('./models/Product');            // Regular product
const HeadProduct = require('./models/headproduct');    // Head document
const Category = require('./models/categoryproduct');   // Categories
const Banner   =require('./models/banner')              // banner
const Flavour = require('./models/flavour');            //flavour
const Bestseller=require('./models/bestseller')         //bestseller
const CustomerSay=require('./models/customersay')       //customersay
const Premiumfood=require('./models/premiumfood')       //premiumfood
const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
// Serve uploaded images statically
app.use('/uploads', express.static(uploadsDir));
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));
// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });
// POST route - Create product with image upload
app.post('/api/products', upload.array('images', 5), async (req, res) => {
  try {
    const imagePaths = req.files.map(file => `http://localhost:${PORT}/uploads/${file.filename}`);

    const newProduct = new Product({
      ...req.body,
      images: imagePaths,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add product' });
  }
});
// Products endpoint with filtering
app.get('/api/products', async (req, res) => {
  const { category, subcategory } = req.query;

  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  const filter = { category };

  if (subcategory && subcategory !== 'all') {
    filter.subcategory = subcategory;
  }

  try {
    const products = await Product.find(filter).lean();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
// GET route - Retrieve head document
app.get('/api/head/:id', async (req, res) => {
  try {
    const doc = await HeadProduct.findOne({ id: req.params.id }); 
    if (!doc) {
      return res.status(404).json({ message: 'No head document found' });
    }
    res.json(doc);
  } catch (err) {
    console.error('Error fetching head data:', err);
    res.status(500).json({ message: 'Failed to fetch head data' });
  }
});
// GET route - Retrieve categories
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
// API Route to get banners
app.get('/api/banner', async (req, res) => {
  try {
    const banners = await Banner.find(); 
    if (!banners || banners.length === 0) {
      return res.status(404).json({ message: 'No banners found' });
    }
    res.json(banners);
  } catch (err) {
    console.error('Error fetching banners:', err);
    res.status(500).json({ message: 'Failed to fetch banners' });
  }
});

// API Route to get cutomersay
app.get('/api/customersay', async (req, res) => {
  try {
    const customersay = await CustomerSay.find(); 
    if (!customersay || customersay.length === 0) {
      return res.status(404).json({ message: 'No customer feedback found' });
    }
    res.json(customersay);
  } catch (err) {
    console.error('Error fetching customersay:', err);
    res.status(500).json({ message: 'Failed to fetch customer feedback' });
  }
});

// GET all flavours
app.get('/api/flavours', async (req, res) => {
  try {
    const flavours = await Flavour.find(); 
    res.json(flavours);
  } catch (err) {
    console.error('Error fetching flavours:', err);
    res.status(500).json({ message: 'Failed to fetch flavours' });
  }
});
// GET all bestseller
app.get('/api/bestseller', async (req, res) => {
  try {
    const bestseller = await Bestseller.find(); 
    res.json(bestseller);
  } catch (err) {
    console.error('Error fetching bestsellers:', err);
    res.status(500).json({ message: 'Failed to fetch bestsellers' });
  }
});
// GET all premiumfood
app.get('/api/premiumfood', async (req, res) => {
  try {
    const premiumfood = await Premiumfood.find(); 
    res.json(premiumfood);
  } catch (err) {
    console.error('Error fetching premiumfood:', err);
    res.status(500).json({ message: 'Failed to fetch premiumfood' });
  }
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




