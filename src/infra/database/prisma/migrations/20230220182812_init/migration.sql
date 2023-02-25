-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "registration" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photoFile" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);
INSERT INTO "new_User" ("email", "name", "photoFile", "registration", "role") SELECT "email", "name", "photoFile", "registration", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_registration_key" ON "User"("registration");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_photoFile_key" ON "User"("photoFile");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
