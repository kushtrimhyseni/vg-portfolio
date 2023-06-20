import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSingleProject = async (slug) => {
  const project = await prisma.project.findUnique({
    where: { projectSlug: slug },
  });

  return project;
};
