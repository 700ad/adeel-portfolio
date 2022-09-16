import React, { useContext } from "react";
import { ThemeContext } from "../components/Layout";
import FulWidthText from "../components/FullWidthText";
import PageRevealer from "../components/PageRevealer";

export default function Contact() {
  const theme = useContext(ThemeContext);
  return (
    <div className="relative z-20">
      <div className="relative z-20 px-4 md:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <div className="col-span-1 md:py-20 pt-10  md:min-h-screen flex flex-col justify-between items-start ">
            <div className="md:py-32 md:pr-32 w-full flex flex-col py-10">
              <input
                placeholder="Name"
                className={`border-2 my-4 text-2xl  p-4 w-full transition-all duration-300 ${
                  theme === "dark" ? "finputd" : "finputl"
                }`}
              />
              <input
                placeholder="Email"
                className={`border-2 my-4 text-2xl  p-4 w-full transition-all duration-300 ${
                  theme === "dark" ? "finputd" : "finputl"
                }`}
              />
              <input
                placeholder="Budget"
                className={`border-2 my-4 text-2xl  p-4 w-full transition-all duration-300 ${
                  theme === "dark" ? "finputd" : "finputl"
                }`}
              />
              <textarea
                placeholder="Message"
                rows="6"
                className={`border-2 my-4 text-2xl  p-4 w-full transition-all duration-300 ${
                  theme === "dark" ? "finputd" : "finputl"
                }`}
              />
              <div className="w-1/4 my-4">
                <div
                  className={`flex p-4 cursor-pointer text-2xl  duration-300 transition-all items-center justify-center
            
            ${
              theme === "dark"
                ? "bg-white text-black  hover:bg-white/20 hover:text-white"
                : "bg-black text-white hover:bg-black/20 hover:text-black"
            }
            
            `}
                >
                  SEND
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              &copy; 2020 &mdash; All Rights Reserved.
            </div>
          </div>
          <div
            className={`col-span-1  py-20 md:min-h-screen flex flex-col justify-between items-start`}
          >
            <div className="w-full">
              <div className="md:py-32 w-full">
                <FulWidthText word1="Currently Available" />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center my-16 justify-between">
                <div className="uppercase tracking-widest">Get In Touch</div>
                <div className="nord text-xl hover-line cursor-pointer">
                  hello@adeelfarzand.com
                </div>
              </div>
            </div>

            <div className="flex flex-col col-span-1">
              <div className="nord opacity-60">Connect</div>
              <div className="text-2xl mt-8">
                <div className="">Twitter</div>
                <div className="">LinkedIn</div>
                <div className="">Instagram</div>
                <div className="">Github</div>
              </div>
            </div>
            <div className="md:hidden mt-4 block">
              &copy; 2020 &mdash; All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
