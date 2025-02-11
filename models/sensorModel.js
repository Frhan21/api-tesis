const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSensor = async (sampleId) => {
  if (sampleId) {
    return await prisma.sensor.findMany({
      where: {
        sample_id: parseInt(sampleId),
      },
    });
  } else {
    return await prisma.sensor.findMany();
  }
};

const createSensor = async (volt, sampleId) => {
  return await prisma.sensor.create({
    data: { volt, sample_id: sampleId },
  });
};


module.exports = {
  getSensor,
  createSensor,
};