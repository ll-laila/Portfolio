import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { cv } from "../assets";

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>All</p>
          <h3 className={styles.sectionHeadText}>Resume.</h3>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-2`}>
        <motion.div
          variants={fadeIn("", "spring", 1 * 0.5, 0.75)}
          className='bg-black-200 p-7 rounded-3xl xs:w-[1100px] w-full'
        >
          <img
            src={cv}
            alt="cv"
            className='w-full h-full object-cover rounded-3xl'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
