-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "simonyi" BOOLEAN NOT NULL,
    "link" TEXT NOT NULL,
    "numberOfPrints" INTEGER NOT NULL,
    "paperSize" TEXT NOT NULL,
    "paperNote" TEXT NOT NULL,
    "sticker" BOOLEAN NOT NULL,
    "laminate" BOOLEAN NOT NULL,
    "comment" TEXT NOT NULL
);
