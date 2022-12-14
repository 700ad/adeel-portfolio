import React from "react";
import Project from "../../components/Project";
import FullMobile from "../../images/projects/fulltheorem.webp";

export default function EscapeHotel() {
  return (
    <>
      <Project
        gradFrom="from-orange-50/5"
        gradTo="to-yellow-800/90"
        title="Theorem Studio"
        description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            pariatur itaque qui incidunt, harum rerum, esse magnam explicabo
            sint, dolore ullam fugiat! Ex dicta nulla quas quidem reiciendis,
            quaerat minus.`}
        photo={FullMobile}
        alt="THEOREM WEBSITE"
        next="Credo"
      ></Project>
    </>
  );
}
