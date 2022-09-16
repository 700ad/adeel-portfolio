import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useState } from "react";

export default function PageRevealer() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    gsap
      .timeline({ delay: 0.4 })
      .set("#overlayPath", {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to("#overlayPath", {
        duration: 0.6,
        ease: "power2.in",
        attr: { d: "M 0 100 V 50 Q 50 100 100 50 V 100 z" },
      })
      .to("#overlayPath", {
        duration: 1.2,
        ease: "power4",
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });
  }, []);

  return (
    <>
      <div
        id="outer"
        className={`mo fixed inset-0 z-50 ${hidden ? "hidden" : ""}`}
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
