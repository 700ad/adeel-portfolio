import React, { useContext } from "react";
import { ThemeContext } from "./Layout";

export default function BottomNavigator() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`mx-auto relative z-20 flex items-center justify-center py-20 ${
        theme === "dark" ? "bg-white/90 text-black" : "bg-black/90 text-white"
      }`}
    >
      <p className="hover-line text-9xl text-center">Services</p>
    </div>
  );
}
