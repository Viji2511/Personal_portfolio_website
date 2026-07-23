"use client";

const archiveLogs = [
  {
    version: "v2.0",
    year: "2026",
    title: "Open Mainframe Project LFX",
    type: "MEDIUM BLOG",
    details: "Bridging Legacy and Modern Databases: My Midterm Journey in the Open Mainframe Project.",
    status: "PUBLISHED",
    link: "https://medium.com/@vijayalakshmi2310105/bridging-legacy-and-modern-databases-my-midterm-journey-in-the-open-mainframe-project-lfx-2026-e182bb0c8aa9"
  },
  {
    version: "v1.0",
    year: "2026",
    title: "What to Expect in Astronomy",
    type: "ASTRONOMY BLOG",
    details: "Exploring the cosmos and upcoming astronomical events.",
    status: "PUBLISHED",
    link: "https://quantumquill25.blogspot.com/2026/01/what-to-expect.html"
  }
];

export function MissionArchive() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="border-b border-grid-lines pb-2 mb-2 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest text-shadow-crt text-crt-cyan">
            Mission Archive
          </h2>
          <div className="text-[10px] text-muted-grey font-numbers">HISTORICAL_LOGS // SYSTEM_UPDATES</div>
        </div>
        <div className="text-right text-[10px] text-muted-grey font-numbers">
          TOTAL_RECORDS: {archiveLogs.length}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {archiveLogs.map((log, idx) => (
          <a key={idx} href={log.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
            <div className="border border-grid-lines bg-pure-black p-3 relative flex flex-col md:flex-row gap-4 group hover:border-crt-cyan transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              {/* Version & Year */}
              <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start md:w-24 shrink-0 border-b md:border-b-0 md:border-r border-grid-lines pb-2 md:pb-0 md:pr-4 group-hover:border-crt-cyan transition-colors">
                <span className="text-electric-blue group-hover:text-crt-cyan transition-colors font-bold font-mono text-lg">{log.version}</span>
                <span className="text-muted-grey text-[10px] font-numbers mt-1">{log.year}</span>
              </div>
  
              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-off-white font-bold uppercase tracking-wider group-hover:text-white transition-colors">{log.title}</span>
                  <span className="text-[10px] bg-secondary border border-grid-lines px-1 text-muted-grey font-numbers group-hover:border-crt-cyan transition-colors">
                    {log.type}
                  </span>
                </div>
                <p className="text-xs text-muted-grey font-mono leading-relaxed group-hover:text-off-white transition-colors">
                  &gt; {log.details}
                </p>
              </div>
  
              {/* Status */}
              <div className="hidden md:flex flex-col justify-end items-end shrink-0 w-24">
                <span className="text-[10px] text-[#72FF4A] font-numbers animate-pulse">{log.status}</span>
                <span className="text-[10px] text-crt-cyan font-numbers mt-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase">Read Log</span>
              </div>
              
              {/* Hover Decorator */}
              <div className="absolute left-0 top-0 w-1 h-full bg-crt-cyan scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
