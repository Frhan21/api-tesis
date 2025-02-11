const sampleModel = require("../models/sampleModel");

// Mendapatkan semua sample
exports.index = async (req, res) => {
  try {
    const samples = await sampleModel.getSample();
    res.status(200).json({ data: samples, status: "success" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", status: "error" });
  }
};

// Menambahkan sample baru
exports.store = async (req, res) => {
  const { avg_volt, concentration } = req.body;

  // Validasi input
  if (!avg_volt || !concentration) {
    return res.status(400).json({ 
      error: "Validation error: Missing required fields", 
      status: "error" 
    });
  }

  try {
    const newSample = await sampleModel.createSample(avg_volt, concentration);
    res.status(201).json({ data: newSample, status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message, status: "error" });
  }
};

// Mendapatkan sample berdasarkan ID
exports.show = async (req, res) => {
  const { id } = req.params;

  try {
    const sample = await sampleModel.getSamplebyId(id);
    if (!sample) {
      return res.status(404).json({ message: "Sample not found", status: "error" });
    }
    res.status(200).json({ data: sample, status: "success" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", status: "error" });
  }
};

// Menghapus sample berdasarkan ID
exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const sample = await sampleModel.getSamplebyId(id);
    if (!sample) {
      return res.status(404).json({ message: "Sample not found", status: "error" });
    }

    await sampleModel.deleteSample(id);
    res.status(200).json({ message: "Sample deleted successfully", status: "success" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", status: "error" });
  }
};