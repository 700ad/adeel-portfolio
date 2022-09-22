import React from "react";
import Project from "../../components/Project";
import FullMobile from "../../images/projects/escape hotel.webp";

export default function EscapeHotel() {
  return (
    <>
      <Project
        gradFrom="from-lime-50/5"
        gradTo="to-emerald-900/90"
        title="Escape Hotel"
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            pariatur itaque qui incidunt, harum rerum, esse magnam explicabo
            sint, dolore ullam fugiat! Ex dicta nulla quas quidem reiciendis,
            quaerat minus.`}
        photo={FullMobile}
        alt="Escape WEBSITE"
        next="Credo"
      ></Project>
    </>
  );
}
