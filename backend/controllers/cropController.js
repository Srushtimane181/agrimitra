const Crop = require("../models/Crop");

// CREATE a new crop
const createCrop = async (req, res) => {
  try {
    const crop = await Crop.create(req.body);

    res.status(201).json({
      message: "Crop created successfully.",
      crop
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create crop.",
      error: error.message
    });
  }
};

// GET all crops
const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: crops.length,
      crops
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch crops.",
      error: error.message
    });
  }
};

// GET one crop by ID
const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found."
      });
    }

    res.status(200).json({
      crop
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid crop ID.",
      error: error.message
    });
  }
};

// UPDATE a crop
const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found."
      });
    }

    res.status(200).json({
      message: "Crop updated successfully.",
      crop
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update crop.",
      error: error.message
    });
  }
};

// DELETE a crop
const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found."
      });
    }

    res.status(200).json({
      message: "Crop deleted successfully."
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to delete crop.",
      error: error.message
    });
  }
};

module.exports = {
  createCrop,
  getAllCrops,
  getCropById,
  updateCrop,
  deleteCrop
};