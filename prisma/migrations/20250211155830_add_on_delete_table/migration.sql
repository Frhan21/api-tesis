-- DropForeignKey
ALTER TABLE "Sensor" DROP CONSTRAINT "Sensor_sample_id_fkey";

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_sample_id_fkey" FOREIGN KEY ("sample_id") REFERENCES "Sample"("id") ON DELETE CASCADE ON UPDATE CASCADE;
