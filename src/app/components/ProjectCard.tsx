import React from "react";
import { CodeBracketIcon, EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  impact?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  impact,
}) => {
  return (
    <div className="group">
      <div
        className="h-52 md:h-72 rounded-t-xl relative overflow-hidden group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 border-[1px] border-[#181818] transition-all duration-300 group-hover:border-purple-500/50">
        <h5 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>
        {impact && (
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex items-center mb-2">
              <HeartIcon className="h-5 w-5 text-pink-400 mr-2" />
              <span className="text-sm text-white font-medium">Why It Matters</span>
            </div>
            <p className="text-[#ADB7BE] text-sm italic">{impact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
