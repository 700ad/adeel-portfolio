import React, { useContext, useState } from "react";
import { ThemeContext } from "./Layout";
import FullWidthText from "../components/FullWidthText";
import { Link, navigate } from "gatsby";
import { gsap } from "gsap";

export default function Footer() {
  const [hidden, setHidden] = useState(true);

  const theme = useContext(ThemeContext);
  const modeSwitcher = () => {
    gsap
      .timeline()
      .set("#outer", { display: "block" })
      .set(".overlay__path_m", {
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .to(
        ".overlay__path_m",
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
        },
        0
      )
      .to(".overlay__path_m", {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        onComplete: () => {
          navigate("/contact");
        },
      })
      .set(".overlay__path_m", {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(".overlay__path_m", {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
      })
      .to(".overlay__path_m", {
        duration: 0.8,
        ease: "power4",
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        onComplete: () => {
          gsap.set("#outer", { display: "none" });
        },
      });
  };

  return (
    <>
      <div
        className={`h-screen relative z-20 px-4 md:px-8 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <footer className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 py-20 flex items-end justify-start">
            <p className="hidden md:block">
              &copy; 2020 &mdash; All Rights Reserved.
            </p>
          </div>
          <div className="col-span-1 py-20 h-screen flex flex-col justify-between items-start ">
            <div className="w-full">
              <div onClick={() => modeSwitcher()} className="md:py-32 w-full">
                <FullWidthText word1="Start A Project" underline="true" />
              </div>
              <div className="w-full flex flex-col md:flex-row items-center my-16 justify-between">
                <div className="uppercase nord opacity-60">Get In Touch</div>
                <div className=" text-3xl hover-line cursor-pointer">
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
            <div className="md:hidden">
              &copy; 2020 &mdash; All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
      <div id="outer" className="mo fixed inset-0 z-50 hidden">
        <svg
          className="overlay w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="overlayPath"
            className="overlay__path_m"
            fill="black"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
      </div>
    </>
  );
}
