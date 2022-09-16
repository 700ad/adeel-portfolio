import React, { useEffect, createContext, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Cursor from "./Cursor";
import Lenis from "@studio-freight/lenis";
import { Curtains, Vec2, PingPongPlane, ShaderPass } from "curtainsjs";
import { ripplesVs, ripplesFs, renderFs } from "./shaders";
import { gsap } from "gsap";
import InitialLoader from "./InitialLoader";

export const ThemeContext = createContext();

export default function Layout({ children }) {
  const [mode, setMode] = useState([255, 255, 255]);
  const [theme, setTheme] = useState("light");

  const changeCurrentTheme = () => {
    if (theme === "light") {
      setTheme(() => "dark");
      setMode([0, 0, 0]);
    } else {
      setTheme(() => "light");
      setMode([255, 255, 255]);
    }
  };

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smooth: true,
      direction: "vertical",
    });

    function raf() {
      lenis.raf();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    let canv = document.getElementById("canvas");
    const curtains = new Curtains({
      container: canv,
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
      alpha: true,
    });
    curtains.onSuccess(() => {
      const mouse = {
        last: new Vec2(),
        current: new Vec2(),
        velocity: new Vec2(),
        updateVelocity: false,
        lastTime: null,
      };

      const curtainsBBox = curtains.getBoundingRect();

      const ripples = new PingPongPlane(
        curtains,
        document.getElementById("canvas"),
        {
          vertexShader: ripplesVs,
          fragmentShader: ripplesFs,
          autoloadSources: false,
          watchScroll: false,
          sampler: "uRipples",
          texturesOptions: {
            floatingPoint: "half-float",
          },
          uniforms: {
            mousePosition: {
              name: "uMousePosition",
              type: "2f",
              value: mouse.current,
            },
            // our velocity
            velocity: {
              name: "uVelocity",
              type: "2f",
              value: mouse.velocity,
            },
            resolution: {
              name: "uResolution",
              type: "2f",
              value: new Vec2(curtainsBBox.width, curtainsBBox.height),
            },
            pixelRatio: {
              name: "uPixelRatio",
              type: "1f",
              value: curtains.pixelRatio,
            },
            time: {
              name: "uTime",
              type: "1i",
              value: -1,
            },

            viscosity: {
              name: "uViscosity",
              type: "1f",
              value: 11.75,
            },
            speed: {
              name: "uSpeed",
              type: "1f",
              value: 4.75,
            },
            size: {
              name: "uSize",
              type: "1f",
              value: 2,
            },
            dissipation: {
              name: "uDissipation",
              type: "1f",
              value: 0.9819,
              // value: 0.9875,
            },
          },
        }
      );

      ripples
        .onRender(() => {
          mouse.velocity.set(
            curtains.lerp(mouse.velocity.x, 0, 0.05),
            curtains.lerp(mouse.velocity.y, 0, 0.1)
          );
          ripples.uniforms.velocity.value = mouse.velocity.clone();
          ripples.uniforms.time.value++;
        })
        .onAfterResize(() => {
          const boundingRect = ripples.getBoundingRect();
          ripples.uniforms.resolution.value.set(
            boundingRect.width,
            boundingRect.height
          );
        });

      const onMouseMove = (e) => {
        if (ripples) {
          const mousePos = {
            x: e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
            y: e.targetTouches ? e.targetTouches[0].clientY : e.clientY,
          };
          mouse.last.copy(mouse.current);
          mouse.updateVelocity = true;
          if (!mouse.lastTime) {
            mouse.lastTime = (performance || Date).now();
          }
          if (
            mouse.last.x === 0 &&
            mouse.last.y === 0 &&
            mouse.current.x === 0 &&
            mouse.current.y === 0
          ) {
            mouse.updateVelocity = false;
          }
          mouse.current.set(mousePos.x, mousePos.y);
          const webglCoords = ripples.mouseToPlaneCoords(mouse.current);
          ripples.uniforms.mousePosition.value = webglCoords;
          if (mouse.updateVelocity) {
            const time = (performance || Date).now();
            const delta = Math.max(14, time - mouse.lastTime);
            mouse.lastTime = time;
            mouse.velocity.set(
              (mouse.current.x - mouse.last.x) / delta,
              (mouse.current.y - mouse.last.y) / delta
            );
          }
        }
      };
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onMouseMove);
      const renderPassUniforms = {
        resolution: {
          name: "uResolution",
          type: "2f",
          value: new Vec2(curtainsBBox.width, curtainsBBox.height),
        },
        hue: {
          name: "uHue",
          type: "1f",
          // value: 100,
          value: 20,
        },
        saturation: {
          name: "uSaturation",
          type: "1f",
          value: 1.0,
          // value: 1.5
        },
        bgColor: {
          name: "uBgColor",
          type: "3f",
          value: mode,
        },
      };
      const params = {
        fragmentShader: renderFs,
        depth: false,
        uniforms: renderPassUniforms,
      };
      const renderPass = new ShaderPass(curtains, params);
      renderPass.onAfterResize(() => {
        const boundingRect = renderPass.getBoundingRect();
        renderPass.uniforms.resolution.value.set(
          boundingRect.width,
          boundingRect.height
        );
      });
      renderPass.createTexture({
        sampler: "uRipplesTexture",
        fromTexture: ripples.getTexture(),
      });
    });

    return () => {
      curtains.dispose();
    };
  }, [mode]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        {/* <InitialLoader /> */}
        <div
          id="canvas"
          className="w-screen fixed h-screen bottom-0 right-0 top-0 left-0"
        ></div>
        {/* <Cursor></Cursor> */}
        <Nav changeTheme={changeCurrentTheme} theme={theme} />
        <main>{children}</main>
        {/* <Footer /> */}
      </ThemeContext.Provider>
    </>
  );
}
