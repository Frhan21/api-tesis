-- CreateTable
CREATE TABLE "Sample" (
    "id" SERIAL NOT NULL,
    "avg_volt" DOUBLE PRECISION NOT NULL,
    "concentration" DOUBLE PRECISION NOT NULL,
    "timestamps" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "volt" DOUBLE PRECISION NOT NULL,
    "sample_id" INTEGER NOT NULL,
    "timestamps" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_sample_id_fkey" FOREIGN KEY ("sample_id") REFERENCES "Sample"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
