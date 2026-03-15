import { ImageResponse } from "next/og";

export const alt = "QuickSecure - Safer Schools Start Here";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#070B16",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#D7D128",
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-2px",
          }}
        >
          QuickSecure
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 32,
            fontWeight: 400,
            opacity: 0.8,
            marginTop: 16,
          }}
        >
          Safer Schools Start Here
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: 400,
            opacity: 0.4,
            marginTop: 16,
          }}
        >
          Unified K-12 School Safety Platform
        </div>
      </div>
    ),
    { ...size }
  );
}
