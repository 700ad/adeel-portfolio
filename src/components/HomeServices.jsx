import React, { useContext } from "react";
import { ThemeContext } from "./Layout";

export default function HomeServices() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`flex z-30 relative w-screen flex-col p-4 md:px-10 md:py-20 lg:py-40 ${
        theme === "dark" ? "bg-white/80 text-black" : "bg-black text-white"
      }`}
    >
      <div className="grid grid-cols-1 helv md:grid-cols-3 gap-16 lg:grid-cols-5">
        <div className="col-span-1">
          <p className="nord">&mdash; Expertise</p>
        </div>
        <div className="col-span-1 md:col-span-3 md:row-start-2 text-2xl md:text-3xl uppercase">
          We are passionate about uncovering the best digital innovations for
          forward—thinking brands looking to push boundaries and drive
          significant impact.
        </div>
        <div className="col-span-1 md:row-start-3 flex flex-col md:col-start-4 text-2xl md:text-4xl uppercase">
          <p>Branding</p>
          <p>Web Dev</p>
          <p>Fullstack Dev</p>
        </div>

        <div className="col-span-1  md:row-start-3 flex flex-col md:col-start-5 text-2xl md:text-4xl uppercase">
          <p>UI/UX</p>
          <p>Headless Dev</p>
          <p>ECommerce</p>
        </div>
      </div>
    </div>
  );
}
