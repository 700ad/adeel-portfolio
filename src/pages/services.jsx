import React, { useContext } from "react";
import FullWidthText from "../components/FullWidthText";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { ThemeContext } from "../components/Layout";
import Footer from "../components/Footer";
import Homeprojects from "../components/HomeProjects";

const services = [
  "Web Development",
  "Branding / ReBranding",
  "Headless Development",
  "Mobile Development",
  "ECommerce Development",
  "Wordpress Development",
];

export default function CaseStudies() {
  const theme = useContext(ThemeContext);
  const offsetHeight = 50;
  const { scrollY, scrollYProgress } = useScroll();
  const yRange = useTransform(scrollY, [500 - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  return (
    <>
      <div className="relative z-20 px-4 md:px-8">
        <header className="w-screen sticky z-20 top-0 md:py-20 p-4 pt-14 md:px-10">
          <div
            className={`grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-2 ${
              theme === "dark" ? "text-white" : " text-black"
            }`}
          >
            <motion.div style={{ opacity }} className="col-span-1">
              <FullWidthText
                theme={theme}
                word1="Services &"
                word2="Expertise"
              />
            </motion.div>
            <motion.div
              style={{ opacity }}
              className="col-span-1  relative overflow-hidden h-44 max-h-96 lg:h-full"
            ></motion.div>
            <motion.div
              style={{ opacity }}
              className="col-span-1 lg:row-start-2 lg:col-start-2"
            >
              <p className="lg:w-2/3 font-medium uppercase relative text-xl nord">
                I specialize in digital design, development and creative
                strategy. I uncover insights, design concepts and develop
                solutions - both large and small.
              </p>
            </motion.div>
          </div>
        </header>
        <div
          className={`w-full p-4 py-48 relative z-20 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <div className="flex items-center justify-start opacity-60">
            <div
              className={`w-3 h-3 mr-2 rounded-full nord ${
                theme === "dark" ? "bg-white" : "bg-black"
              }`}
            ></div>
            <p className="nord">Services</p>
          </div>
          {services.map((service, ind) => {
            return (
              <div key={ind} className="flex items-baseline justify-between">
                <div
                  className={`lg:w-3/5 cursor-pointer duration-700 transition-all flex flex-col ${
                    theme === "dark"
                      ? "hover:bg-white/70 hover:text-black"
                      : "hover:bg-black/70 hover:text-white"
                  }`}
                >
                  <hr
                    className={`border-b w-full border-b-black ${
                      theme === "dark" ? "bg-white" : "bg-black"
                    }`}
                  />
                  <div className="flex px-2 flex-col lg:flex-row items-baseline py-4 justify-between">
                    <p className="text-4xl radio uppercase">{service}</p>
                    <div className="nord">See Projects</div>
                  </div>
                </div>
              </div>
            );
          })}
          <hr
            className={`border-b lg:w-3/5 border-b-black ${
              theme === "dark" ? "bg-white" : "bg-black"
            }`}
          />
        </div>
        <div>
          <div className="flex items-center pb-10 justify-start opacity-60">
            <div className="w-3 h-3 bg-black mr-2 ml-4 rounded-full "></div>
            <p className="nord">Technologies</p>
          </div>
          <div className="p-4 grid grid-cols-3 md:grid-cols-7 lg:grid-cols-7">
            <div
              className={`col-span-1 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 col-start-3 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 col-start-5 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 col-start-7 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-2 col-start-2 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-2 col-start-4 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-2 col-start-6 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-3 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-3 col-start-3 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-3 col-start-5 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
            <div
              className={`col-span-1 row-start-3 col-start-7 aspect-square bg-gradient-to-br from-transparent flex items-center justify-center ${
                theme === "dark" ? "to-stone-600" : "to-stone-300"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-orange-200/10"></div>
      <Footer />
    </>
  );
}
