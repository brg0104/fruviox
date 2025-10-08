// components/util/shaders.ts
export const vertexShader = `
  attribute vec4 aVertexPosition;
  attribute vec2 aTextureCoord;
  varying vec2 vTextureCoord;

  void main() {
    gl_Position = aVertexPosition;
    vTextureCoord = aTextureCoord;
  }
`;

export const shaders = [
  {
    id: 1,
    name: "Black Hole",
    fragmentShader: `
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
    `,
  },
  {
    id: 2,
    name: "Swirling Galaxy",
    fragmentShader: `
      precision mediump float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec2 iMouse;
      uniform int uReminderCount;
      uniform vec2 uReminderPos[50];

      void main() {
        vec2 uv = (gl_FragCoord.xy / iResolution - 0.5) * 2.0;
        float radius = length(uv);
        float angle = atan(uv.y, uv.x) + iTime * 0.5;

        // Galaxy spiral colors
        float spiral = sin(10.0 * radius - iTime * 3.0 + angle * 5.0);
        vec3 color = vec3(0.0);
        color += vec3(0.2, 0.6, 1.0) * spiral * exp(-radius*2.0);

        // Reminder particles orbiting
        for(int i = 0; i < 50; i++) {
          if(i >= uReminderCount) break;
          vec2 pos = uReminderPos[i];
          float a = iTime + float(i);
          vec2 orbit = vec2(cos(a), sin(a)) * 0.25;
          vec2 particle = pos + orbit;
          float d = length(uv - particle);
          color += vec3(1.0, 0.9, 0.6) * 0.03 / (d + 0.02);
        }

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  },
];
