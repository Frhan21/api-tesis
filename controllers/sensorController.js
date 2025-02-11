const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const sensorModel = require("../models/sensorModel");

exports.index = async (req, res) => {
  const sampleId = req.query.sample_id;
  try {
    const sensor = await sensorModel.getSensor(sampleId);
    res.json(sensor);
  } catch (error) {
    res.json({ error: error.message, status: 404 });
  }
};

exports.store = async (req, res) => {
  const { volt } = req.body;

  if (!Array.isArray(volt)) {
    return res
      .status(400)
      .json({ error: "Validation error: Voltage not found" });
  }

  try {
    const latestSample = await prisma.sample.findFirst({
      orderBy: {
        id: "desc",
      },
    });

    const sampleId = latestSample ? latestSample.id : null;
    if (!sampleId) {
      return res.status(404).json({ error: "Sample not found" });
    }

    const insertPromise = volt.map((v, i) => {
      return sensorModel.createSensor(v, sampleId);
    });

    await Promise.all(insertPromise);
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
