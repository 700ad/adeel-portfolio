import React from "react";

export default function Project({
  gradFrom,
  gradTo,
  title,
  description,
  photo,
  alt,
  next,
}) {
  return (
    <>
      <div className="relative z-20">
        <div
          className={`h-haf py-40 bg-gradient-to-br backdrop-blur-sm p-4 md:px-10 grid grid-cols-2 gap-8 ${gradFrom} ${gradTo}`}
        >
          <div className="pt-20 text-6xl leading-none uppercase">{title}</div>
          <div className="pt-20 text-3xl uppercase">{description}</div>
        </div>
        <div className="p-4 md:px-10">
          <div className="border border-orange-400">
            <img className="w-full" src={photo} alt={alt} />
          </div>
        </div>
        <div className="p-4 md:px-10 py-36 flex items-center justify-center">
          <div className="hover-line text-9xl cursor-pointer">{next}</div>
        </div>
      </div>
    </>
  );
}
