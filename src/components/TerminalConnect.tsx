"use client";

import { useState, useEffect } from "react";

const commands = [
  { cmd: "ping email", out: "Reply from [ENCRYPTED]: bytes=32 time<1ms TTL=64\n> TARGET: hello@vijayalakshmi.ai" },
  { cmd: "ssh linkedin", out: "Connecting to LinkedIn Mainframe...\nAuthentication successful.\n> PROFILE: linkedin.com/in/vijayalakshmi" },
  { cmd: "curl github", out: "Fetching repositories...\n200 OK\n> REPO: github.com/vijayalakshmi" },
  { cmd: "cat resume.pdf", out: "Decoding binary stream...\n> RESUME: /assets/resume_latest.pdf" }
];

export function TerminalConnect() {
  const [history, setHistory] = useState<{cmd: string, out: string}[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  
  // Simulate auto-typing commands for dramatic effect on mount
  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      for (const item of commands) {
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) break;
        setHistory(prev => [...prev, { cmd: item.cmd, out: item.out }]);
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="flex flex-col h-full bg-pure-black p-4 font-mono text-sm relative">
      <div className="absolute top-0 right-0 p-2 text-[10px] text-muted-grey font-numbers opacity-50">
        TERMINAL_ACTIVE // SECURE_CHANNEL
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-4 pb-8">
        <div className="text-muted-grey mb-4">
          &gt; INITIALIZING COMMUNICATION PROTOCOLS...<br/>
          &gt; SECURE CONNECTION ESTABLISHED.<br/>
          &gt; TYPE COMMAND TO CONNECT OR CLICK LINKS BELOW.
        </div>

        {history.map((h, i) => (
          <div key={i} className="space-y-1">
            <div className="text-off-white">
              <span className="text-electric-blue">root@os</span>:<span className="text-crt-cyan">~</span>$ {h.cmd}
            </div>
            <div className="text-muted-grey whitespace-pre-wrap pl-4 border-l border-grid-lines ml-1 py-1">
              {h.out}
            </div>
          </div>
        ))}

        <div className="flex items-center">
          <span className="text-electric-blue">root@os</span>:<span className="text-crt-cyan">~</span>$
          <span className="ml-2 text-off-white">{currentInput}</span>
          <span className="w-2 h-4 bg-crt-cyan ml-1 animate-flicker inline-block" />
        </div>
      </div>
      
      {/* Interactive Links disguised as command outputs */}
      <div className="border-t border-grid-lines pt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-xs uppercase tracking-widest text-center">
        <a href="mailto:hello@example.com" className="border border-grid-lines p-2 hover:border-crt-cyan hover:text-crt-cyan transition-colors bg-secondary/30">
          [ EMAIL ]
        </a>
        <a href="#" className="border border-grid-lines p-2 hover:border-crt-cyan hover:text-crt-cyan transition-colors bg-secondary/30">
          [ LINKEDIN ]
        </a>
        <a href="#" className="border border-grid-lines p-2 hover:border-crt-cyan hover:text-crt-cyan transition-colors bg-secondary/30">
          [ GITHUB ]
        </a>
        <a href="#" className="border border-grid-lines p-2 hover:border-crt-cyan hover:text-crt-cyan transition-colors bg-secondary/30">
          [ RESUME ]
        </a>
      </div>
    </div>
  );
}
