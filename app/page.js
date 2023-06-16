import ProjectCard from "@components/ProjectCard";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function Home() {
  // await prisma.project.create({
  //   data: {
  //     projectName: "TikTak",
  //     projectFeaturedImage: "https://i.ibb.co/M8pP7Rw/bora.webp",
  //     projectDescription:
  //       "Modeling - Texturing - Lighting - Rendering - Post-production",
  //     projectTechnology: "Autodesk Maya, Cinema 4D, Octane",
  //     images: {
  //       createMany: {
  //         data: [
  //           { imageUrl: "https://i.ibb.co/M8pP7Rw/bora.webp" },
  //           { imageUrl: "https://i.ibb.co/qCbn6bn/lora.webp" },
  //         ],
  //       },
  //     },
  //   },
  // });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <ProjectCard />
    </main>
  );
}
