const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const cropRoutes = require("./routes/cropRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/crops", cropRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AgriMitra Backend API is running"
  });
});

module.exports = app;