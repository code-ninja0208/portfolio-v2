-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "description" VARCHAR(191) NOT NULL,
    "image" VARCHAR(191) NOT NULL,
    "link_demo" VARCHAR(191),
    "link_github" VARCHAR(191),
    "stacks" VARCHAR(191) NOT NULL,
    "is_show" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contentmeta" (
    "id" SERIAL NOT NULL,
    "slug" VARCHAR(191) NOT NULL,
    "type" VARCHAR(191) NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contentmeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_slug_key" ON "projects"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "contentmeta_slug_key" ON "contentmeta"("slug");
