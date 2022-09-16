import React from "react";
import { Curtains, Plane } from "curtainsjs";
import { gsap } from "gsap";
import { useEffect } from "react";
import dp from "../images/adeell.jpeg";
import bwdp from "../images/me.jpeg";
import Footer from "../components/Footer";

const vs = `#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;

// those are the mandatory attributes that the lib sets
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

// those are mandatory uniforms that the lib sets and that contain our model view and projection matrix
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

uniform mat4 texture0Matrix;
uniform mat4 texture1Matrix;

// if you want to pass your vertex and texture coords to the fragment shader
varying vec3 vVertexPosition;
varying vec2 vTextureCoord0;
varying vec2 vTextureCoord1;
varying float vTime;

void main() {
    vec3 vertexPosition = aVertexPosition;
    vTime = uTime;
  // set the varyings
    vTextureCoord0 = (texture0Matrix * vec4(aTextureCoord, 0., 1.)).xy;
    vTextureCoord1 = (texture1Matrix * vec4(aTextureCoord, 0., 1.)).xy;
    vVertexPosition = vertexPosition;

    gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
}`;

const fs = ` #ifdef GL_ES
precision mediump float;
#endif

#define TAU 6.28318530718
#define PI 3.14159265359
#define S(a,b,n) smoothstep(a,b,n)
#define NUM_OCTAVES 5

varying float vTime;
uniform float uProgress;
uniform vec2 uReso;
uniform vec2 uMouse;

// get our varyings
varying vec3 vVertexPosition;
varying vec2 vTextureCoord0;
varying vec2 vTextureCoord1;

// the uniform we declared inside our javascript

// our texture sampler (default name, to use a different name please refer to the documentation)
uniform sampler2D texture0;
uniform sampler2D texture1;

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u*u*(3.0-2.0*u);

  float res = mix(
    mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
  return res*res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100);
  // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

void main(){
    vec2 uv0 = vTextureCoord0;
    vec2 uv1 = vTextureCoord1;

    float inverse = 1.0;
    float tolerance = 1.5;
    float radius = 0.3;
    float progress = uProgress + uProgress * tolerance;
  
    vec2 st = (gl_FragCoord.xy - 0.5 * uReso) / min(uReso.y, uReso.y);
    vec2 mouse = (uMouse - 0.5 * uReso) / min(uReso.y, uReso.y);

    float dist = clamp(1.0 - length(mouse - st) / radius + progress, 0.0, 1.0) * 2.5;
  
    float x = st.y * PI * 5.0 + vTime * 5.;
    float y = st.x * PI * 10.0 + vTime * 2.;

    float dX = cos(x + y) * 0.1 * cos(y);
    float dY = sin(x - y) * 0.2 * cos(y);

    st += vec2(dY, dX);

    float mask = S( 0.4, 0.5, noise(st * 6.0) - 1.0 + pow(dist, 2.0) );

    vec4 color0 = texture2D(texture0, uv0);
    vec4 color1 = texture2D(texture1, uv1);

    vec4 mixColor = mix(color0, color1, mask * 1.0);
  
    gl_FragColor = mixColor;
}`;

class WEBGL {
  constructor(set) {
    this.webGLCurtain = new Curtains({ container: set.canvas });
    this.planeElement = set.planeElement;
    this.mouse = {
      x: 0,
      y: 0,
    };
    this.params = {
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        time: {
          name: "uTime",
          type: "1f",
          value: 0,
        },
        mousepos: {
          name: "uMouse",
          type: "2f",
          value: [0, 0],
        },
        resolution: {
          name: "uReso",
          type: "2f",
          value: [0, 0],
        },
        progress: {
          name: "uProgress",
          type: "1f",
          value: 0,
        },
      },
    };
  }

  initPlane() {
    this.plane = new Plane(this.webGLCurtain, this.planeElement, this.params);
    if (this.plane) {
      this.plane.onReady(() => {
        this.update();
        this.initEvent();
      });
    }
  }

  update() {
    this.plane.onRender(() => {
      this.plane.uniforms.time.value += 0.01; // update our time uniform value
      this.plane.uniforms.resolution.value = [2000, 600];
    });
  }

  initEvent() {
    this.planeElement.addEventListener("mousemove", (e) => {
      gsap.to(this.plane.uniforms.mousepos.value, 0.8, {
        0: e.clientX,
        1: 1000 - e.clientY,
      });
    });
  }
}

export default function TempAbout() {
  useEffect(() => {
    const webgl = new WEBGL({
      canvas: "canvas",
      planeElement: document.getElementsByClassName("plane")[0],
    });

    webgl.initPlane();
  }, []);

  return (
    <>
      <div className="container-page flex items-center justify-center h-screen w--screen">
        <div id="canvas"></div>
        <div className="main-image-center grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1"></div>
          <div className="plane col-span-1">
            <img
              data-sampler="texture0"
              id="texture1"
              src={bwdp}
              crossOrigin="anonymous"
            />
            <img
              data-sampler="texture1"
              id="texture1"
              src={dp}
              crossOrigin="anonymous"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
