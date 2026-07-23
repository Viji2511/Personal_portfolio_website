import { GraduationCap, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <div className="p-6 h-full overflow-y-auto font-mono text-off-white">
      <h2 className="text-xl font-bold uppercase tracking-widest text-crt-cyan mb-6 flex items-center gap-2 border-b border-grid-lines pb-4">
        <GraduationCap className="w-6 h-6" /> Academic Record
      </h2>
      
      <div className="space-y-8">
        {/* College */}
        <div className="border border-grid-lines bg-pure-black/80 p-5 relative group hover:border-electric-blue transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-4 px-2 text-[10px] text-muted-grey font-numbers -translate-y-1/2 bg-pure-black border border-grid-lines group-hover:border-electric-blue group-hover:text-electric-blue transition-colors">
            COLLEGE // DEGREE
          </div>
          
          <h3 className="text-lg font-bold text-off-white mb-1 uppercase tracking-wide">Sri Sivasubramaniya Nadar College of Engineering</h3>
          <div className="text-electric-blue text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
            <BookOpen size={14} /> Chennai
          </div>
          
          <div className="flex items-center justify-between border-t border-grid-lines pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-[#72FF4A]" />
              <span className="text-muted-grey uppercase tracking-wider">Current CGPA:</span>
            </div>
            <span className="text-[#72FF4A] font-numbers font-bold text-lg">7.52</span>
          </div>
        </div>

        {/* School */}
        <div className="border border-grid-lines bg-pure-black/80 p-5 relative group hover:border-electric-blue transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-4 px-2 text-[10px] text-muted-grey font-numbers -translate-y-1/2 bg-pure-black border border-grid-lines group-hover:border-electric-blue group-hover:text-electric-blue transition-colors">
            SCHOOL // HIGHER SECONDARY
          </div>
          
          <h3 className="text-lg font-bold text-off-white mb-1 uppercase tracking-wide">Zion Matriculation Higher Secondary School</h3>
          <div className="text-electric-blue text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
            <BookOpen size={14} /> Selaiyur
          </div>
          
          <div className="flex items-center justify-between border-t border-grid-lines pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-[#72FF4A]" />
              <span className="text-muted-grey uppercase tracking-wider">12th Marks:</span>
            </div>
            <span className="text-[#72FF4A] font-numbers font-bold text-lg">95.16%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
