import React, { useEffect } from "react";

export default function FullWidthText({ word1, word2, underline = "false" }) {
  const scaleHeader = () => {
    let scalable = document.querySelectorAll(".scale--js");
    let margin = 10;
    for (let i = 0; i < scalable.length; i++) {
      let scalableContainer = scalable[i].parentNode;
      scalable[i].style.transform = "scale(1)";
      let scalableContainerWidth = scalableContainer.offsetWidth - margin;
      let scalableWidth = scalable[i].offsetWidth;
      scalable[i].style.transform =
        "scale(" + scalableContainerWidth / scalableWidth + ")";
      scalableContainer.style.height =
        scalable[i].getBoundingClientRect().height + "px";
    }
  };

  function debounce(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  let bgScale = debounce(function () {
    scaleHeader();
  }, 250);

  useEffect(() => {
    bgScale();
    window.addEventListener("resize", bgScale);
  }, [bgScale]);

  return (
    <div className="scale__container--js">
      <h2
        className={`scale--js radio leading-none text-left ${
          underline === "true" ? "hover-line cursor-pointer" : ""
        }`}
      >
        {word1}
        <br />
        {word2}
      </h2>
    </div>
  );
}
