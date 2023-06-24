import { motion } from "framer-motion";
import { styles } from "../style";
import { BitcoinCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c5a536]" />
          <div className="w-1 sm:h-80 h-40 gold-gradient" />
        </div>

        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Consulting <br /> Businesses
            <br />
            <span className="text-[#c5a536]"> To Grow.</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            Deep Point Lab specializes in expert tech consultancy{" "}
            <br className="sm:block hidden" /> services that empower businesses
            in the digital landscape.
          </p>
        </div>
      </div>
      <BitcoinCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-black mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
