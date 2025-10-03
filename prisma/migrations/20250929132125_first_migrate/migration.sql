/*
  Warnings:

  - You are about to drop the column `bodyType` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `carName` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `carId` on the `RentalPrice` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerDay` on the `RentalPrice` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerMonth` on the `RentalPrice` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerWeek` on the `RentalPrice` table. All the data in the column will be lost.
  - You are about to drop the column `carId` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `customerName` on the `Testimonial` table. All the data in the column will be lost.
  - You are about to drop the column `reviewContent` on the `Testimonial` table. All the data in the column will be lost.
  - Added the required column `body_type` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_name` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_id` to the `RentalPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_per_day` to the `RentalPrice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `car_id` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `Testimonial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `review_content` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."RentalPrice" DROP CONSTRAINT "RentalPrice_carId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Testimonial" DROP CONSTRAINT "Testimonial_carId_fkey";

-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "bodyType",
DROP COLUMN "carName",
DROP COLUMN "createdAt",
DROP COLUMN "imageUrl",
DROP COLUMN "updatedAt",
ADD COLUMN     "body_type" "public"."BodyType" NOT NULL,
ADD COLUMN     "car_name" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image_url" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."RentalPrice" DROP COLUMN "carId",
DROP COLUMN "pricePerDay",
DROP COLUMN "pricePerMonth",
DROP COLUMN "pricePerWeek",
ADD COLUMN     "car_id" TEXT NOT NULL,
ADD COLUMN     "price_per_day" INTEGER NOT NULL,
ADD COLUMN     "price_per_month" INTEGER,
ADD COLUMN     "price_per_week" INTEGER;

-- AlterTable
ALTER TABLE "public"."Testimonial" DROP COLUMN "carId",
DROP COLUMN "customerName",
DROP COLUMN "reviewContent",
ADD COLUMN     "car_id" TEXT NOT NULL,
ADD COLUMN     "customer_name" TEXT NOT NULL,
ADD COLUMN     "review_content" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "excerpt" TEXT,
    "content" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "author" TEXT NOT NULL DEFAULT 'Admin',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_slug_key" ON "public"."Article"("slug");

-- AddForeignKey
ALTER TABLE "public"."RentalPrice" ADD CONSTRAINT "RentalPrice_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "public"."Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Testimonial" ADD CONSTRAINT "Testimonial_car_id_fkey" FOREIGN KEY ("car_id") REFERENCES "public"."Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
