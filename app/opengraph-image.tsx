import { ImageResponse } from "next/og";

export const alt = "Open Source Foundation — Fund the future of open source software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#028537",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Open Source Foundation
        </div>

        {/* Centre: headline + subhead */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            Fund the future of open source software
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#5BD478",
              maxWidth: 720,
            }}
          >
            Connect supporters with the projects the world depends on
          </div>
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(255,255,255,0.6)",
            alignSelf: "flex-end",
          }}
        >
          opensourcefoundation.org
        </div>
      </div>
    ),
    { ...size }
  );
}
