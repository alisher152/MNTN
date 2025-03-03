import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  useEffect(() => {
    // Проверьте, что стили загружены
    const checkStyles = () => {
      if (document.styleSheets) {
        for (let sheet of document.styleSheets) {
          console.log(sheet);
        }
      }
    };

    checkStyles();
  }, []);

  return (
    <div className="bg-[#0b1d26] h-[2060px] w-full pl-40">
      <div className="h-[1000px] w-full relative">
        <motion.img
          src="/icon/Logo.svg"
          alt="MNTN Logo"
          className="absolute bottom-[-650px] left-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          className="font-gilroy text-white pt-430 pl-0 text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Get out there & discover your next <br /> slope, mountain &
          destination!
          <p className="opacity-10 font-gilroy pt-50">
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </motion.h1>
      </div>

      <div className="h-[1000px] w-full flex pt-165 pl-150 text-[24px] font-gilroy text-yellow-400">
        <motion.div
          className="flex-1 flex flex-col gap-4 mt-[-50px] z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h1>More on The Blog</h1>
          <button className="text-white text-[18px] leading-18 hover:text-yellow-400 mr-65">
            About MNTN
          </button>
          <button className="text-white text-[18px] leading-13 hover:text-yellow-400 mr-65 whitespace-nowrap">
            Contributors & Writers
          </button>
          <button className="text-white text-[18px] leading-13 hover:text-yellow-400 mr-65">
            Write For Us
          </button>
          <button className="text-white text-[18px] leading-13 hover:text-yellow-400 mr-68">
            Contact Us
          </button>
          <button className="text-white text-[18px] leading-13 hover:text-yellow-400 mr-65">
            Privacy Policy
          </button>
        </motion.div>

        <motion.div
          className="flex-1 pl-16 flex flex-col gap-4 mt-[-50px] ml-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h1>More on MNTN</h1>

          <div className="flex flex-col gap-4 mt-4 mr-55 z-50">
            <button className="text-white text-[18px] leading-13 hover:text-yellow-400">
              The Team
            </button>
            <button className="text-white text-[18px] leading-13.5 hover:text-yellow-400 mr-10">
              Jobs
            </button>
            <button className="text-white text-[18px] leading-13.5 hover:text-yellow-400 mr-8">
              Press
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
