import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import {projects2 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Hook pour détecter si l'écran est mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// Composant pour chaque projet
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
      className={isMobile ? "w-full" : ""}
    >
      <Tilt
        options={{
          max: isMobile ? 0 : 45, // Désactiver le tilt sur mobile
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
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

// Composant principal Works
const Works3 = () => {
  const isMobile = useIsMobile();

  return (
    <>

      {/* Section des projets */}
      <div className={`mt-5 flex ${isMobile ? "flex-col" : "flex-wrap"} gap-7`}>
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

export default SectionWrapper(Works3, "projects3");
