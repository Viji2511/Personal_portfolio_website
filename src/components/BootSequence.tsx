"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 400));
      setStep(1); // Loading Database
      await new Promise((r) => setTimeout(r, 400));
      setStep(2); // 100% Bar
      await new Promise((r) => setTimeout(r, 400));
      setStep(3); // Decrypting Identity
      await new Promise((r) => setTimeout(r, 400));
      setStep(4); // Checking Security
      await new Promise((r) => setTimeout(r, 600));
      setStep(5); // Access Granted
      await new Promise((r) => setTimeout(r, 600));
      onComplete();
    };
    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-pure-black z-50 flex flex-col items-center justify-center font-mono text-crt-cyan">
      <div className="w-full max-w-2xl border border-grid-lines p-8 bg-secondary/50">
        <h1 className="text-2xl mb-4 font-bold tracking-widest text-shadow-crt uppercase">
          System Boot
        </h1>
        
        <div className="space-y-2 text-sm md:text-base">
          <p className="opacity-80">&gt; Initializing Neural Interface...</p>
          
          {step >= 1 && (
            <p className="opacity-80">&gt; Loading User Database...</p>
          )}
          
          {step >= 2 && (
            <p className="text-off-white">&gt; ██████████████████ 100%</p>
          )}

          {step >= 3 && (
            <p className="opacity-80 mt-4">&gt; Decrypting Identity...</p>
          )}

          {step >= 4 && (
            <p className="opacity-80">&gt; Checking Security Clearance...</p>
          )}
          
          {step >= 5 && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-electric-blue font-bold text-xl mt-4 animate-flicker"
            >
              &gt; ACCESS GRANTED
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
