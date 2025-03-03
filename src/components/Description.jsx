import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Компонент ScrollIndicator
const ScrollIndicator = ({ sections, activeSection }) => {
  return (
    <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col items-center gap-4 z-50">
      {/* Контейнер для индикатора (линия и точки) */}
      <div className="absolute top-0 left-[-16px] h-full flex flex-col items-center gap-4">
        {/* Вертикальная белая линия */}
        <div className="h-full w-0.5 bg-white opacity-30" />

        {/* Точки индикатора */}
        {sections.map(
          (section, index) =>
            section.id !== 0 && (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeSection === section.id
                    ? "bg-white scale-125" // Активная секция
                    : "bg-white opacity-30 scale-100 group-hover:opacity-70" // Неактивная секция с hover-эффектом
                }`}
              />
            )
        )}
      </div>

      {/* Текст (Start, 01, 02, 03) */}
      {sections.map((section, index) => (
        <div
          key={index}
          className="relative flex items-center justify-center cursor-pointer group"
          onClick={() => {
            document.getElementById(`section-${section.id}`).scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <p
            className={`${
              section.id === 0 ? "ml-8" : "ml-4" // Отступ для "Start"
            } font-gilroy text-sm font-medium transition-all ${
              activeSection === section.id
                ? "text-white scale-105" // Активная секция
                : "text-white opacity-50 group-hover:opacity-80" // Неактивная секция с hover-эффектом
            }`}
          >
            {section.label}
          </p>
        </div>
      ))}
    </div>
  );
};
// Основной компонент Description
const Description = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: 0, label: "Start" },
    { id: 1, label: "01" },
    { id: 2, label: "02" },
    { id: 3, label: "03" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.split("-")[1];
            setActiveSection(Number(sectionId));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionsElements = document.querySelectorAll(".section");
    sectionsElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#0b1d26] h-full relative -mt-8">
      {/* Scroll Indicator */}
      <ScrollIndicator sections={sections} activeSection={activeSection} />

      {/* Секция 1 */}
      <div id="section-1" className="section container mx-auto px-4 mt-60">
        <div className="relative">
          {/* Большой номер "01" на заднем плане */}
          <motion.h1
            className="text-white font-gilroy text-[240px] leading-[240px] ml-16 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            01
          </motion.h1>

          {/* Контейнер для текста и изображения */}
          <div className="absolute top-24 left-12 flex flex-col items-center">
            <div className="flex w-full max-w-7xl">
              {/* Текст слева */}
              <div className="flex flex-col ml-32 max-w-md">
                <div className="flex flex-row items-center mt-2">
                  <motion.img
                    src="/icon/Line.svg"
                    alt="Logo"
                    className="ml-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.p
                    className="text-yellow-400 font-gilroy ml-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    GET STARTED
                  </motion.p>
                </div>
                <motion.h2
                  className="text-white text-[28px] font-chronicle mt-6 ml-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  What level of hiker are you?
                </motion.h2>
                <motion.p
                  className="text-white text-[16px] mt-6 ml-12 font-gilroy leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Determining what level of hiker you are can be an important
                  tool when planning future hikes. This hiking level guide will
                  help you plan hikes according to different hike ratings set by
                  various websites like All Trails and Modern Hiker. What type
                  of hiker are you – novice, moderate, advanced moderate,
                  expert, or expert backpacker?
                </motion.p>
                <div className="flex items-center mt-6 ml-12">
                  <motion.span
                    className="text-yellow-400 font-gilroy cursor-pointer hover:underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    Read More
                  </motion.span>
                  <motion.img
                    src="/public/icon/arrow_downward_24px.svg"
                    className="w-5 h-5 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>

              {/* Изображение справа */}
              <motion.div
                className="flex justify-center items-center ml-46 mt-[-140px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <img
                  src="/images/01.png"
                  alt="bike"
                  className="h-135 w-135 rounded-4xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция 2 */}
      <div id="section-2" className="section relative mt-96 mr-15">
        {/* Большой номер "02" на заднем плане */}
        <motion.h1
          className="absolute right-0 text-right text-white font-gilroy text-[240px] leading-[240px] mr-98 mt-[75px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          02
        </motion.h1>

        {/* Контейнер для текста и изображения */}
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Изображение слева */}
          <motion.div
            className="w-1/2 flex justify-center -ml-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <img
              src="/images/02.png"
              alt="gear"
              className="h-135 w-135 rounded-4xl"
            />
          </motion.div>

          {/* Текст справа */}
          <div className="w-1/2 flex flex-col items-end mr-5">
            <div className="max-w-md">
              <div className="flex flex-row items-center justify-end mt-44 mr-50">
                <motion.img
                  src="/icon/Line.svg"
                  alt="Logo"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.p
                  className="text-yellow-400 ml-4 font-gilroy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  HIKING ESSENTIALS
                </motion.p>
              </div>
              <motion.h2
                className="text-white font-chronicle text-[28px] mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Picking the right <br />
                <span className="mr-8">Hiking Gear!</span>
              </motion.h2>
              <motion.blockquote
                className="text-white text-[16px] mt-8 font-gilroy leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                The nice thing about beginning hiking is that you don’t really
                need any special gear, you can probably get away with things you
                already have. Let’s start with clothing. A typical mistake
                hiking beginners make is wearing jeans and regular clothes,
                which will get heavy and chafe if they get sweaty or wet. Make
                sure to wear moisture-wicking fabrics like synthetic or merino
                wool, as they will keep you dry and comfortable during your
                hike.
              </motion.blockquote>
              <div className="flex items-center justify-end mt-6 mr-85">
                <motion.span
                  className="text-yellow-400 font-gilroy cursor-pointer hover:underline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                >
                  Read More
                </motion.span>
                <motion.img
                  src="/public/icon/arrow_downward_24px.svg"
                  className="w-5 h-5 ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Секция 3 */}
      <div id="section-3" className="section container mx-auto px-4 mt-60">
        <div className="relative">
          {/* Большой номер "03" на заднем плане */}
          <motion.h1
            className="text-white font-gilroy text-[240px] leading-[240px] ml-16 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            03
          </motion.h1>

          {/* Контейнер для текста и изображения */}
          <div className="absolute top-24 left-12 flex flex-col items-center">
            <div className="flex w-full max-w-7xl">
              {/* Текст слева */}
              <div className="flex flex-col ml-32 max-w-md mt-[-8px]">
                <div className="flex flex-row items-center">
                  <motion.img
                    src="/icon/Line.svg"
                    alt="Logo"
                    className="ml-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.p
                    className="text-yellow-400 ml-4 mt-[-4px] font-gilroy"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    WHERE YOU GO IS THE KEY
                  </motion.p>
                </div>
                <motion.h2
                  className="text-white text-[24px] font-chronicle mt-2 ml-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Understand Your Map & Timing
                </motion.h2>
                <motion.p
                  className="text-white text-[16px] mt-[27px] ml-12 font-gilroy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  To start, print out the hiking guide and map. If it’s raining,
                  throw them in a Zip-Lock bag. Read over the guide, study the
                  map, and have a good idea of what to expect. I like to know
                  what my next landmark is as I hike. For example, I’ll read the
                  guide and know that say, in a mile, I make a right turn at the
                  junction..
                </motion.p>
                <div className="flex items-center mt-5 ml-12">
                  <motion.span
                    className="text-yellow-400 font-gilroy cursor-pointer hover:underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    Read More
                  </motion.span>
                  <motion.img
                    src="/public/icon/arrow_downward_24px.svg"
                    className="w-5 h-5 ml-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>

              {/* Изображение справа */}
              <motion.div
                className="flex justify-center items-center ml-46 mt-[-140px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <img
                  src="/images/03.png"
                  alt="bike"
                  className="h-135 w-135 rounded-4xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
