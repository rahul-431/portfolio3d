import { motion } from "framer-motion";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-7"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        fugit consequuntur cupiditate minima autem nam harum tempore omnis
        libero? Error dignissimos porro laborum labore magnam numquam totam
        repudiandae optio alias rem libero saepe est, maiores ea voluptas,
        soluta aut recusandae.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((item, index) => (
          <ServiceCard key={index} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
