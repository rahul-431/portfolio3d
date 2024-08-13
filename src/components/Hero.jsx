import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative h-screen mx-auto w-full">
      <div
        className={`${styles.paddingX} absolute inset-0 top-24 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 violet-gradient h-40 sm:h-80" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Rahul</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-5`}>
            I develop 3D visuals, user <br className="block sm:hidden" />{" "}
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute flex justify-center items-center bottom-2 w-full">
        <a
          href="#about"
          className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-4 h-4 rounded-full bg-secondary mb-1"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
