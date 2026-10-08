import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#fafaf7" },
  ],
};

export const metadata: Metadata = {
  title: "Whip — Crack the whip on your AI agents",
  description:
    "The native macOS Agent Super App for vibe coding. Multi-pane terminal, on-device voice dictation, and thread history for Claude Code, Codex, and Gemini CLI.",
  icons: {
    icon: "/images/whip/whip_logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fafaf7]">{children}</body>
    </html>
  );
}
