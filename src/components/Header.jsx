import React, { useContext } from "react";
import FullWidthText from "./FullWidthText";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { ThemeContext } from "./Layout";

export default function Header() {
  const theme = useContext(ThemeContext);

  const offsetHeight = 50;
  const { scrollY, scrollYProgress } = useScroll();
  const yRange = useTransform(scrollY, [500 - offsetHeight, 0], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  return (
    <header className="w-screen sticky z-20 top-0 md:py-20 p-4 pt-14 md:px-10">
      <div
        className={`grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-2 ${
          theme === "dark" ? "text-white" : " text-black"
        }`}
      >
        <motion.div style={{ opacity }} className="col-span-1">
          <FullWidthText theme={theme} word1="ADEEL&copy;" word2="FARZAND" />
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="col-span-1  relative overflow-hidden h-44 max-h-96 lg:h-full"
        ></motion.div>
        <motion.div
          style={{ opacity }}
          className="col-span-1 lg:row-start-2 lg:col-start-2"
        >
          <FullWidthText theme={theme} word1="CREATIVE" word2="ENGINEER" />
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="col-span-1 bg-gradient-to-br py-84 lg:h-full relative overflow-hidden flex flex-col lg:items-start items-center justify-between max-h-96"
        >
          <p className="lg:w-1/3 font-medium relative text-xl nord">
            I help companies generate&nbsp; more revenue by creating better
            digital products.
          </p>
          <motion.div
            style={{ rotate: scrollYProgress }}
            className="w-20 h-20 mt-10 relative"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g transform="translate(-395.5 -220.5)">
                <line
                  y2="100"
                  transform="translate(445.5 220.5)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="matrix(0.966, 0.259, -0.259, 0.966, 458.441, 222.204)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(470.5 227.199) rotate(30)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(480.855 235.145) rotate(45)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(488.801 245.5) rotate(60)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="matrix(0.259, 0.966, -0.966, 0.259, 493.796, 257.559)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(495.5 270.5) rotate(90)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="matrix(-0.259, 0.966, -0.966, -0.259, 493.796, 283.441)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(488.801 295.5) rotate(120)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(480.855 305.855) rotate(135)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="translate(470.5 313.801) rotate(150)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
                <line
                  y2="100"
                  transform="matrix(-0.966, 0.259, -0.259, -0.966, 458.441, 318.796)"
                  fill="none"
                  stroke={theme === "dark" ? "#fff" : "#000"}
                  strokeWidth="2"
                />
              </g>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
