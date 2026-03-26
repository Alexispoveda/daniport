import { ImageResponse } from "next/og";

import profileData from "@/config/profile.json";

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
          padding: "52px 60px",
          background: "linear-gradient(120deg, #ffffff 0%, #f0f7ff 55%, #d9f0ff 100%)",
          color: "#0e2236",
          fontFamily: "Manrope, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#3b81b7" }}>
          Daniella Castillo Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.06 }}>Business Transformation</div>
          <div style={{ fontSize: 30, color: "#2b3f54" }}>{profile.headline.en}</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
