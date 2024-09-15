import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <img
              src="assets/cv.png"
              alt="cv"
            />
          </div>
        </a>
      </div>
    </section>
  ); 
};

export default SectionWrapper(Tech, "");
