"use client";

const skills = [
  { category: "AI", items: ["Python", "TensorFlow", "PyTorch", "HuggingFace", "OpenAI API"] },
  { category: "Backend", items: ["FastAPI", "Flask", "Node.js", "PostgreSQL", "MongoDB"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { category: "Cloud & Ops", items: ["Docker", "GitHub Actions", "Linux", "AWS"] },
];

export function HardwareDiagnostics() {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div className="border-b border-grid-lines pb-2 mb-2 flex justify-between items-end">
        <div>
          <h2 className="text-xl font-bold uppercase tracking-widest text-shadow-crt text-crt-cyan">
            Installed Modules
          </h2>
          <div className="text-[10px] text-muted-grey font-numbers">CORE_TECHNOLOGY_STACK</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="border border-grid-lines p-4 bg-pure-black relative overflow-hidden group hover:border-crt-cyan/50 transition-colors">
            {/* Background scanning effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crt-cyan/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-linear pointer-events-none" />
            
            <div className="flex justify-between items-center mb-4 border-b border-grid-lines/50 pb-2">
              <span className="text-electric-blue font-bold uppercase tracking-wider">{skill.category}</span>
              <span className="text-[10px] text-muted-grey font-numbers px-2 py-1 bg-secondary border border-grid-lines">ACTIVE</span>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="text-xs bg-secondary/50 border border-grid-lines px-2 py-1 text-off-white font-mono hover:bg-crt-cyan/10 hover:text-crt-cyan transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Blueprint Decorator */}
            <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-electric-blue/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
