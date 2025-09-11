-- CreateEnum
CREATE TYPE "public"."BodyType" AS ENUM ('HATCHBACK', 'SEDAN', 'MPV', 'SUV', 'LUXURY', 'MINIBUS');

-- CreateEnum
CREATE TYPE "public"."TransmissionType" AS ENUM ('MANUAL', 'AUTOMATIC');

-- CreateEnum
CREATE TYPE "public"."ArticleStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "public"."Car" (
    "id" TEXT NOT NULL,
    "carName" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "bodyType" "public"."BodyType" NOT NULL,
    "transmission" "public"."TransmissionType" NOT NULL,
    "seats" INTEGER,
    "bags" INTEGER,
    "description" TEXT,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RentalPrice" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "pricePerDay" INTEGER NOT NULL,
    "pricePerWeek" INTEGER,
    "pricePerMonth" INTEGER,
    "description" TEXT,

    CONSTRAINT "RentalPrice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Testimonial" (
    "id" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "reviewContent" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_slug_key" ON "public"."Car"("slug");

-- AddForeignKey
ALTER TABLE "public"."RentalPrice" ADD CONSTRAINT "RentalPrice_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Testimonial" ADD CONSTRAINT "Testimonial_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
