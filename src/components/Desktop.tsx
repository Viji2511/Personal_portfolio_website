"use client";

import { useState } from "react";
import { Window } from "./Window";
import { HeroIdentity } from "./HeroIdentity";
import { PersonnelFile } from "./PersonnelFile";
import { HardwareDiagnostics } from "./HardwareDiagnostics";
import { MissionReports } from "./MissionReports";
import { MissionArchive } from "./MissionArchive";
import { TerminalConnect } from "./TerminalConnect";
import { Terminal, Briefcase, Mail, FileText, BookOpen } from "lucide-react";

type AppName = "⌂ Home" | "⌘ Projects" | "⌬ Experiments" | "⚡ Research" | "✎ Blog" | "☎ Contact" | "ⓘ System Info";

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
    "⚡ Research",
    "⌬ Experiments",
    "✎ Blog",
    "☎ Contact",
    "ⓘ System Info",
  ];

  return (
    <div className="flex flex-col md:flex-row h-full w-full p-2 md:p-4 gap-4 relative z-10 font-mono">
      {/* Social Links Top Right */}
      <div className="absolute top-4 right-4 hidden md:flex items-center gap-4 z-50">
        <a href="#" className="text-muted-grey hover:text-crt-cyan transition-colors" title="GitHub"><Terminal size={18} /></a>
        <a href="#" className="text-muted-grey hover:text-crt-cyan transition-colors" title="LinkedIn"><Briefcase size={18} /></a>
        <a href="#" className="text-muted-grey hover:text-crt-cyan transition-colors" title="Medium"><BookOpen size={18} /></a>
        <a href="#" className="text-muted-grey hover:text-crt-cyan transition-colors" title="Email"><Mail size={18} /></a>
        <a href="#" className="text-muted-grey hover:text-crt-cyan transition-colors" title="Resume"><FileText size={18} /></a>
      </div>

      {/* Side Navigation / System Status Panel */}
      <aside className="w-full md:w-64 border-hud flex flex-row md:flex-col p-4 shrink-0 bg-pure-black/50 overflow-x-auto md:overflow-visible h-auto md:h-full gap-4 md:gap-0 mt-8 md:mt-0">
        <div className="md:mb-8 md:border-b border-grid-lines md:pb-4 shrink-0 pr-4 border-r md:border-r-0 md:pr-0">
          <h2 className="text-crt-cyan text-sm uppercase tracking-widest animate-flicker whitespace-nowrap">PROFESSIONAL METRICS</h2>
          <ul className="text-xs mt-2 space-y-1 font-numbers text-muted-grey hidden md:block">
            <li className="flex justify-between"><span>EXPERIENCE</span> <span className="text-off-white">4+ Years</span></li>
            <li className="flex justify-between"><span>PROJECTS</span> <span className="text-electric-blue">15+</span></li>
            <li className="flex justify-between"><span>RESEARCH</span> <span>4</span></li>
            <li className="flex justify-between"><span>OPEN SOURCE</span> <span>20+</span></li>
            <li className="flex justify-between"><span>COMMITS</span> <span>300+</span></li>
          </ul>
        </div>

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
            <MissionReports />
          </Window>
        )}

        {openApps.includes("⌬ Experiments") && (
          <Window 
            title="⌬ Experiments // PROTOTYPES" 
            isActive={activeApp === "⌬ Experiments"} 
            onClick={() => setActiveApp("⌬ Experiments")}
            onClose={() => closeApp("⌬ Experiments")}
            defaultPosition={{ x: 60, y: 60 }}
          >
            <HardwareDiagnostics />
          </Window>
        )}

        {openApps.includes("⚡ Research") && (
          <Window 
            title="⚡ Research // PUBLICATIONS" 
            isActive={activeApp === "⚡ Research"} 
            onClick={() => setActiveApp("⚡ Research")}
            onClose={() => closeApp("⚡ Research")}
            defaultPosition={{ x: 90, y: 90 }}
          >
            <PersonnelFile />
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
