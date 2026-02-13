require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Test Route
const testRoutes=require("./routes/testRoutes")
app.use("/api", testRoutes);
// Server Listener
const PORT = process.env.PORT || 40000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
