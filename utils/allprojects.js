import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      projectName: true,
      projectSlug: true,
      projectFeaturedImage: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return projects;
};
