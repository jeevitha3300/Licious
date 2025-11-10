
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
// Models
const Product = require('./models/Product');    
const Category = require('./models/category');   // Categories
const Banner   =require('./models/banner')              // banner
const Flavour = require('./models/flavour');            //flavour
const Bestseller=require('./models/bestseller')         //bestseller
const CustomerSay=require('./models/customersay')       //customersay
const Premiumfood=require('./models/premiumfood')       //premiumfood
const Customer=require('./models/customer')
const User=require('./models/user');
const Order=require ('./models/order')



const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
// Increase the limit to handle large base64 images (adjust as needed)
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
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
// const upload = multer({ storage, limits: { fileSize: 20 * 1024 * 1024 } }); 

// // ========== customer Registration API ==========
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ message: 'Failed to fetch customers.' });
  }
});
// ---------------------Customer--------------------------------
// // Register new customer
app.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, password, city } = req.body;

    // ✅ Check if customer already exists
    const existingCustomer = await Customer.findOne({ email });

    if (existingCustomer) {
      // ⚠️ Case 3: If password does not match
      if (existingCustomer.password !== password) {
        return res.status(400).json({
          message: "Email already registered with a different password. Please log in with the correct password.",
          existing: true,
          passwordMismatch: true
        });
      }

      // ✅ Case 2: Email + password match → treat as login
      return res.status(200).json({
        message: "Welcome back! Logged in successfully.",
        existing: true,
        customer: existingCustomer
      });
    }

    // ✅ Case 1: New user → create record
    const newCustomer = new Customer({
      firstName,
      lastName,
      mobile,
      email,
      password,
      city
    });

    await newCustomer.save();

    res.status(201).json({
      message: "Customer registered successfully.",
      existing: false,
      customer: newCustomer
    });

  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Server error during registration." });
  }
});

// Delete customer by ID
app.delete('/api/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Customer not found' });
    res.json({ message: 'Customer deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Server error during deletion' });
  }
});

// Update customer by ID
app.put('/api/customers/:id', async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
    res.json(updatedCustomer);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Server error during update' });
  }
});
// --------------------------User-------------------------------
// Create User
app.post('/api/manageuser', async (req, res) => {
  try {
    const { email, contact,password } = req.body;

    // Check for duplicates
    const existingUser = await User.findOne({
      $or: [{ email }, { contact },{password}]
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email or Contact or password already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Get all users
app.get('/api/manageuser', async (req, res) => {
  try {
     const users = await User.find().sort({ id: -1 }); 
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update user

app.put('/api/manageuser/:id', async (req, res) => {
  try {
    const { email, contact ,password} = req.body;

    // Check if another user has same email or contact
    const existingUser = await User.findOne({
      $or: [{ email }, { contact },{password}],
      _id: { $ne: req.params.id } // exclude current user
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email or Contact already exists" });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "User updated", updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// Delete user
app.delete('/api/manageuser/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
     console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// ----Banner--------------------
// POST /api/banner
app.post("/api/banner", async (req, res) => {
  try {
    const { name, image, type, enabled } = req.body;

    let newBanner = new Banner({ name, image, type, enabled });

    if (type === "home" && enabled) {
      // Disable all other home banners before saving
      await Banner.updateMany({ type: "home", enabled: true }, { enabled: false });
    }

    await newBanner.save();
    res.status(201).json(newBanner);
  } catch (err) {
    console.error("Error adding banner:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// ✅ Get all banners
app.get("/api/banner", async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});
// Backend: GET /api/banner/category/:categoryName
app.get("/api/banner/category/:categoryName", async (req, res) => {
  const normalized = req.params.categoryName.toLowerCase().replace(/\s+/g, '').trim();
  try {
    const banners = await Banner.find({
      type: 'category',
      enabled: true,
    });

    const filtered = banners.filter(b =>
      b.name.toLowerCase().replace(/\s+/g, '').trim() === normalized
    );

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});

// ✅ Get banners by type (home/category)
app.get("/api/banner/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const banners = await Banner.find({ type });
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});

// ✅ Update banner
app.put("/api/banner/:id", async (req, res) => {
  try {
    const { name, type, image } = req.body;
    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      { name, type, image },
      { new: true }
    );
    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json(updatedBanner);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//toggle
app.put("/api/banner/:id/toggle", async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) return res.status(404).json({ message: "Banner not found" });

    if (!banner.enabled) {
      // Turning ON
      if (banner.type === "home") {
        // Disable all other enabled home banners
        await Banner.updateMany({ type: "home", enabled: true }, { enabled: false });
      }
      banner.enabled = true;
    } else {
      // Turning OFF
      banner.enabled = false;
    }

    await banner.save();
    res.json(banner);
  } catch (err) {
    res.status(500).json({ message: "Toggle error", error: err.message });
  }
});

// ✅ Delete banner
app.delete("/api/banner/:id", async (req, res) => {
  try {
    const deleted = await Banner.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Banner not found" });
    res.json({ message: "Banner deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// ----------------categories------------------
//create category
app.post('/api/categories', async (req, res) => {
  try {
    const { category, image, subcategories } = req.body;
    if (!category || !image || !subcategories?.length) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const newCategory = new Category({ category, image, subcategories });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({ message: 'Failed to create category', error: err.message });
  }
});

// GET ALL CATEGORIES
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// GET ENABLED CATEGORIES
app.get('/api/categories/enabled', async (req, res) => {
  try {
    const categories = await Category.find({ enabled: true });
    res.json(categories);
  } catch (err) {
    console.error('Error fetching enabled categories:', err);
    res.status(500).json({ message: 'Failed to fetch enabled categories' });
  }
});

// GET SINGLE CATEGORY BY ID
app.get('/api/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    console.error('Error fetching category:', err);
    res.status(500).json({ message: 'Failed to fetch category', error: err.message });
  }
});

// UPDATE CATEGORY
app.put('/api/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { category, image, subcategories, enabled } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { category, image, subcategories, enabled },
      { new: true, runValidators: true }
    );
    if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
    res.json(updatedCategory);
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ message: 'Failed to update category' });
  }
});

// TOGGLE CATEGORY ENABLED STATUS
app.put('/api/categories/:id/toggle', async (req, res) => {
  try {
    const { id } = req.params;
    const categoryDoc = await Category.findById(id);
    if (!categoryDoc) return res.status(404).json({ message: 'Category not found' });

    categoryDoc.enabled = !categoryDoc.enabled;
    await categoryDoc.save();
    res.json(categoryDoc);
  } catch (err) {
    console.error('Toggle error:', err);
    res.status(500).json({ message: 'Failed to toggle category status' });
  }
});

// DELETE CATEGORY
app.delete('/api/categories/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Category.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ message: 'Failed to delete category' });
  }
});

// ---------------------Products----------------------
app.post('/api/products', upload.array('images', 10), async (req, res) => {
  try {
    const { name, category, subcategory, desc, weight, price, offerPrice,discount, enabled } = req.body;
    const images = req.files.map(file => `/uploads/${file.filename}`);

    const newProduct = new Product({
      name,
      category,
      subcategory, // store subcategory name directly
      desc,
      weight,
      price,
      offerPrice,
      discount,
      images,
      enabled: enabled !== undefined ? enabled : true,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: err.message });
  }
});

// UPDATE PRODUCT
app.put('/api/products/:id', upload.array('images', 10), async (req, res) => {
  try {
    const { name, category, subcategory, desc, weight, price, offerPrice,discount, enabled } = req.body;

    let updatedData = {
      name,
      category,
      subcategory,
      desc,
      weight,
      price,
      offerPrice,
      discount,
      enabled: enabled !== undefined ? enabled : true,
    };

    if (req.files && req.files.length > 0) {
      updatedData.images = req.files.map(file => `/uploads/${file.filename}`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });

    res.json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Update failed' });
  }
});

// GET ALL PRODUCTS
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find()
      .populate('category', 'category')
      .sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET SINGLE PRODUCT
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category', 'category');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: err.message });
  }
});

// DELETE PRODUCT
app.delete('/api/products/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Delete failed' });
  }
});

// Toggle product enabled/disabled
app.put('/api/products/:id/toggle', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    product.enabled = !product.enabled;
    await product.save();
    res.json({ enabled: product.enabled });
  } catch (err) {
    console.error('Error toggling product status:', err);
    res.status(500).json({ message: 'Toggle failed' });
  }
});




// ===========================================
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
// Example: login route for admin users
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
try {
    const user = await User.findOne({ username });
if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Return some user data (not password)
    res.status(200).json({
      _id: user._id,
      username: user.username,
      designation: user.designation,
      permissions: user.permissions
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// =================================
//  Create new order
app.post("/api/orders", async (req, res) => {
  try {
    const { userEmail, items, total, subtotal, deliveryCharge, address, timeSlot } = req.body;

    if (!userEmail || !items || items.length === 0) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const newOrder = new Order({
      userEmail,
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        offerPrice: item.offerPrice,
        quantity: item.quantity,
        image: item.image,
        weight: item.weight || "Not specified", // ✅ ensures value saved
      })),
      subtotal,
      deliveryCharge,
      totalAmount: total,
      address,
      timeSlot,
        status: "Pending",
    });

    await newOrder.save();
    res.status(201).json({ success: true, order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ success: false, error: "Failed to save order" });
  }
});
//  Update order status
app.put("/api/orders/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true } // ✅ return updated document
    );

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({
      success: true,
      message: "Order status updated",
      order: updatedOrder, // ✅ send updated order back
    });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
//  Get all orders (for admin)
app.get("/api/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
//  Get orders by user email
app.get("/api/orders/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ userEmail: email }).sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Delete a single order by ID
app.delete("/api/orders/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json({ message: "Order deleted successfully", order });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ message: "Failed to delete order", error: err.message });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




