import React from "react";
// import TheoremDesktop from "../../images/theoremdesktop";

export default function EscapeHotel() {
  return (
    <>
      <div className="relative z-20">
        <div className="h-haf py-40 bg-gradient-to-br from-amber-50/50 to-teal-200/50 backdrop-blur-sm p-4 md:px-10 grid grid-cols-2 gap-8">
          <div className="pt-20 text-6xl leading-none uppercase">
            Wolion Studio
          </div>
          <div className="pt-20 text-3xl uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            pariatur itaque qui incidunt, harum rerum, esse magnam explicabo
            sint, dolore ullam fugiat! Ex dicta nulla quas quidem reiciendis,
            quaerat minus.
          </div>
        </div>
        <div className="p-4 md:px-10">
          <div className="">
            {/* <img src={TheoremDesktop} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
