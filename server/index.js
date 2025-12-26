require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// CORS headers (optional extra safety)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server Error" });
});

// Sample admin user seeding
const seedSampleUser = async () => {
  try {
    const existingUser = await User.findOne({ type: 'admin' });
    if (existingUser) {
      console.log('Admin user already exists:', existingUser.email);
      return;
    }

    const hashedPassword = await bcrypt.hash('password123', 10);
    const newUser = await User.create({
      firstName: 'Soni',
      lastName: 'Lee',
      age: '22',
      gender: 'F',
      contactNumber: '09123456789',
      email: 'soni@example.com',
      type: 'admin',
      username: 'soniadmin',
      password: hashedPassword,
      address: '123 Sample St',
    });
    console.log('Sample admin user seeded automatically:', newUser.email);
  } catch (err) {
    console.error('Error seeding user:', err.message);
  }
};

// Start server only after DB is connected and seeding is complete
const startServer = async () => {
  try {
    await connectDB();         // Wait for DB connection
    await seedSampleUser();    // Seed admin user if none exists

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err.message);
  }
};

startServer();
