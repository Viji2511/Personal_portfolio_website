"use client";

export function PersonnelFile() {
  return (
    <div className="flex flex-col gap-6 p-4 h-full overflow-y-auto">
      <div className="border-b border-grid-lines pb-2 mb-4">
        <h2 className="text-xl font-bold uppercase tracking-widest text-shadow-crt text-crt-cyan">
          Personnel File // About
        </h2>
        <div className="text-[10px] text-muted-grey font-numbers">PROFILE_OVERVIEW</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        <div className="space-y-4">
          <div className="flex flex-col border border-grid-lines p-3 bg-secondary/30 relative">
            <span className="absolute -top-2 left-2 bg-pure-black px-1 text-[10px] text-muted-grey font-numbers">NAME</span>
            <span className="text-off-white font-mono mt-2">Vijaya Lakshmi M</span>
          </div>
          
          <div className="flex flex-col border border-grid-lines p-3 bg-secondary/30 relative">
            <span className="absolute -top-2 left-2 bg-pure-black px-1 text-[10px] text-muted-grey font-numbers">EDUCATION</span>
            <span className="text-off-white font-mono mt-2">B.Tech in Information Technology<br/><span className="text-muted-grey text-xs">SSN College of Engineering</span></span>
          </div>

          <div className="flex flex-col border border-grid-lines p-3 bg-secondary/30 relative">
            <span className="absolute -top-2 left-2 bg-pure-black px-1 text-[10px] text-muted-grey font-numbers">SPECIALIZATION</span>
            <span className="text-electric-blue font-mono mt-2">Artificial Intelligence, Machine Learning, Full-Stack Development</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col border border-grid-lines p-3 bg-secondary/30 relative">
            <span className="absolute -top-2 left-2 bg-pure-black px-1 text-[10px] text-muted-grey font-numbers">PROFESSIONAL_GOAL</span>
            <span className="text-off-white font-mono mt-2">To engineer scalable, AI-powered solutions that solve complex real-world problems.</span>
          </div>

          <div className="flex flex-col border border-grid-lines p-3 bg-secondary/30 relative border-electric-blue/30">
            <span className="absolute -top-2 left-2 bg-pure-black px-1 text-[10px] text-electric-blue font-numbers">EXPERTISE</span>
            <span className="text-electric-blue font-bold font-mono mt-2">Predictive Modeling, System Architecture, Web Interfaces</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-4 border-t border-grid-lines flex gap-4 items-center bg-pure-black p-4">
         <div className="flex-1 text-xs text-muted-grey font-mono leading-relaxed">
           &gt; A highly motivated AI engineer with a passion for open-source contributions.<br/>
           &gt; Constantly exploring the intersection of design, hardware, and neural networks.<br/>
           &gt; Experienced in taking products from conceptual blueprints to production deployment.
         </div>
      </div>
    </div>
  );
}
