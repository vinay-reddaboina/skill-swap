const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Skill Swap API is running 🚀" });
});

// Server Listener
const PORT = 40000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
