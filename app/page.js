import ProjectCard from "@components/ProjectCard";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async function Home() {
  // await prisma.project.create({
  //   data: {
  //     projectName: "Living Space Interior (UE5/Lumen)",
  //     projectFeaturedImage: "https://i.ibb.co/fC3rFFJ/arch1-1.webp",
  //     projectSlug: "living-space-interior",
  //     projectDescription:
  //       "Modeling - Texturing - Lighting - Rendering - Post-production",
  //     projectTechnology:
  //       "Autodesk Maya, Quixel Suite, Unreal Engine, Photoshop",
  //     images: {
  //       createMany: {
  //         data: [
  //           { imageUrl: "https://i.ibb.co/fC3rFFJ/arch1-1.webp" },
  //           { imageUrl: "https://i.ibb.co/KKJ4wt1/arch1-2.webp" },
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
