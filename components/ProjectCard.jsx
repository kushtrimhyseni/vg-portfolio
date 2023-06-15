import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12 max-w-screen-xl w-full pt-0 md:pt-24">
      <Image
        src="/assets/product.webp"
        width={160}
        height={240}
        className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
      />
      <Image
        src="/assets/product.webp"
        width={160}
        height={240}
        className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
      />
      <Image
        src="/assets/product.webp"
        width={160}
        height={240}
        className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
      />
      <Image
        src="/assets/product.webp"
        width={160}
        height={240}
        className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
      />
      <Image
        src="/assets/product.webp"
        width={160}
        height={240}
        className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
      />
      <Image
        src="/assets/product.webp"
        width={160}
        height={240}
        className="w-[160px] h-[240px] md:w-full md:h-full object-cover"
      />
    </div>
  );
};

export default ProjectCard;
