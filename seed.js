const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Fungsi untuk menghasilkan angka float random dalam rentang tertentu
function getRandomFloat(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

async function main() {
  console.log("Seeding database with 10 samples...");

  for (let i = 1; i <= 10; i++) {
    const sample = await prisma.sample.create({
      data: {
        avg_volt: getRandomFloat(2.5, 5.0), // Random avg_volt antara 2.5 - 5.0
        concentration: getRandomFloat(0.5, 1.0), // Random concentration antara 0.5 - 1.0
        sensors: {
          create: [
            { volt: getRandomFloat(2.0, 5.0) },
            { volt: getRandomFloat(2.0, 5.0) },
            { volt: getRandomFloat(2.0, 5.0) },
          ],
        },
      },
    });

    console.log(`Sample ${i} created:`, sample);
  }

  console.log("Seeding completed.");
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  });
