import { otherProjects } from "@/utils/data/other-project";
import OtherProjectCard from "./other-project-card";

const OtherProjects = () => {
  return (
    <section id="other-projects" className="relative z-50 my-16 lg:my-28">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 blur-3xl opacity-30"></div>
        <div className="flex justify-center my-2 lg:py-2">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] text-white px-5 py-2 text-xl rounded-md">
              Other Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      <div className="pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {otherProjects.map((project) => (
            <OtherProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
