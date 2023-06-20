import SingleProject from "@components/SingleProject";
import { getSingleProject } from "@utils/project";
export default async function Page({ params }) {
  const singleProject = await getSingleProject(params.slug);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <SingleProject singleProject={singleProject} />
    </main>
  );
}
