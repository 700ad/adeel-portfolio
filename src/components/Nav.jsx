import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { gsap } from "gsap";

import FullWidthText from "./FullWidthText";

const navLinks = [
  { name: "Home", route: "/" },
  { name: "Services", route: "/services" },
  { name: "Case Studies", route: "/case-studies" },
  { name: "About", route: "/about" },
  { name: "Contact", route: "/contact" },
];

export default function Nav({ changeTheme, theme }) {
  const [hidden, setHidden] = useState(true);

  const menuNavigaror = (route) => {
    navigate(route);
    collapseMenu();
  };

  const expandMenu = () => {
    setHidden(!hidden);
    document.body.classList.add("no-scroll");
    gsap
      .timeline()
      .set(".overlay__path", {
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .to(
        ".overlay__path",
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 0 V 50 Q 50 100 100 50 V 0 z" },
        },
        0
      )
      .to(".overlay__path", {
        duration: 0.3,
        ease: "power2",
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        onComplete: () => {
          gsap.to(".link", { opacity: 1, duration: 0.8, stagger: 0.08 });
        },
      });
  };

  const collapseMenu = () => {
    gsap.to(".link", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.08,
      onComplete: () => {
        gsap
          .timeline()
          .set("#overlayPath", {
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
          })
          .to("#overlayPath", {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
          })
          .to("#overlayPath", {
            duration: 0.8,
            ease: "power4",
            attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
            onComplete: () => {
              setHidden(!hidden);
              document.body.classList.remove("no-scroll");
            },
          });
      },
    });
  };

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
          changeTheme();
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
    <nav className="p-4 md:px-10 md:py-8 fixed z-30 top-0 left-0 right-0 flex items-center justify-between">
      <Link to="/">
        <div className="flex items-center justify-start">
          <div
            className={`w-2 h-2 rounded-full ${
              theme === "dark" ? "bg-white" : "bg-black"
            }`}
          ></div>
          <h1
            className={`font-bold ml-1 
            ${theme === "dark" ? "text-white" : "text-black"}
        
        `}
          >
            Adeel Farzand
          </h1>
        </div>
      </Link>
      <div className="flex items-center justify-center">
        <div
          onClick={() => modeSwitcher()}
          className={`w-8 mr-4 aspect-square ${
            theme === "dark" ? "bg-white" : "bg-black"
          }`}
        ></div>

        <div
          onClick={() => menuNavigaror("/contact")}
          className={`flex py-1 px-4 cursor-pointer  duration-300 transition-all items-center justify-center
            ${
              theme === "dark"
                ? "bg-white text-black  hover:bg-white/10 hover:text-white"
                : "bg-black text-white hover:bg-black/10 hover:text-black"
            }
            
            `}
        >
          Contact
        </div>
        <div
          onClick={() => expandMenu()}
          className="flex flex-col cursor-pointer group h-6 items-center justify-center ml-4"
        >
          <div
            className={`w-10 border transition-all duration-200 ease-in-out group-hover:translate-y-0 transform -translate-y-1 ${
              theme === "dark"
                ? "border-white bg-white"
                : "border-black bg-black"
            }`}
          ></div>
          <div
            className={`w-10 border transition-all duration-200 ease-in-out group-hover:translate-y-0 transform translate-y-1 ${
              theme === "dark"
                ? "border-white bg-white"
                : "border-black bg-black"
            }`}
          ></div>
        </div>
      </div>
      <div className="absolute hidden top-0 left-0 right-0 bottom-0 bg-black">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <h1 className="font-semibold text-white ml-1">Adeel Farzand</h1>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">Contact</div>
            <div className="flex flex-col items-start justify-center h-2 ml-4">
              <div className="w-10 border border-white bg-white"></div>
            </div>
          </div>
        </div>
        <div className="flex p-4 flex-col items-start justify-end mt-20 text-white">
          <div className=" text-6xl">Home</div>
          <div className=" text-6xl">Projects</div>
          <div className=" text-6xl">About</div>
          <div className=" text-6xl">Contact</div>
        </div>
      </div>
      <div
        className={`fixed inset-0  grid grid-cols-1 z-50 ${
          hidden ? "hidden" : ""
        }`}
      >
        <svg
          className="overlay w-full h-full"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            id="overlayPath"
            className="overlay__path"
            fill={theme === "dark" ? "white" : "black"}
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </svg>
        <div className="w-screen absolute top-0 p-4 left-0 right-0 z-50">
          <nav className="p-4 md:px-10 md:py-8 mx-auto absolute top-0 left-0 right-0 flex items-center justify-between">
            <div className="flex link opacity-0 items-center justify-start">
              <div
                className={`w-2 h-2 rounded-full ${
                  theme === "dark" ? "bg-black" : "bg-white"
                }`}
              ></div>
              <h1
                className={`font-bold ml-1 
            ${theme === "dark" ? "text-black" : "text-white"}
        
        `}
              >
                Adeel Farzand
              </h1>
            </div>
            <div className="flex items-center justify-center">
              <div
                onClick={() => modeSwitcher()}
                className={`w-8 link mr-4 opacity-0 aspect-square ${
                  theme === "dark" ? "bg-black" : "bg-white"
                }`}
              ></div>
              <div
                onClick={() => collapseMenu()}
                className="flex link opacity-0 flex-col py-4 cursor-pointer group h-6 items-center justify-center ml-4"
              >
                <div
                  className={`w-10 border ${
                    theme === "dark"
                      ? "border-black bg-black"
                      : "border-white bg-white"
                  }`}
                ></div>
              </div>
            </div>
          </nav>
        </div>
        <div
          className={`absolute inset-0  ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          <div className={`min-h-screen relative z-20 px-4 md:px-8 `}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 py-20 flex flex-col items-start justify-end">
                <div className="w-full pb-10">
                  {navLinks.map((link, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => menuNavigaror(link.route)}
                        className="relative link opacity-0 flex my-8 lg:my-2 cursor-pointer items-start"
                      >
                        <span className="lg:text-9xl text-6xl hover-line">
                          {link.name}
                        </span>
                        <span className="md:pt-8 text-xl">{index + 1}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="link opacity-0 hidden md:block">
                  &copy; 2020 &mdash; All Rights Reserved.
                </div>
              </div>
              <div className="col-span-1 link opacity-0 py-20 h-screen hidden md:flex flex-col justify-between items-start ">
                <div className="w-full">
                  <div
                    onClick={() => menuNavigaror("/contact")}
                    className="md:py-32 w-full"
                  >
                    <FullWidthText word1="Start A Project" underline="true" />
                  </div>
                  <div className="w-full flex items-center my-16 justify-between">
                    <div className="uppercase tracking-widest">
                      Get In Touch
                    </div>
                    <div className="nord text-xl hover-line cursor-pointer">
                      hello@adeelfarzand.com
                    </div>
                  </div>
                </div>
                <div className={`flex flex-col col-span-1`}>
                  <div className="nord opacity-60">Connect</div>
                  <div className="text-2xl mt-8">
                    <div className="">Twitter</div>
                    <div className="">LinkedIn</div>
                    <div className="">Instagram</div>
                    <div className="">Github</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="outer" className="mo absolute inset-0 z-50 hidden">
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
    </nav>
  );
}
