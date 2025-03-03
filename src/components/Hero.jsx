import { motion } from "framer-motion";
import instagramIcon from "../socials/instagram.svg";
import twitterIcon from "../socials/twitter.svg";

const Hero = () => {
  return (
    <div className="text-center mt-80 ml-[-350px]">
      <div className="relative h-auto w-auto">
        {/* Анимация логотипа */}
        <motion.div
          className="flex items-center justify-center mr-44"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <img src="/icon/Line.svg" alt="Logo" />
          <p className="font-gilroy text-yellow-400 ml-2 text-3xl">
            A HIKING GUIDE
          </p>
        </motion.div>

        {/* Анимация заголовка */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <h1 className="font-chronicle font-bold text-white mt-2 text-6xl leading-tight text-center opacity-100 shadow-lg">
            Be Prepared For The <br />
            <span className="ml-22">Mountains And Beyond!</span>
          </h1>
        </motion.div>

        {/* Анимация стрелки прокрутки (можно оставить, если хочешь стрелку без прокрутки) */}
        <motion.div
          className="flex items-center justify-center mt-6 gap-4 mr-[350px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          <p className="font-gilroy text-white text-[18px]">scroll down</p>
          <img
            src="/icon/arrow_downward_24px.png"
            alt="Arrow"
            className="w-6 h-6"
          />
        </motion.div>

        {/* Анимация Follow Us */}
        <motion.div
          className="relative inline-flex mr-[72rem] top-[-100px] text-white gap-5 transform rotate-90"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
        >
          <p className="font-gilroy text-[18px]">Follow Us</p>
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
          <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
