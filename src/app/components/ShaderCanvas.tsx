// components/ShaderCanvas.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { shaders, vertexShader } from "../components/utils/shaders";


interface ShaderCanvasProps {
  size?: number;
  onClick?: () => void;
  reminders?: string[]; // Pass reminder list
  shaderId?: number;
}

export const ShaderCanvas = ({ size = 600, onClick, reminders = [], shaderId = 1 }: ShaderCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef<[number, number]>([0.5, 0.5]);
  const programRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Fragment shader for black hole + particles
  const fragmentShader = `
    precision mediump float;
    uniform float iTime;
    uniform vec2 iResolution;
    uniform vec2 iMouse;
    uniform int uReminderCount;
    uniform vec2 uReminderPos[50];

    void main() {
      vec2 uv = (gl_FragCoord.xy / iResolution - 0.5) * 2.0;
      float radius = length(uv);

      // Black hole glow
      float glow = 0.2 / (radius + 0.05);
      vec3 color = vec3(0.0, 0.0, 0.0);
      color += vec3(0.3, 0.2, 0.8) * glow;

      // Reminder particles orbiting
      for(int i = 0; i < 50; i++) {
        if(i >= uReminderCount) break;
        vec2 pos = uReminderPos[i];
        float angle = iTime + float(i);
        vec2 orbit = vec2(cos(angle), sin(angle)) * 0.2;
        vec2 particle = pos + orbit;
        float d = length(uv - particle);
        color += vec3(1.0, 0.8, 0.2) * 0.05 / (d + 0.02);
      }

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  // Track mouse position
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = [
      (e.clientX - rect.left) / rect.width,
      (e.clientY - rect.top) / rect.height,
    ];
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseRef.current = [0.5, 0.5];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs = vertexShader;
    const fs = fragmentShader;

    const shaderProgram = initShaderProgram(gl, vs, fs);
    if (!shaderProgram) return;
    programRef.current = shaderProgram;

    const attribLocations = {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    };
    const uniformLocations = {
      iTime: gl.getUniformLocation(shaderProgram, 'iTime'),
      iResolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
      iMouse: gl.getUniformLocation(shaderProgram, 'iMouse'),
      uReminderCount: gl.getUniformLocation(shaderProgram, 'uReminderCount'),
      uReminderPos: gl.getUniformLocation(shaderProgram, 'uReminderPos'),
    };

    const buffers = initBuffers(gl);

    canvas.width = size;
    canvas.height = size;
    gl.viewport(0, 0, canvas.width, canvas.height);

    const render = () => {
      const currentTime = (performance.now() / 1000);
      gl.useProgram(shaderProgram);

      gl.uniform1f(uniformLocations.iTime, currentTime);
      gl.uniform2f(uniformLocations.iResolution, canvas.width, canvas.height);
      gl.uniform2f(uniformLocations.iMouse, mouseRef.current[0], mouseRef.current[1]);

      // Map reminders in a circle around center
      const positions: number[] = [];
      for (let i = 0; i < 50; i++) {
        if (i < reminders.length) {
          const angle = (i / reminders.length) * Math.PI * 2;
          positions.push(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
        } else {
          positions.push(0, 0);
        }
      }
      gl.uniform1i(uniformLocations.uReminderCount, reminders.length);
      gl.uniform2fv(uniformLocations.uReminderPos, new Float32Array(positions));

      // Bind buffers
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
      gl.vertexAttribPointer(attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(attribLocations.vertexPosition);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationRef.current);
  }, [size, reminders]);

  function initShaderProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
    const vertex = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragment = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertex || !fragment) return null;
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function initBuffers(gl: WebGLRenderingContext) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1, -1, 1, -1, 1, 1, -1, 1];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    const indices = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    return { position: positionBuffer, indices: indexBuffer };
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      onClick={onClick}
    />
  );
};
