import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer // Classified OS",
  description: "Interactive intelligence terminal and research archive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-mono text-off-white bg-pure-black overflow-hidden selection:bg-crt-cyan selection:text-pure-black">
        {/* Global SVG Filters for Surveillance Effect */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
          <filter id="surveillance-glitch">
            <feColorMatrix type="matrix" values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 1 0" result="original"/>
            {/* Chromatic Aberration: Shift Red left, Blue right */}
            <feOffset dx="-3" dy="0" in="SourceGraphic" result="red-shift"/>
            <feOffset dx="3" dy="0" in="SourceGraphic" result="blue-shift"/>
            <feColorMatrix type="matrix" values="
              1 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 1 0" in="red-shift" result="red-only"/>
            <feColorMatrix type="matrix" values="
              0 0 0 0 0
              0 0 0 0 0
              0 0 1 0 0
              0 0 0 1 0" in="blue-shift" result="blue-only"/>
            <feColorMatrix type="matrix" values="
              0 0 0 0 0
              0 1 0 0 0
              0 0 0 0 0
              0 0 0 1 0" in="SourceGraphic" result="green-only"/>
            <feBlend mode="screen" in="red-only" in2="blue-only" result="rb"/>
            <feBlend mode="screen" in="rb" in2="green-only" result="chromatic-aberration"/>
            <feTurbulence type="fractalNoise" baseFrequency="0.05 0.9" numOctaves="1" result="noise"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" in="noise" result="colored-noise"/>
            <feBlend mode="overlay" in="chromatic-aberration" in2="colored-noise" result="final-glitch"/>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
