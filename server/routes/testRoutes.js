const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Skill Swap API is running 🚀" });
});

module.exports = router;
