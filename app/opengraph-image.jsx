import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abdul Samad Siddiqui — Full Stack AI Agent Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: "#f97316",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Full Stack AI Agent Developer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Abdul Samad Siddiqui
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Building production-grade AI agent systems & full-stack apps for clients across the UK, US & UAE
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["OpenAI Agents SDK", "Claude Agent SDK", "Next.js", "FastAPI"].map((tech) => (
            <div
              key={tech}
              style={{
                background: "rgba(249, 115, 22, 0.1)",
                border: "1px solid rgba(249, 115, 22, 0.3)",
                borderRadius: 999,
                padding: "8px 20px",
                color: "#f97316",
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#6b7280",
            fontSize: 16,
          }}
        >
          Karachi, Pakistan · abdulsamadwork109@gmail.com
        </div>
      </div>
    ),
    { ...size }
  );
}
