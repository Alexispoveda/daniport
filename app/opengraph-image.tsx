import { ImageResponse } from "next/og";

import profileData from "@/config/profile.json";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const profile = profileData;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background: "linear-gradient(130deg, #f5f7fa 0%, #e9f5ff 58%, #d9f0ff 100%)",
          color: "#0e2236",
          fontFamily: "Manrope, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 26,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#3b81b7",
          }}
        >
          Daniella Castillo
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.04, maxWidth: 980 }}>
            Redesigning Work, Empowering Change Today
          </div>
          <div style={{ fontSize: 34, color: "#2b3f54" }}>{profile.headline.en}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
