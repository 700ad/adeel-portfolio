import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import { gsap } from "gsap";

export default function Navigator({ route, theme }) {
  const menuNavigaror = (route) => {
    navigate(route);
    collapseMenu();
  };

  const menuNavigator = (route) => {
    // navigate(route);
    // collapseMenu();
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
          gsap.to(".link", { opacity: 1, duration: 0.8, stagger: 0.14 });
        },
      });
  };

  const collapseMenu = () => {
    gsap.to(".link", {
      opacity: 0,
      duration: 0.8,
      stagger: 0.14,
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
  return (
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
          className="overlay__path"
          fill={theme === "dark" ? "white" : "black"}
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
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
  );
}
