import React, { useContext } from "react";
import { ThemeContext } from "./Layout";

export default function Intro() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={`flex z-30 relative w-screen flex-col p-4 md:px-10 md:py-20 lg:py-40 ${
        theme === "dark" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <div className="grid grid-cols-1  md:grid-cols-3 gap-16 lg:grid-cols-5">
        <div className="col-span-1">
          <p className="nord flex items-center justify-start">
            <div
              className={`w-3 h-3 rounded-full mr-2 opacity-60 ${
                theme === "dark" ? "bg-black" : "bg-white"
              }`}
            ></div>{" "}
            introduction
          </p>
        </div>
        <div className="col-span-1 helv md:col-span-3 md:row-start-2 text-2xl md:text-3xl uppercase">
          PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION
          OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB
          EXPERIENCES.
        </div>
        <div className="col-span-1 helv md:col-span-3 md:row-start-3 text-2xl md:text-3xl uppercase">
          WHEN I'M NOT BUILDING OR EXPLORING NEW WEB EXPERIENCES, I'M PROBABLY
          PLAYING GAMES OR WATCHING FOOTBALL.
        </div>
        <div className="col-start-1 md:col-span-3 hidden md:flex col-span-1 md:row-start-4"></div>
        <div className="col-span-1 helv md:col-span-1 md:row-start-4 text-2xl md:text-xl uppercase">
          I have years of experience working and collaborating on product teams
          and leading engineering efforts.
        </div>
        <div className="col-span-1 helv md:col-span-1 md:row-start-4 text-2xl md:text-xl uppercase">
          With my experience in UI and product engineering, I solve product
          problems and build appealing usable web experiences.
        </div>
      </div>
    </div>
  );
}
