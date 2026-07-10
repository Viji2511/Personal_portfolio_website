"use client";

const archiveLogs = [
  {
    version: "v4.0",
    year: "2024",
    title: "Research Publication",
    type: "CLASSIFIED REPORT",
    details: "Published findings on adaptive neural networks in edge devices. Achieved 40% efficiency increase.",
    status: "ARCHIVED"
  },
  {
    version: "v3.0",
    year: "2023",
    title: "Open Mainframe Project",
    type: "SYSTEM UPDATE",
    details: "Contributed to core architecture. Refactored legacy systems into modular microservices.",
    status: "ARCHIVED"
  },
  {
    version: "v2.0",
    year: "2022",
    title: "Built HydroVigil",
    type: "DATABASE ENTRY",
    details: "Developed AI + IoT water monitoring system. Deployed to 50+ nodes successfully.",
    status: "ARCHIVED"
  },
  {
    version: "v1.0",
    year: "2020",
    title: "Started Engineering",
    type: "SYSTEM BOOT",
    details: "Initial cognitive functions loaded. Began assimilation of syntax and logic structures.",
    status: "ARCHIVED"
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
          <div key={idx} className="border border-grid-lines bg-pure-black p-3 relative flex flex-col md:flex-row gap-4 group hover:border-muted-grey transition-colors">
            {/* Version & Year */}
            <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start md:w-24 shrink-0 border-b md:border-b-0 md:border-r border-grid-lines pb-2 md:pb-0 md:pr-4">
              <span className="text-electric-blue font-bold font-mono text-lg">{log.version}</span>
              <span className="text-muted-grey text-[10px] font-numbers mt-1">{log.year}</span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-off-white font-bold uppercase tracking-wider">{log.title}</span>
                <span className="text-[10px] bg-secondary border border-grid-lines px-1 text-muted-grey font-numbers">
                  {log.type}
                </span>
              </div>
              <p className="text-xs text-muted-grey font-mono leading-relaxed">
                &gt; {log.details}
              </p>
            </div>

            {/* Status */}
            <div className="hidden md:flex flex-col justify-end items-end shrink-0 w-24">
              <span className="text-[10px] text-muted-grey font-numbers line-through opacity-50">{log.status}</span>
            </div>
            
            {/* Hover Decorator */}
            <div className="absolute left-0 top-0 w-1 h-full bg-electric-blue scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
          </div>
        ))}
      </div>
    </div>
  );
}
