"use client";

import { useState } from "react";

const missions = [
  {
    id: "MISSION 01",
    title: "HydroVigil",
    status: "COMPLETED",
    type: "AI + IoT",
    tech: ["Python", "ESP32", "Flask", "TensorFlow"],
    log: "Initializing sensors... OK\nCalibrating AI model... OK\nConnecting to mainframe... ESTABLISHED\nSystem monitoring active.",
    linkRepo: "#",
    linkDemo: "#"
  },
  {
    id: "MISSION 02",
    title: "Neural Architect",
    status: "IN PROGRESS",
    type: "Deep Learning",
    tech: ["PyTorch", "React", "Node.js", "Docker"],
    log: "Training epoch 4500/5000... LOSS: 0.012\nDeploying inference node... OK\nWaiting for client connection...",
    linkRepo: "#",
    linkDocs: "#"
  }
];

export function MissionReports() {
  const [activeMission, setActiveMission] = useState(0);
  const mission = missions[activeMission];

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-full">
      {/* Mission Selector */}
      <div className="w-full md:w-1/3 flex flex-col gap-2 border-r border-grid-lines pr-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-grey mb-2 font-numbers">
          DATABASE_ENTRIES
        </h2>
        {missions.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => setActiveMission(idx)}
            className={`p-3 text-left border transition-colors ${
              activeMission === idx 
                ? "border-crt-cyan bg-crt-cyan/10" 
                : "border-grid-lines bg-pure-black hover:border-muted-grey"
            }`}
          >
            <div className="text-[10px] text-muted-grey font-numbers mb-1">{m.id}</div>
            <div className={`font-bold tracking-wider ${activeMission === idx ? 'text-crt-cyan text-shadow-crt' : 'text-off-white'}`}>
              {m.title}
            </div>
            <div className={`text-[10px] mt-2 inline-block px-1 font-numbers ${
              m.status === 'COMPLETED' ? 'bg-electric-blue/20 text-electric-blue' : 'bg-warning-red/20 text-warning-red'
            }`}>
              {m.status}
            </div>
          </button>
        ))}
      </div>

      {/* Mission Details */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex justify-between items-end border-b border-grid-lines pb-2">
          <div>
            <div className="text-xl font-bold uppercase tracking-widest text-off-white">{mission.title}</div>
            <div className="text-xs text-electric-blue font-mono mt-1">TYPE: {mission.type}</div>
          </div>
          <div className="text-[10px] text-muted-grey font-numbers text-right">
            ROLE: Lead Developer<br/>
            YEAR: 2023 - 2024
          </div>
        </div>

        {/* Wireframe / Screenshot Placeholder */}
        <div className="w-full h-40 border border-grid-lines bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwdiM0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] relative flex items-center justify-center overflow-hidden">
           <div className="text-muted-grey text-xs uppercase tracking-widest bg-pure-black px-2 border border-grid-lines">
             [ VISUAL_DATA_ENCRYPTED ]
           </div>
           {/* Blueprint lines */}
           <div className="absolute top-4 left-4 w-16 h-16 border-t border-l border-electric-blue/30" />
           <div className="absolute bottom-4 right-4 w-16 h-16 border-b border-r border-electric-blue/30" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-[10px] text-muted-grey font-numbers block mb-1">TECHNOLOGY_STACK</span>
            <div className="flex flex-wrap gap-2">
              {mission.tech.map((t, i) => (
                <span key={i} className="text-xs border border-grid-lines px-2 py-1 text-off-white bg-secondary/50">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div>
             <span className="text-[10px] text-muted-grey font-numbers block mb-1">TERMINAL_LOG</span>
             <div className="bg-pure-black border border-grid-lines p-2 text-[10px] font-mono text-muted-grey h-24 overflow-y-auto whitespace-pre-wrap">
               {mission.log}
             </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 flex gap-2 border-t border-grid-lines">
          {mission.linkRepo && (
            <button className="flex-1 py-2 border border-grid-lines text-xs uppercase tracking-wider text-muted-grey hover:text-crt-cyan hover:border-crt-cyan transition-colors bg-secondary/30 hover:bg-crt-cyan/10">
              &gt; Open_Repository
            </button>
          )}
          {mission.linkDocs && (
            <button className="flex-1 py-2 border border-grid-lines text-xs uppercase tracking-wider text-muted-grey hover:text-off-white hover:border-off-white transition-colors bg-secondary/30 hover:bg-off-white/10">
              &gt; Read_Docs
            </button>
          )}
          {mission.linkDemo && (
            <button className="flex-1 py-2 border border-electric-blue/50 text-xs uppercase tracking-wider text-electric-blue hover:bg-electric-blue hover:text-pure-black transition-colors bg-electric-blue/10">
              &gt; Launch_Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
