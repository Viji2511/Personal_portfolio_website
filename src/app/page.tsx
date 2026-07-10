"use client";

import { useState } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Desktop } from "@/components/Desktop";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="h-screen w-screen overflow-hidden bg-pure-black relative text-off-white font-sans">
      {/* Background Global Effects */}
      <div className="noise-bg" />
      <div className="bg-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="scanline" />
      <div className="crt-overlay" />

      {/* Main Content */}
      {!booted ? (
        <BootSequence onComplete={() => setBooted(true)} />
      ) : (
        <Desktop />
      )}
    </main>
  );
}
