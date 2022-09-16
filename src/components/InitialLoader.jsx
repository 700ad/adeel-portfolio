import React from "react";
import { motion } from "framer-motion";

const spring = {
  duration: 0.5,
  delay: 0.5,
  ease: "easeInOut",
  power: "3",
};

const mainTransition = {
  duration: 0.8,
  delay: 1.4,
  ease: "easeInOut",
  power: "3",
};

export default function InitialLoader() {
  return (
    <motion.div
      initial={{ height: "100vh" }}
      animate={{ transform: "translateY(-100vh)" }}
      transition={mainTransition}
      className="fixed top-0 left-0 right-0 z-50 h-screen flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ height: "12rem" }}
        animate={{ height: "0rem", transform: "translateY(12rem)" }}
        transition={spring}
        className="bg-white h-48 w-40"
      ></motion.div>
    </motion.div>
  );
}
