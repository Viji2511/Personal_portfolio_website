"use client";

import { useState } from "react";
import { Window } from "./Window";
import { HeroIdentity } from "./HeroIdentity";
import { Education } from "./Education";
import { MissionArchive } from "./MissionArchive";
import { TerminalConnect } from "./TerminalConnect";
import { Terminal, Briefcase, Mail, FileText, BookOpen, Lock } from "lucide-react";

type AppName = "⌂ Home" | "⌘ Projects" | "⚡ Experience" | "⌬ Education" | "✎ Blog" | "☎ Contact";

function RevealedSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8">
      <Lock className="text-warning-red mb-4 w-12 h-12 animate-pulse" />
      <h2 className="text-xl font-bold uppercase tracking-widest text-warning-red mb-2">ACCESS RESTRICTED</h2>
      <p className="text-muted-grey text-sm font-mono max-w-md">
        The {title} module is currently classified. Decryption sequence initiated. 
        Content will be revealed soon.
      </p>
      <div className="mt-8 w-64 h-1 bg-grid-lines relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full bg-warning-red w-1/3 animate-scan" style={{ animationDuration: '2s' }} />
      </div>
    </div>
  );
}

export function Desktop() {
  const [openApps, setOpenApps] = useState<AppName[]>(["⌂ Home"]);
  const [activeApp, setActiveApp] = useState<AppName>("⌂ Home");

  const toggleApp = (appName: AppName) => {
    if (!openApps.includes(appName)) {
      setOpenApps([...openApps, appName]);
    }
    setActiveApp(appName);
  };

  const closeApp = (appName: AppName) => {
    setOpenApps(openApps.filter((app) => app !== appName));
  };

  const navItems: AppName[] = [
    "⌂ Home",
    "⌘ Projects",
    "⚡ Experience",
    "⌬ Education",
    "✎ Blog",
    "☎ Contact",
  ];

  return (
    <div className="flex flex-col md:flex-row h-full w-full p-2 md:p-4 gap-4 relative z-10 font-mono">
      {/* Social Links Top Right */}
      <div className="absolute top-4 right-4 hidden md:flex items-center gap-4 z-50">
        <a href="https://github.com/Viji2511" target="_blank" rel="noopener noreferrer" className="text-muted-grey hover:text-crt-cyan transition-colors" title="GitHub"><Terminal size={18} /></a>
        <a href="https://www.linkedin.com/in/vijaya-lakshmi-m/" target="_blank" rel="noopener noreferrer" className="text-muted-grey hover:text-crt-cyan transition-colors" title="LinkedIn"><Briefcase size={18} /></a>
        <a href="https://medium.com/@vijayalakshmi2310105" target="_blank" rel="noopener noreferrer" className="text-muted-grey hover:text-crt-cyan transition-colors" title="Medium"><BookOpen size={18} /></a>
        <a href="mailto:viji25112005@gmail.com" className="text-muted-grey hover:text-crt-cyan transition-colors" title="Email"><Mail size={18} /></a>
        <a href="#" className="text-muted-grey hover:text-crt-cyan transition-colors" title="Resume"><FileText size={18} /></a>
      </div>

      {/* Side Navigation / System Status Panel */}
      <aside className="w-full md:w-64 border-hud flex flex-row md:flex-col p-4 shrink-0 bg-pure-black/50 overflow-x-auto md:overflow-visible h-auto md:h-full gap-4 md:gap-0 mt-8 md:mt-0">


        <nav className="flex-1 flex flex-row md:flex-col gap-2 shrink-0 md:shrink items-center md:items-stretch overflow-x-auto md:overflow-visible">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => toggleApp(item)}
              className={`whitespace-nowrap shrink-0 text-left px-3 py-2 border text-xs uppercase tracking-wider transition-all
                ${activeApp === item ? 'border-crt-cyan text-crt-cyan bg-crt-cyan/10' : 'border-transparent text-muted-grey hover:border-grid-lines hover:text-off-white'}
              `}
            >
              [ {item} ]
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Window Area */}
      <div className="flex-1 relative mt-8 md:mt-0">
        {openApps.includes("⌂ Home") && (
          <Window 
            title="⌂ Home // WORKSTATION" 
            isActive={activeApp === "⌂ Home"} 
            onClick={() => setActiveApp("⌂ Home")}
            onClose={() => closeApp("⌂ Home")}
          >
            <HeroIdentity />
          </Window>
        )}
        
        {openApps.includes("⌘ Projects") && (
          <Window 
            title="⌘ Projects // REPOSITORIES" 
            isActive={activeApp === "⌘ Projects"} 
            onClick={() => setActiveApp("⌘ Projects")}
            onClose={() => closeApp("⌘ Projects")}
            defaultPosition={{ x: 30, y: 30 }}
          >
            <RevealedSoon title="Projects" />
          </Window>
        )}

        {openApps.includes("⚡ Experience") && (
          <Window 
            title="⚡ Experience // DOSSIER" 
            isActive={activeApp === "⚡ Experience"} 
            onClick={() => setActiveApp("⚡ Experience")}
            onClose={() => closeApp("⚡ Experience")}
            defaultPosition={{ x: 60, y: 60 }}
          >
            <RevealedSoon title="Experience" />
          </Window>
        )}

        {openApps.includes("⌬ Education") && (
          <Window 
            title="⌬ Education // ACADEMICS" 
            isActive={activeApp === "⌬ Education"} 
            onClick={() => setActiveApp("⌬ Education")}
            onClose={() => closeApp("⌬ Education")}
            defaultPosition={{ x: 90, y: 90 }}
          >
            <Education />
          </Window>
        )}

        {openApps.includes("✎ Blog") && (
          <Window 
            title="✎ Blog // MISSION_ARCHIVE" 
            isActive={activeApp === "✎ Blog"} 
            onClick={() => setActiveApp("✎ Blog")}
            onClose={() => closeApp("✎ Blog")}
            defaultPosition={{ x: 120, y: 120 }}
          >
            <MissionArchive />
          </Window>
        )}

        {openApps.includes("☎ Contact") && (
          <Window 
            title="☎ Contact // TERMINAL" 
            isActive={activeApp === "☎ Contact"} 
            onClick={() => setActiveApp("☎ Contact")}
            onClose={() => closeApp("☎ Contact")}
            defaultPosition={{ x: 150, y: 150 }}
          >
            <TerminalConnect />
          </Window>
        )}


      </div>
    </div>
  );
}
