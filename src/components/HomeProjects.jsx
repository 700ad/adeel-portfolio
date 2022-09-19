import React, { useContext, useState } from "react";
import { ThemeContext } from "./Layout";
import FullWidthoutline from "./FullWidthText";
import { gsap } from "gsap";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

export default function HomeProjects() {
  const theme = useContext(ThemeContext);
  const [hidden, setHidden] = useState(true);

  const offsetHeight = 50;
  const { scrollY, scrollYProgress } = useScroll();
  const yRange = useTransform(scrollY, [4500 - offsetHeight, 20], [0, 1]);
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });

  const showOver = () => {
    setHidden(!hidden);
    console.log("SHOW");
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
      });
  };

  return (
    <>
      <div
        className={`w-screen min-h-screen md:px-0 relative ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <motion.div style={{ opacity }} className="sticky top-0">
          <div className="w-full z-50 h-screen ">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="col-span-1 p-20">
                <FullWidthoutline word1={"Recent"} word2={"Projects"} />
              </div>
              <div className="col-span-1 row-start-2 col-start-2 nord">
                <p className="lg:w-1/3 font-medium relative text-xl nord">
                  Highlights of cases that I passionately built with
                  forward-thinking clients and friends over the years.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="min-h-screen pt-96 relative z-30 grid grid-cols-1 gap-4 md:gap-0 lg:grid-cols-6 p-4 md:px-10 ">
          <div
            onClick={() => showOver()}
            className={`col-span-1 cursor-pointer aspect-square bg-gradient-to-br from-transparent ${
              theme === "dark" ? "to-stone-600" : " to-stone-300"
            }`}
          >
            <div className="flex cursor-pointer flex-col p-4">
              <div className="flex items-center justify-start">
                <div className="w-3 h-3 bg-black mr-2 rounded-full"></div>
                <p>Wolion Studios</p>
              </div>
              <div className="flex nord pl-5 opacity-80">
                UI/UX + Web development
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center">
              <div className="aspect-square w-2/3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                  <g
                    id="Group_9"
                    data-name="Group 9"
                    transform="translate(-1000)"
                  >
                    <rect
                      id="Rectangle_2"
                      data-name="Rectangle 2"
                      width="1000"
                      height="1000"
                      transform="translate(1000)"
                      fill="#dbfe03"
                    />
                    <g
                      id="Group_2"
                      data-name="Group 2"
                      transform="translate(547 -105)"
                    >
                      <path
                        id="Subtraction_3"
                        data-name="Subtraction 3"
                        d="M-2056.29,1574.441h0l-148.578-97.594.008-.008a78.958,78.958,0,0,0,8.933-10.309,87.086,87.086,0,0,0,7.308-11.705,70.263,70.263,0,0,0,5.761-15.014,86.659,86.659,0,0,0,2.321-17.109,143.879,143.879,0,0,0-.258-16.316,158.28,158.28,0,0,0-2.064-17.022l-.006.021a166.459,166.459,0,0,1-11.292,22.873A137.193,137.193,0,0,1-2207.8,1431.6a79.884,79.884,0,0,1-18.54,16.368,74.351,74.351,0,0,1-24.118,9.113,117.09,117.09,0,0,1-23.312,2.213,125.761,125.761,0,0,1-20.469-1.562,146.206,146.206,0,0,0,20.107-18.83,142.152,142.152,0,0,0,16.009-21.583,104.754,104.754,0,0,0,11.869-27.958,126.2,126.2,0,0,0,3.349-32.184,217.891,217.891,0,0,0-2.734-30.881,256.879,256.879,0,0,0-7.156-32.354l12.487-58.538-34.276,53.489a183.092,183.092,0,0,1,.634,27.934,142.239,142.239,0,0,1-3.384,25.076c-2.214,9.4-5.431,17.385-9.562,23.734a63.56,63.56,0,0,1-17.03,17.148,99.723,99.723,0,0,1-19.813,10.587,128.488,128.488,0,0,1-16.282,5.323c-4.318,1.1-6.956,1.532-6.982,1.536l.008-.011a76.9,76.9,0,0,0,7.779-13.269,95.479,95.479,0,0,0,5.652-15.217,90.661,90.661,0,0,0,3.2-19.707,132.652,132.652,0,0,0-1.114-22.68c-.851-6.776-2.141-14.1-3.835-21.759-2.844-12.867-5.884-22.391-6.012-22.791l62.858-148.055-62.859,68.637,2.866-94.21,64.163-73.756,0-.005a90.5,90.5,0,0,1-3.562-13.171,87.058,87.058,0,0,1-1.586-13.167,59.762,59.762,0,0,1,1.094-14.615c2.33-11.076,11.2-20.406,19.02-28.638l0,0,.009-.009.033-.035c2.128-2.239,4.138-4.353,5.937-6.423,11.352-13.049,28.843-15.789,41.516-15.789a86.14,86.14,0,0,1,16.151,1.484l50.5-55.043,89.584,48.324L-1965.785,892l49.115,55.044a93.9,93.9,0,0,1,16.779-1.45c13.46,0,31.969,2.79,43.706,16.084.651.738,1.3,1.464,1.958,2.2l.006.007,0,0a152.331,152.331,0,0,1,12.06,14.791c4.285,6.244,6.961,12.1,8.181,17.906a75.029,75.029,0,0,1,1.485,15,106.643,106.643,0,0,1-.833,13.506,105.352,105.352,0,0,1-2.5,13.507l64.065,72.565v94.21l-62.093-68.637,65.411,148.051a201.963,201.963,0,0,0-6.568,20.358,186.225,186.225,0,0,0-4.265,20.084,115.932,115.932,0,0,0-1.412,21.919,97.411,97.411,0,0,0,3.155,20.468,122.554,122.554,0,0,0,5.785,16.892,109.672,109.672,0,0,0,8.051,15.716h-.014a113.11,113.11,0,0,1-22.847-6.258A94.146,94.146,0,0,1-1806.1,1383.8a62.023,62.023,0,0,1-16.917-16.961c-4.134-6.347-7.4-14.4-9.711-23.921a150.128,150.128,0,0,1-3.687-25.489,198.563,198.563,0,0,1,.2-28.535l-34.558-53.489,12.387,58.538a307.5,307.5,0,0,0-6.027,34.317,258.735,258.735,0,0,0-1.986,32.231,140.426,140.426,0,0,0,3.631,32.8,102.206,102.206,0,0,0,11.392,27.345,123.89,123.89,0,0,0,15.091,20.234,117.72,117.72,0,0,0,18.813,16.867.094.094,0,0,1-.021,0l-.022,0c-.966.072-4.522.306-9.749.306h-.012c-14.477,0-41.671-1.8-61.141-13.827a75.957,75.957,0,0,1-17.876-15.782,114.856,114.856,0,0,1-12.354-18.055,127.581,127.581,0,0,1-9.481-21.018l0,.02a131.956,131.956,0,0,0-2.021,15.42,127.185,127.185,0,0,0-.253,15.229,86.409,86.409,0,0,0,2.279,16.614,82.435,82.435,0,0,0,5.655,15.508,113.693,113.693,0,0,0,7.174,12.794,108.937,108.937,0,0,0,8.778,11.9l-149.766,97.594Zm.19-224.8h0l-57.654,28.023-5.679,28.921,63.333,38.449,64.621-38.449-5.469-28.921-59.152-28.023Zm-61.339-315.275c-.182.224-18.259,22.658-37.237,50.3-11.324,16.5-20.932,31.817-28.559,45.537-9.539,17.161-16,31.87-19.2,43.718s-3.674,22.8-1.408,32.57a49.4,49.4,0,0,0,10.583,21.012,55.916,55.916,0,0,0,13.215,11.273,43.354,43.354,0,0,0,6.485,3.354l25.368,82.872a62.04,62.04,0,0,0,9.636,9.479,53.312,53.312,0,0,0,10.773,6.724,36.993,36.993,0,0,0,13.613,3.493c2.729.137,5.219.2,7.611.2,9.2,0,16.282-1.033,21.057-3.07a38.579,38.579,0,0,0,12.01-8.163,31.226,31.226,0,0,0,3.963-4.73l-.846-17.916-27.51-42.25,42.2,20.37,42.579-20.37-28.738,42.25v17.916a64.164,64.164,0,0,0,10.3,7.937,57.643,57.643,0,0,0,11.037,5.457,39.388,39.388,0,0,0,13.33,2.48c.912,0,1.832-.039,2.733-.114,1.223-.1,2.469-.191,3.853-.286h.016c3.583-.249,7.643-.532,11.446-1.174a30.163,30.163,0,0,0,10.322-3.363,41.04,41.04,0,0,0,7.27-5.514,49.5,49.5,0,0,0,5.2-5.767,44.639,44.639,0,0,0,4.173-6.386l23.9-80.076a43.323,43.323,0,0,0,6.494-3.308,55.574,55.574,0,0,0,13.226-11.173,48.825,48.825,0,0,0,10.578-20.912c2.258-9.734,1.769-20.677-1.453-32.525s-9.714-26.57-19.3-43.763c-7.663-13.75-17.311-29.1-28.677-45.637-19-27.632-36.634-49.524-37.375-50.442l-60.942,40.879-61.737-40.882Zm200.9-86.974h0c-.038.016-3.894,1.579-9.061,4.363a89.735,89.735,0,0,0-17.384,11.964,81.508,81.508,0,0,0-13.135,15.905,89.11,89.11,0,0,0-4.812,8.3l78.367,90.216,19.742-9.575-53.717-121.179Zm-279.35,0h0l-53.716,121.179,19.742,9.575,78.366-90.216a87.164,87.164,0,0,0-4.812-8.3,83.717,83.717,0,0,0-13.135-15.905,86.911,86.911,0,0,0-17.385-11.964C-2192.018,948.955-2195.851,947.4-2195.89,947.388Z"
                        transform="translate(2991.61 -613.851)"
                      />
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M3327.538-258.953,3316.6-321.929l55.292-38.306,17.722,28.519-48.113,26.343Z"
                        transform="translate(-2347 892)"
                      />
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M3378.686-258.953l10.934-62.976-55.292-38.306L3316.6-331.716l48.113,26.343Z"
                        transform="translate(-2487 892)"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`col-span-1 aspect-square lg:col-start-2 lg:row-start-2 bg-gradient-to-tl from-transparent  ${
              theme === "dark" ? "to-stone-600" : " to-stone-300"
            }`}
          >
            <div className="flex cursor-pointer flex-col p-4">
              <div className="flex items-center justify-start">
                <div className="w-3 h-3 bg-black mr-2 rounded-full"></div>
                <p>Credo</p>
              </div>
              <div className="flex nord pl-5 opacity-80">
                Brandig + Web development
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center">
              <div className="aspect-square w-2/3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                  <g
                    id="Group_8"
                    data-name="Group 8"
                    transform="translate(-249 -142)"
                  >
                    <rect
                      id="Rectangle_8"
                      data-name="Rectangle 8"
                      width="500"
                      height="500"
                      rx="250"
                      transform="translate(249 142)"
                      fill="#bde038"
                    />
                    <path
                      id="Path_11"
                      data-name="Path 11"
                      d="M3.4,220.176V105.359q0-15.947,9.214-23.743a31.035,31.035,0,0,1,20.554-7.8,30.64,30.64,0,0,1,20.554,7.973q9.214,7.973,9.214,23.92v38.272H45.216V105.713q0-7.442-3.544-11.163a10.615,10.615,0,0,0-7.8-3.721,10.958,10.958,0,0,0-8.151,3.721q-3.544,3.721-3.544,11.163V219.821q0,7.442,3.544,11.163a10.958,10.958,0,0,0,8.151,3.721,10.615,10.615,0,0,0,7.8-3.721q3.544-3.721,3.544-11.163V178.005H62.935v41.816q0,15.947-9.214,23.92a30.64,30.64,0,0,1-20.554,7.973,31.035,31.035,0,0,1-20.554-7.8Q3.4,236.123,3.4,220.176Zm89.657,30.476H74.275V75.237H93.057V88.7h2.126q.709-8.5,7.265-11.517a32.322,32.322,0,0,1,13.643-3.012V97.208H93.057Zm28.7-145.293q0-15.947,9.214-23.743a31.035,31.035,0,0,1,20.554-7.8,30.64,30.64,0,0,1,20.554,7.973q9.214,7.973,9.214,23.92V161.7H140.543v58.117q0,7.442,3.721,11.163t7.973,3.721a10.958,10.958,0,0,0,8.151-3.721q3.544-3.721,3.544-11.163V178.005H181.3v41.816q0,15.947-9.214,23.92a30.64,30.64,0,0,1-20.554,7.973,31.035,31.035,0,0,1-20.554-7.8q-9.214-7.8-9.214-23.743Zm18.782,41.462h23.034V91.538H140.543Zm92.846,104.186V237.54h-2.126q-.354,4.607-4.43,9.568t-13.289,4.961q-6.733,0-10.986-2.835A19,19,0,0,1,196,241.793a31.554,31.554,0,0,1-3.012-10.277,88.582,88.582,0,0,1-.709-10.986V105.359a88.582,88.582,0,0,1,.709-10.986A31.554,31.554,0,0,1,196,84.1a19,19,0,0,1,6.556-7.442q4.252-2.835,10.986-2.835,9.214,0,13.289,4.961t4.43,9.568h2.126V19.6h18.782V251.006Zm-11.694-14.884q7.8,0,9.745-5.493a33.159,33.159,0,0,0,1.949-11.163V106.422a33.159,33.159,0,0,0-1.949-11.163q-1.949-5.493-9.745-5.493-6.379,0-8.5,5.493a28.965,28.965,0,0,0-2.126,10.454V220.176a28.965,28.965,0,0,0,2.126,10.454Q215.316,236.123,221.695,236.123Zm42.171-15.947V105.359q0-15.947,9.214-23.743a31.035,31.035,0,0,1,20.554-7.8,30.64,30.64,0,0,1,20.554,7.973q9.214,7.973,9.214,23.92V219.821q0,15.947-9.214,23.92a30.64,30.64,0,0,1-20.554,7.973,31.035,31.035,0,0,1-20.554-7.8Q263.865,236.123,263.865,220.176ZM282.647,91.538V219.821q0,7.442,3.544,10.808A10.742,10.742,0,0,0,293.633,234a10.512,10.512,0,0,0,7.619-3.367q3.367-3.367,3.367-10.808V91.538Z"
                      transform="translate(335.6 256.4)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`lg:col-start-3 col-span-1 lg:col-span-2 bg-gradient-to-br from-transparent  ${
              theme === "dark" ? "to-stone-600" : " to-stone-300"
            }`}
          >
            <div className="flex cursor-pointer flex-col p-4">
              <div className="flex items-center justify-start">
                <div className="w-3 h-3 bg-black mr-2 rounded-full"></div>
                <p>Escape Hotel</p>
              </div>
              <div className="flex nord pl-5 opacity-80">
                ReBrandig + Web development
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center">
              <div className="aspect-squre w-2/3 flex items-center pt-8 justify-center">
                <div className="bg-black text-white p-10 text-6xl rounded">
                  theFaces
                </div>
              </div>
            </div>
          </div>
          <div
            className={`lg:col-start-5 lg:row-start-2 aspect-square col-span-1 lg:col-span-2 bg-gradient-to-tl from-transparent  ${
              theme === "dark" ? "to-stone-600" : " to-stone-300"
            }`}
          >
            <div className="flex cursor-pointer flex-col p-4">
              <div className="flex items-center justify-start">
                <div className="w-3 h-3 bg-black mr-2 rounded-full"></div>
                <p>Theorem Studio</p>
              </div>
              <div className="flex nord pl-5 opacity-80">
                Branding + Web development
              </div>
            </div>
            <div className="flex cursor-pointer items-center justify-center">
              <div className="aspect-square w-2/3 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 396.049 432.573"
                >
                  <g
                    id="Group_180"
                    data-name="Group 180"
                    transform="translate(-2039.839 -94.896)"
                  >
                    <g
                      id="Group_98"
                      data-name="Group 98"
                      transform="translate(2137.863 94.896)"
                    >
                      <g
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        transform="matrix(0.819, -0.574, 0.574, 0.819, 4.621, 61.632)"
                        fill="none"
                        stroke="#f45959"
                        stroke-width="12"
                      >
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="53.726"
                          ry="93.587"
                          stroke="none"
                        />
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="47.726"
                          ry="87.587"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Ellipse_2"
                        data-name="Ellipse 2"
                        transform="matrix(0.819, -0.574, 0.574, 0.819, 0, 70.875)"
                        fill="none"
                        stroke="#f45959"
                        stroke-width="12"
                      >
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="53.726"
                          ry="93.587"
                          stroke="none"
                        />
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="47.726"
                          ry="87.587"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Ellipse_4"
                        data-name="Ellipse 4"
                        transform="matrix(0.819, -0.574, 0.574, 0.819, 4.621, 61.632)"
                        fill="none"
                        stroke="#f45959"
                        stroke-width="12"
                      >
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="53.726"
                          ry="93.587"
                          stroke="none"
                        />
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="47.726"
                          ry="87.587"
                          fill="none"
                        />
                      </g>
                      <g
                        id="Ellipse_3"
                        data-name="Ellipse 3"
                        transform="matrix(0.819, -0.574, 0.574, 0.819, 0, 70.875)"
                        fill="none"
                        stroke="#f45959"
                        stroke-width="12"
                      >
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="53.726"
                          ry="93.587"
                          stroke="none"
                        />
                        <ellipse
                          cx="53.726"
                          cy="93.587"
                          rx="47.726"
                          ry="87.587"
                          fill="none"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_99"
                      data-name="Group 99"
                      transform="translate(2039.848 463.111)"
                    >
                      <rect
                        id="Rectangle_177"
                        data-name="Rectangle 177"
                        width="132.013"
                        height="21.452"
                        transform="translate(264.027 0)"
                        fill="#f45959"
                      />
                      <rect
                        id="Rectangle_178"
                        data-name="Rectangle 178"
                        width="132.013"
                        height="21.452"
                        transform="translate(132.014 21.453)"
                        fill="#fdf539"
                      />
                      <rect
                        id="Rectangle_179"
                        data-name="Rectangle 179"
                        width="132.013"
                        height="21.452"
                        transform="translate(0 42.906)"
                      />
                    </g>
                    <path
                      id="Path_8"
                      data-name="Path 8"
                      d="M57.489,74.052q0,5.252,1.373,7.221t5.67,1.969q.955,0,4.058-.239a.527.527,0,0,1,.6.6v8.355q0,.477-.6.716-3.939.358-6.923.358-9.31,0-12.891-4.237T45.195,74.529V41.944H37.317a.528.528,0,0,1-.6-.6V33.469a.528.528,0,0,1,.6-.6h7.878V19.623q0-.716.477-.716l11.22-2.148a.306.306,0,0,1,.418.119.794.794,0,0,1,.179.477V32.872h11.1a.528.528,0,0,1,.6.6v7.878a.528.528,0,0,1-.6.6h-11.1ZM102.607,31.8q20.649,0,20.649,23.156v37a.527.527,0,0,1-.6.6h-11.1a.528.528,0,0,1-.6-.6V57.819q0-9.071-2.924-12.891t-8.892-3.82A12.285,12.285,0,0,0,88.94,46.121q-3.879,5.013-3.879,12.652V91.956a.528.528,0,0,1-.6.6h-11.1a.527.527,0,0,1-.6-.6V9.6a.528.528,0,0,1,.6-.6h11.1a.528.528,0,0,1,.6.6V40.631A20.973,20.973,0,0,1,102.607,31.8Zm50.012-.119q12.772,0,19.993,8.773t6.744,23.693a.527.527,0,0,1-.6.6H137.58q.716,19.814,15.159,19.814a14.7,14.7,0,0,0,9.071-2.686,12.485,12.485,0,0,0,4.655-7.7q.239-.6.716-.6h10.981q.836,0,.6.6a23.378,23.378,0,0,1-9.012,14.443q-6.983,5.133-17.128,5.133-13.249,0-20.709-8.415t-7.46-22.619q0-13.965,7.639-22.5T152.62,31.679Zm0,9.071a13.56,13.56,0,0,0-10.5,4.3q-3.939,4.3-4.416,11.817h29q-.239-7.4-4-11.757A12.648,12.648,0,0,0,152.62,40.75Zm77.7,44.522q-7.878,8.475-21.008,8.475t-20.948-8.534q-7.818-8.534-7.818-22.5t7.818-22.5q7.818-8.534,20.948-8.534t21.008,8.534q7.878,8.534,7.878,22.5T230.324,85.272Zm-32.586-6.923a14.533,14.533,0,0,0,23.216-.119q4.237-5.849,4.237-15.517T220.954,47.2a14.384,14.384,0,0,0-23.156,0q-4.237,5.849-4.237,15.517Q193.56,72.5,197.738,78.349Zm74.362-45.6q.6.239.6.716V42.66q0,.716-.6.477-8.475-.477-13.547,4.178t-5.073,13.13V91.956a.528.528,0,0,1-.6.6h-11.1a.527.527,0,0,1-.6-.6V33.469a.527.527,0,0,1,.6-.6h9.907q.716,0,.716.6l.6,8.594Q260.045,31.8,272.1,32.753Zm25.185-1.074q12.772,0,19.993,8.773t6.744,23.693a.528.528,0,0,1-.6.6h-41.18q.716,19.814,15.159,19.814a14.7,14.7,0,0,0,9.071-2.686,12.485,12.485,0,0,0,4.655-7.7q.239-.6.716-.6h10.981q.836,0,.6.6a23.378,23.378,0,0,1-9.012,14.443q-6.983,5.133-17.128,5.133-13.249,0-20.709-8.415t-7.46-22.619q0-13.965,7.639-22.5T297.285,31.679Zm0,9.071a13.56,13.56,0,0,0-10.5,4.3q-3.939,4.3-4.416,11.817h29q-.239-7.4-4-11.757A12.648,12.648,0,0,0,297.285,40.75Zm95.489-9.071q9.907,0,15.457,5.729t5.55,17.546v37q0,.716-.6.716h-11.1q-.6,0-.6-.716V57.7q0-9.071-2.566-12.533T390.267,41.7a11.862,11.862,0,0,0-9.489,4.715Q376.9,51.134,376.9,58.774V91.956q0,.716-.6.716H365.2q-.6,0-.6-.716V57.7q0-8.117-2.507-12.055T353.743,41.7a12.316,12.316,0,0,0-9.907,4.774Q339.9,51.254,339.9,58.654v33.3q0,.716-.6.716H328.2q-.6,0-.6-.716V33.469a.528.528,0,0,1,.6-.6h9.907q.716,0,.716.6l.6,8q6.445-9.788,17.307-9.788,11.817,0,17.188,11.459a27.758,27.758,0,0,1,7.938-8.176A18.992,18.992,0,0,1,392.774,31.679Zm27.572,60.874a.528.528,0,0,1-.6-.6V79.184a.528.528,0,0,1,.6-.6h11.817a.528.528,0,0,1,.6.6V91.956a.528.528,0,0,1-.6.6Z"
                      transform="translate(2003.119 316.18)"
                      fill="#f45959"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`lg:col-start-3 lg:row-start-3 aspect-square col-span-1 lg:col-span-2 bg-gradient-to-br from-transparent  ${
              theme === "dark" ? "to-stone-600" : " to-stone-300"
            }`}
          >
            <div className="flex flex-col p-4">
              <div className="flex items-center justify-start">
                <div className="w-3 h-3 bg-black mr-2 rounded-full"></div>
                <p>Wolion Studios</p>
              </div>
              <div className="flex nord pl-5 opacity-80">
                UI/UX + Web development
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-2/3 flex items-center justify-center">
                <svg viewBox="0 0 15000 16097">
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stop-color="#fffcb8" />
                      <stop offset="0" stop-color="#279af1" />
                      <stop offset="1" stop-color="#ff6700" />
                    </linearGradient>
                  </defs>
                  <g
                    id="Group_30"
                    data-name="Group 30"
                    transform="translate(-2282.69 -1103.493)"
                  >
                    <path
                      id="Path_88"
                      data-name="Path 88"
                      d="M1655.523,17.821v164.97H314.662v909.254h897.744v164.97H314.662V2396.459H1655.523v164.97H-113.109V17.821Zm1492.25,2441.941a684.207,684.207,0,0,0,186.071-25.9q92.076-25.9,164.97-76.73t117.013-124.686q44.121-73.853,44.12-171.684,0-117.014-60.426-208.131t-158.256-166.888q-97.831-75.771-223.477-142.91T2961.7,1408.557q-130.442-67.139-256.087-140.992T2482.139,1102.6q-97.831-91.117-158.256-203.335t-60.425-258.006q0-145.788,54.67-270.474t160.175-215.8q105.5-91.117,259.923-142.91t353.918-51.793q180.316,0,322.267,38.365t249.374,113.177q107.422,74.812,182.234,184.153t120.85,253.21l-218.681,99.749q-38.365-117.013-97.831-213.886T3508.406,269.113q-82.485-69.057-190.866-106.463t-244.578-37.406q-120.85,0-211.008,33.569t-150.583,88.24q-60.425,54.67-90.158,122.768t-29.732,139.074q0,99.749,61.384,183.193t163.052,157.3q101.667,73.853,231.151,142.91t263.76,140.033q134.278,70.975,263.76,147.705t231.15,167.848Q3907.4,1539,3968.788,1647.38t61.384,242.659q0,151.542-57.548,284.861T3799.981,2407.01q-115.095,98.79-285.82,156.338T3117.082,2620.9q-184.152,0-328.022-40.283T2534.891,2463.6a771.975,771.975,0,0,1-188.948-187.03q-78.648-110.3-128.523-252.251l228.273-93.995q40.283,124.687,108.381,222.518t158.256,165.929q90.157,68.1,200.458,104.545T3147.774,2459.762ZM5184.809,1299.216q0,266.638,80.566,478.605t221.559,358.714q140.993,146.747,332.818,224.436t416.262,77.689a668.7,668.7,0,0,0,258.964-51.793,986.422,986.422,0,0,0,231.15-135.237,1179.781,1179.781,0,0,0,190.866-187.989q84.4-104.545,138.115-211.968l180.316,115.1q-78.649,128.524-186.071,246.5t-248.415,209.09q-140.992,91.117-318.43,144.828T6086.39,2620.9q-316.512,0-574.519-105.5t-442.158-285.82q-184.153-180.316-284.861-421.058t-100.708-509.3a1324.3,1324.3,0,0,1,46.039-348.163q46.038-169.766,133.318-318.431T5076.428,360.23Q5202.072,236.5,5360.329,147.3T5706.575,9.189q187.989-48.916,400.916-48.916,203.334,0,375.019,54.67t312.675,144.828Q6936.177,249.93,7046.477,367.9t188.949,246.5L7049.354,737.167q-159.216-308.84-356.8-451.749t-454.627-142.91q-220.6,0-412.425,80.567T5490.771,453.265q-142.91,149.624-224.436,363.51T5184.809,1299.216ZM8982.8-39.727,10179.8,2561.429H9744.353L9356.864,1713.56H8265.376L7864.46,2561.429H7649.615L8875.382-39.727ZM8340.188,1548.59h938.028l-462.3-1007.085ZM10689.9,17.821h805.668q199.5,0,374.06,47.956t304.044,140.992Q12303.154,299.8,12377,435.042t73.854,309.8q0,172.643-71.936,301.166t-189.907,212.926q-117.973,84.4-267.6,125.646a1142.635,1142.635,0,0,1-305,41.242q-67.138,0-140.032-2.877t-140.033-8.632q-67.137-5.755-124.686-13.428t-94-15.346V2561.429H10689.9Zm427.771,1223.848a1196.794,1196.794,0,0,0,155.379,41.242,868.422,868.422,0,0,0,168.806,16.305q138.116,0,241.7-41.242T11856.2,1144.8q69.057-71.935,102.625-168.807t33.57-206.212q0-128.523-44.12-232.109T11826.467,360.23q-77.691-73.853-182.235-114.136t-223.477-40.283h-303.084ZM14886.891,17.821v164.97H13546.029v909.254h897.744v164.97h-897.744V2396.459h1340.861v164.97H13118.259V17.821Z"
                      transform="translate(2395.8 12876.945)"
                    />
                    <path
                      id="Subtraction_1"
                      data-name="Subtraction 1"
                      d="M10637.978,10637.98v-.015H0V0H10637.978V10637.98ZM5120.9,5155.016h.034c122.6,0,236.623,4.584,338.906,13.621,108.45,9.581,207.312,24.489,293.843,44.305,91.113,20.869,171.439,47.842,238.745,80.171,70.5,33.862,128.9,74.644,173.566,121.214a444.525,444.525,0,0,1,88.343,133.257c20.342,47.561,33.195,100.563,38.2,157.537,4.819,54.85,2.5,114.878-6.9,178.421-9.028,61.021-24.829,126.936-46.966,195.911-41.443,129.145-106.7,274.06-193.952,430.721-78.869,141.6-177.69,296.353-293.72,459.954-102.7,144.813-221.525,300.264-353.161,462.035-112.6,138.375-237.85,285.391-372.279,436.959-245.588,276.907-473.895,515.708-640.6,690.073l-22.006,23.021c-92.01,96.257-102.417,144.045-94.947,167.185,6.225,19.281,25.364,23.071,25.557,23.107.295.015,2.981.149,7.891.149,18.712,0,71.026-1.868,152.488-19.184,102.173-21.718,212.4-59.309,327.615-111.73,227.44-103.478,494.208-234.021,771.466-377.515,315.293-163.178,623.217-332.053,915.219-501.929,334.132-194.386,633.6-382.281,890.1-558.461,291.694-200.36,525.9-384.437,696.108-547.115,93.378-89.249,174.968-180.548,242.507-271.361,62.829-84.48,115.039-170.615,155.177-256.012,70.912-150.866,106.43-303.782,105.568-454.5a958.083,958.083,0,0,0-46.788-289.044,1057.481,1057.481,0,0,0-100.566-219.926c-71.988-119.621-144.8-188.313-145.526-188.992l.2-.173c10.646-7.875,107.927-79.122,243.258-154.567,83.578-46.594,165.126-85.659,242.38-116.111,96.567-38.064,186.65-62.7,267.75-73.217a826.958,826.958,0,0,1,106.02-6.746c70.6,0,144.12,8.741,218.5,25.979a1183.964,1183.964,0,0,1,178.907,57.158c100.693,41.045,164.62,82.721,165.255,83.138.044-.511,5.7-62.553-2.146-138.057-4.63-44.548-12.962-85.217-24.765-120.879-14.754-44.579-35-81.419-60.188-109.5s-59.487-52.06-101.962-71.289c-33.98-15.381-73.235-27.772-116.677-36.826-73.636-15.348-135.227-15.8-135.839-15.8.033-.79,2.865-83.033-28.314-174.2-18.426-53.875-44.931-100.629-78.781-138.966-42.315-47.919-96.293-82.744-160.433-103.508-61.98-20.066-143.483-30.241-242.246-30.241-80.689,0-217.958,7.179-413.678,41.377-116.113,20.29-198,40.525-201.424,41.377,1.014-1.157,108.577-124.468,200-305,53.574-105.783,91.054-210.046,111.4-309.89,25.436-124.811,24.019-243.035-4.21-351.388-20.091-77.194-58.368-153.852-113.766-227.843-55.389-73.976-128.158-145.645-216.29-213.021-89.1-68.115-194.405-132.216-312.989-190.523-121.1-59.543-256.976-113.494-403.869-160.353-177.088-56.493-394.547-105.738-646.336-146.362-230.024-37.11-493.96-67.88-784.473-91.454-494.539-40.129-1075.549-60.477-1726.889-60.477-354.885,0-924.82,6.434-1624.651,37.086-418.22,18.316-688.481,36.9-691.162,37.085-.054.035-5.92,3.842-4.656,8.949,2.057,8.307,22.073,19.567,105.754,26.032l28.444,2.194c283.653,21.872,811.589,62.583,1377.285,135.166,689.745,88.5,1244.432,199.484,1648.652,329.871,135.9,43.83,264.332,96.055,381.735,155.22,109.819,55.344,208.23,115.806,292.5,179.708,80.43,60.992,145.377,123.067,193.04,184.5,46.907,60.463,74.955,117.524,83.361,169.6,6.92,41.4-7.314,140.151-18.778,165.9-8.169,18.326-16.619,39.866-26.4,64.808-20.177,51.434-45.275,115.416-81.041,183.61-42.025,80.134-89.657,148.924-145.611,210.3-69.479,76.216-152.331,140.49-246.25,191.037-110.155,59.284-239,101.613-382.959,125.805-128.383,21.574-283.562,37.679-461.225,47.865-160.927,9.226-345.9,13.9-549.776,13.907-268.122,0-575.549-7.864-939.843-24.05-317.674-14.115-636.846-32.7-918.445-49.094-271.311-15.8-527.575-30.719-731.833-38.678-61.3-2.387-118.764-3.6-170.8-3.6-137.81,0-242.732,8.359-311.852,24.847-61.2,14.6-82.333,32.967-89.279,45.805-7.286,13.467-.817,23.587-.751,23.688.011.221,1.2,22.091,14.1,48.367,11.862,24.169,36.33,56.981,85.534,76.042,100.151,38.837,257.76,60.972,440.256,86.6,100.388,14.1,204.194,28.677,312.049,47.724,252.412,44.569,560.886,69.764,833.049,91.993,259.988,21.236,505.513,41.29,662.167,74.481,140.5,29.765,244.852,60.905,310.151,92.554,53.737,26.045,81.552,52.637,82.672,79.042.549,12.935-5.347,25.891-17.528,38.509-9.742,10.093-23.507,19.992-40.909,29.424a365.623,365.623,0,0,1-60.242,25.4c-.947.35-97.593,35.836-330.382,102.015-193.26,54.957-434.58,113.371-667.955,169.862-334.57,80.988-680.529,164.732-915.307,244.69-168.773,57.485-291.8,107.884-365.656,149.8-54.784,31.091-82.019,57.081-80.947,77.25,1.046,19.682,29.9,26.47,30.189,26.536.189.1,19.011,9.442,60.46,18.781,38.027,8.569,103.223,18.782,197.858,18.782,8.179,0,16.527-.076,24.812-.224,150-2.686,339.3-40.806,558.5-84.946,146.287-29.459,312.052-62.842,486.773-89.443,104.867-15.97,210.729-32.445,322.807-49.887C3620.334,5285.4,4458.169,5155.016,5120.9,5155.016Z"
                      transform="translate(4463.7 1103.493)"
                      fill="url(#linear-gradient)"
                    />
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M770.608,500.153Z"
                      transform="translate(10822.526 4475.144)"
                      fill="none"
                      stroke="#707070"
                      stroke-width="1"
                    />
                    <path
                      id="Path_4"
                      data-name="Path 4"
                      d="M5.487,562.071H141.97V329.512h300.8V562.071H578.355V-27.857H442.77V203.8H141.97V-27.857H5.487ZM1479.858,266.658q0,79.914,35.468,150.4t103.259,113.586q67.792,43.1,158.481,43.1t158.481-43.1q67.793-43.1,103.26-113.586t35.468-150.4q0-79.914-35.468-149.951T1935.548,3.57q-67.792-43.1-158.481-43.1T1618.585,3.57q-67.792,43.1-103.259,113.137T1479.858,266.658Zm453.445,0q0,45.793-18.407,85.751t-53.875,64.2q-35.468,24.244-83.955,24.244t-83.506-24.244q-35.018-24.244-53.425-64.2t-18.407-85.751a207.706,207.706,0,0,1,17.958-85.3q17.958-40.406,53.426-65.1t83.955-24.693q48.487,0,83.955,24.693t53.875,65.1A203.4,203.4,0,0,1,1933.3,266.658ZM3119.446,562.071h136.482V97.851H3474.12V-27.857H2901.253V97.851h218.193Zm1245.4,0h562.092V436.363H4501.332V329.512H4817.4V203.8H4501.332V97.851h425.609V-27.857H4364.85Zm1475.269,0h463.323V436.363H5976.6V-27.857H5840.119Z"
                      transform="translate(6619.289 16627.588)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="outer" className="mo absolute inset-0 z-50">
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
      </div> */}
    </>
  );
}
