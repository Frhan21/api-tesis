const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Mendapatkan semua sample
const getSample = async () => {
  return await prisma.sample.findMany();
};

// Mendapatkan sample berdasarkan ID
const getSamplebyId = async (id) => {
  return await prisma.sample.findUnique({
    where: {
      id: parseInt(id),
    },
  });
};

// Menambahkan sample baru
const createSample = async (avg_volt, concentration) => {
  return await prisma.sample.create({
    data: { 
      avg_volt: parseFloat(avg_volt), 
      concentration: parseFloat(concentration) 
    },
  });
};

// Menghapus sample berdasarkan ID
const deleteSample = async (id) => {
  return await prisma.sample.delete({
    where: {
      id: parseInt(id),
    },
  });
};

module.exports = {
  getSample,
  getSamplebyId,
  createSample,
  deleteSample,
};