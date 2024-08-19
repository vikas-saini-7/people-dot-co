require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const peopleRoutes = require("./routes/peopleRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();

// Connect to MongoDB
connectDB();

// Use CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/people", peopleRoutes);
app.use("/api/user", userRoutes);

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
