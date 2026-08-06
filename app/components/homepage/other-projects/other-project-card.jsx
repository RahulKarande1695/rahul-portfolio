import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const OtherProjectCard = ({ project }) => {
  return (
    <div className="h-[300px] rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] overflow-hidden transition-all duration-300 hover:border-violet-500 hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-3">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm leading-6 line-clamp-2 mt-2">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="text-xs px-2 py-1 rounded-md bg-[#11152c] text-cyan-300"
            >
              {item}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-md bg-violet-700 text-white">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-violet-500 px-5 py-2 text-white hover:bg-violet-600 transition-all duration-300"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2 text-white hover:bg-violet-700 transition-all duration-300"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherProjectCard;
