import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem de compartilhamento (Open Graph / Twitter) gerada dinamicamente.
// Aplica-se a todas as páginas do site.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #2A1240 0%, #5B2A8C 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          border: "1px solid rgba(255,255,255,0.35)",
          borderRadius: "999px",
          padding: "10px 22px",
          color: "#C9A0F0",
          fontSize: "26px",
          fontWeight: 600,
        }}
      >
        {SITE_TAGLINE}
      </div>

      <div
        style={{
          display: "flex",
          color: "#ffffff",
          fontSize: "92px",
          fontWeight: 700,
          marginTop: "36px",
        }}
      >
        {SITE_NAME}
      </div>

      <div
        style={{
          display: "flex",
          color: "rgba(255,255,255,0.9)",
          fontSize: "36px",
          fontWeight: 400,
          marginTop: "20px",
          maxWidth: "820px",
          lineHeight: 1.35,
        }}
      >
        Conectividade e tecnologia para empresas que não podem parar.
      </div>
    </div>,
    { ...size },
  );
}
