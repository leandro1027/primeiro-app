/*
  Warnings:

  - You are about to drop the column `concursed` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `concurred` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Teacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "wage" TEXT NOT NULL,
    "register" TEXT NOT NULL,
    "concurred" BOOLEAN NOT NULL,
    "created" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Teacher" ("created", "id", "name", "register", "wage") SELECT "created", "id", "name", "register", "wage" FROM "Teacher";
DROP TABLE "Teacher";
ALTER TABLE "new_Teacher" RENAME TO "Teacher";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
