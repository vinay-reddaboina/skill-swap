const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Test Route
const testRoutes=require("./routes/testRoutes")
app.use("/api", testRoutes);
// Server Listener
const PORT = 40000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
