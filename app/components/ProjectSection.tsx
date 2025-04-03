import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import projects from "./ProjectInfo";
//import SlideUp from "./SlideUp"; bounce annimation at projects

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-14">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              {/*<SlideUp offset="-300px opx -300px 0px">*/}
              <div className="flex flex-col animate-slideUpCubiBezier md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.route} target="_blank">
                    <Image
                      src={project.image}
                      alt="snapshot of my project"
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.figma} target="_blank">
                      <FiFigma
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {/*</SlideUp>*/}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
