-- CreateTable
CREATE TABLE "User" (
    "registration" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photoFile" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_registration_key" ON "User"("registration");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_photoFile_key" ON "User"("photoFile");
