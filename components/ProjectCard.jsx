import Image from "next/image";
import Link from "next/link";
import { projects } from "@utils/dummy";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-screen-xl w-full pt-0 md:pt-24">
      {projects.map((project) => {
        return (
          <Link href={project.project_name}>
          <Image
            src={project.image}
            width={160}
            height={240}
            className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
          />
        </Link>
        )
      })}
    </div>
  );
};

export default ProjectCard;
