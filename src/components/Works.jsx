import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects1, projects2, projects3 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Custom hook to check if the screen is mobile-sized
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={isMobile ? "w-full" : "sm:w-[360px]"}
    >
      <Tilt
        options={{
          max: isMobile ? 0 : 45, // Disable tilt on mobile
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world
          examples of my work. Each project is briefly described with links to code
          repositories and live demos. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      {/* Display projects in multiple sections */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects1.map((project, index) => (
          <div key={`project-${index}`} className={isMobile ? "w-full" : ""}>
            <ProjectCard
              index={index}
              isMobile={isMobile}
              {...project}
            />
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects2.map((project, index) => (
          <div key={`project-${index}`} className={isMobile ? "w-full" : ""}>
            <ProjectCard
              index={index}
              isMobile={isMobile}
              {...project}
            />
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects3.map((project, index) => (
          <div key={`project-${index}`} className={isMobile ? "w-full" : ""}>
            <ProjectCard
              index={index}
              isMobile={isMobile}
              {...project}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
