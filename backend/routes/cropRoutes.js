const express = require("express");

const {
  createCrop,
  getAllCrops,
  getCropById,
  updateCrop,
  deleteCrop
} = require("../controllers/cropController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create crop
router.post("/", protect, createCrop);

// Get all crops
router.get("/", getAllCrops);

// Get one crop
router.get("/:id", getCropById);

// Update crop
router.put("/:id", protect, updateCrop);

// Delete crop
router.delete("/:id", protect, deleteCrop);

module.exports = router;