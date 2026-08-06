import { skillsData } from "@/utils/data/skills";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[10px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {" "}
        {skillsData.map((section) => (
          <div
            key={section.category}
            className="rounded-xl border border-[#1f223c] bg-[#11152c] flex flex-col h-[450px]"
          >
            <div className="sticky top-0 bg-[#11152c] z-10 p-5 border-b border-[#1f223c]">
              <h3 className="text-xl font-semibold text-violet-400">
                {section.category}
              </h3>
            </div>

            <div className="flex-1 overflow-y-auto p-5 custom-scrollbar">
              <div className="space-y-3">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between border-b border-[#1f223c] pb-3"
                  >
                    <span className="text-white text-sm">{skill.name}</span>

                    <span className="text-xs text-cyan-400 whitespace-nowrap">
                      {skill.exp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
