"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Briefcase, Mail, FileText, BookOpen, Compass } from "lucide-react";

export function HeroIdentity() {
  const [scanStep, setScanStep] = useState(0);
  const [confidence, setConfidence] = useState(12.4);
  const [frame, setFrame] = useState(24589);
  const [latency, setLatency] = useState(18);
  const [isGlitching, setIsGlitching] = useState(false);

  // Live HUD updates
  useEffect(() => {
    if (scanStep < 7) return;
    
    // Update frame counter
    const frameInterval = setInterval(() => {
      setFrame(f => f + 1);
    }, 1000 / 30); // ~30fps
    
    // Fluctuate latency
    const latencyInterval = setInterval(() => {
      setLatency(12 + Math.floor(Math.random() * 15));
    }, 2000);

    // Random glitch effect (every 8-15 seconds)
    const triggerGlitch = () => {
      const nextGlitchTime = 8000 + Math.random() * 7000;
      setTimeout(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200); // Glitch lasts 200ms
        triggerGlitch();
      }, nextGlitchTime);
    };
    
    triggerGlitch();

    return () => {
      clearInterval(frameInterval);
      clearInterval(latencyInterval);
    };
  }, [scanStep]);

  // Simulate scanning boot sequence
  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 800));
      setScanStep(1); // Scanning Subject...
      await new Promise(r => setTimeout(r, 800));
      setScanStep(2); // Initializing Recognition...
      await new Promise(r => setTimeout(r, 800));
      setScanStep(3); // Loading Neural Vision...
      await new Promise(r => setTimeout(r, 800));
      setScanStep(4); // Detecting Face...
      
      // Confidence tick up
      const confidences = [37.2, 61.8, 84.1, 99.84];
      for (const c of confidences) {
        await new Promise(r => setTimeout(r, 400));
        setConfidence(c);
      }
      
      setScanStep(5); // Calculating Identity...
      await new Promise(r => setTimeout(r, 800));
      setScanStep(6); // Verifying Profile...
      await new Promise(r => setTimeout(r, 1000));
      setScanStep(7); // Identity Confirmed / Reveal Face Box
    };
    sequence();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-4 h-full relative font-mono">
      
      {/* LEFT SIDE: Professional Info */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center gap-6 z-10">
        <div className="border border-grid-lines p-6 bg-pure-black/80 relative">
          <div className="absolute top-0 left-0 w-full flex justify-between px-2 text-[10px] text-muted-grey font-numbers -translate-y-1/2 bg-pure-black">
            <span>━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold uppercase tracking-widest text-shadow-crt text-crt-cyan mb-4 leading-tight">
            VIJAYA LAKSHMI M
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm uppercase tracking-wider text-muted-grey mb-6 font-bold">
            <span className="text-electric-blue">AI Engineer</span>
            <span className="hidden lg:inline text-grid-lines">|</span>
            <span className="text-electric-blue">Full Stack Developer</span>
            <span className="hidden lg:inline text-grid-lines">|</span>
            <span className="text-electric-blue">Open Source Contributor</span>
          </div>
          
          <p className="text-sm lg:text-base text-off-white font-mono leading-relaxed border-t border-grid-lines pt-4">
            Building intelligent software,
            AI-powered systems,
            developer tools,
            and research platforms
            that solve real-world problems.
          </p>

          <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-[10px] text-muted-grey font-numbers translate-y-1/2 bg-pure-black">
            <span>━━━━━━━━━━━━━━━━━━━━━━━━━━</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-2 lg:gap-3">
          <a href="#" className="flex items-center gap-2 border border-grid-lines hover:border-crt-cyan text-off-white hover:text-crt-cyan hover:bg-crt-cyan/10 transition-colors px-4 py-2 text-xs uppercase tracking-wider bg-pure-black">
            <FileText size={14} /> Resume
          </a>
          <a href="#" className="flex items-center gap-2 border border-grid-lines hover:border-crt-cyan text-off-white hover:text-crt-cyan hover:bg-crt-cyan/10 transition-colors px-4 py-2 text-xs uppercase tracking-wider bg-pure-black">
            <Terminal size={14} /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 border border-grid-lines hover:border-crt-cyan text-off-white hover:text-crt-cyan hover:bg-crt-cyan/10 transition-colors px-4 py-2 text-xs uppercase tracking-wider bg-pure-black">
            <Briefcase size={14} /> LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 border border-grid-lines hover:border-crt-cyan text-off-white hover:text-crt-cyan hover:bg-crt-cyan/10 transition-colors px-4 py-2 text-xs uppercase tracking-wider bg-pure-black">
            <BookOpen size={14} /> Medium
          </a>
          <a href="#" className="flex items-center gap-2 border border-grid-lines hover:border-crt-cyan text-off-white hover:text-crt-cyan hover:bg-crt-cyan/10 transition-colors px-4 py-2 text-xs uppercase tracking-wider bg-pure-black">
            <Mail size={14} /> Email
          </a>
          <a href="#" className="flex items-center gap-2 border border-electric-blue/50 text-electric-blue hover:bg-electric-blue hover:text-pure-black transition-colors px-4 py-2 text-xs uppercase tracking-wider bg-electric-blue/10">
            <Compass size={14} /> Explore Projects
          </a>
        </div>
      </div>


      {/* RIGHT SIDE: AI Subject Analysis */}
      <div className="w-full lg:w-7/12 relative flex items-center justify-center min-h-[600px]">
        
        {/* Floating HUD Panels (Background layer) */}
        <AnimatePresence>
          {scanStep >= 7 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Identity Panel */}
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-4 left-4 border border-crt-cyan/40 bg-pure-black/95 p-3 text-[10px] shadow-[0_0_10px_rgba(116,249,255,0.1)]"
              >
                <div className="text-muted-grey font-numbers border-b border-grid-lines pb-1 mb-1">IDENTITY</div>
                <div className="text-crt-cyan font-bold text-xs">Vijaya Lakshmi M</div>
                <div className="text-off-white font-bold">AI Engineer</div>
                <div className="text-off-white">Full Stack Developer</div>
              </motion.div>

              {/* Status Panel */}
              <motion.div 
                animate={{ y: [3, -3, 3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-4 right-4 border border-[#72FF4A]/40 bg-pure-black/95 p-3 text-[10px] shadow-[0_0_10px_rgba(114,255,74,0.1)]"
              >
                <div className="text-muted-grey font-numbers border-b border-grid-lines pb-1 mb-1">STATUS</div>
                <div className="text-[#72FF4A] font-bold text-xs animate-pulse">● Available</div>
                <div className="text-off-white">Internships</div>
                <div className="text-off-white">Research</div>
              </motion.div>

              {/* Education Panel */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-0 border border-electric-blue/40 bg-pure-black/95 p-3 text-[10px] shadow-[0_0_10px_rgba(111,203,255,0.1)]"
              >
                <div className="text-muted-grey font-numbers border-b border-grid-lines pb-1 mb-1">EDUCATION</div>
                <div className="text-off-white font-bold text-xs">B.Tech IT</div>
                <div className="text-muted-grey">SSN College</div>
                <div className="text-electric-blue">Final Year</div>
              </motion.div>

              {/* Current Mission Panel */}
              <motion.div 
                animate={{ y: [2, -2, 2] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute bottom-4 left-1/4 border border-grid-lines bg-pure-black/95 p-3 text-[10px] shadow-[0_0_10px_rgba(255,255,255,0.05)]"
              >
                <div className="text-muted-grey font-numbers border-b border-grid-lines pb-1 mb-1">CURRENT MISSION</div>
                <div className="text-off-white font-bold">Open Mainframe</div>
                <div className="text-off-white">LFX Mentorship</div>
                <div className="text-off-white">GMDFS Research</div>
              </motion.div>

              {/* Location Panel */}
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="absolute top-1/3 right-0 border border-electric-blue/40 bg-pure-black/95 p-3 text-[10px] text-right shadow-[0_0_10px_rgba(111,203,255,0.1)]"
              >
                <div className="text-muted-grey font-numbers border-b border-grid-lines pb-1 mb-1">LOCATION</div>
                <div className="text-off-white font-bold text-xs">Chennai</div>
                <div className="text-off-white">India</div>
                <div className="text-electric-blue">Remote Friendly</div>
              </motion.div>
              
              {/* Open Source Panel */}
              <motion.div 
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute bottom-4 right-8 border border-grid-lines bg-pure-black/95 p-3 text-[10px] text-right shadow-[0_0_10px_rgba(255,255,255,0.05)]"
              >
                <div className="text-muted-grey font-numbers border-b border-grid-lines pb-1 mb-1">OPEN SOURCE</div>
                <div className="text-off-white font-bold">GitHub</div>
                <div className="text-off-white">Contributions</div>
                <div className="text-off-white">Research</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* The Surveillance Portrait Container */}
        <div className={`relative w-full max-w-[420px] aspect-[3/4] border border-grid-lines bg-pure-black overflow-hidden group phosphor-flicker ${isGlitching ? 'border-warning-red' : ''}`}>
          
          {/* Camera HUD Overlays */}
          {scanStep >= 7 && (
            <div className="absolute inset-0 pointer-events-none z-40 text-[#72FF4A] font-numbers text-[9px] uppercase tracking-widest p-2 flex flex-col justify-between opacity-80">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-warning-red animate-flicker" /> REC
                </div>
                <div className="text-right">
                  CAM_04<br/>
                  <span className="text-off-white">LIVE</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  FPS 29.97<br/>
                  FRAME {frame.toString().padStart(6, '0')}
                </div>
                <div className="text-right">
                  SIGNAL 98%<br/>
                  LATENCY {latency}ms
                </div>
              </div>
              
              {/* Center Crosshairs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#72FF4A]/30 opacity-50">
                <div className="absolute top-1/2 -left-2 w-2 h-px bg-[#72FF4A]/50" />
                <div className="absolute top-1/2 -right-2 w-2 h-px bg-[#72FF4A]/50" />
                <div className="absolute -top-2 left-1/2 w-px h-2 bg-[#72FF4A]/50" />
                <div className="absolute -bottom-2 left-1/2 w-px h-2 bg-[#72FF4A]/50" />
              </div>
            </div>
          )}

          {/* Thick Vertical Surveillance Lines (Reference Style) */}
          <div className={`surveillance-lines transition-opacity duration-300 ${scanStep >= 7 ? 'opacity-100 group-hover:opacity-50' : 'opacity-20'}`} />
          
          {/* Continuous Vertical Scan Beam */}
          {scanStep >= 7 && <div className="scan-vertical" />}
          
          {/* Portrait Image */}
          <img 
            src="/my-photo.jpeg" 
            alt="Surveillance Feed" 
            className={`w-full h-full object-cover surveillance-feed ${isGlitching ? 'surveillance-glitch-active' : ''} ${scanStep < 7 ? 'opacity-10 grayscale blur-md' : 'group-hover:contrast-[1.8]'}`}
            onError={(e) => { (e.target as HTMLImageElement).src = '/profile.svg' }} // Fallback
          />

          {/* Interactive Hover Zones & Body Landmarks */}
          {scanStep >= 7 && (
            <>
              {/* FACE LANDMARK */}
              <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-30 group/face pointer-events-auto cursor-crosshair">
                <div className="w-1 h-1 bg-[#72FF4A] mx-auto mb-1 animate-pulse" />
                <div className="absolute top-1/2 left-full w-16 h-px bg-[#72FF4A]/30 -rotate-12 transform-gpu" />
                <div className="absolute -top-12 left-16 opacity-0 group-hover/face:opacity-100 transition-opacity bg-pure-black/90 border border-[#72FF4A] p-2 pointer-events-none w-48 z-40">
                  <div className="text-[10px] text-[#72FF4A] border-b border-[#72FF4A]/50 pb-1 mb-1 font-bold">Head / Identity</div>
                  <div className="text-xs text-off-white">Vijaya Lakshmi M</div>
                  <div className="text-[10px] text-muted-grey mt-1">AI Engineer</div>
                </div>
              </div>
              
              {/* EYES LANDMARK */}
              <div className="absolute top-[54%] left-[45%] w-4 h-4 z-30 group/eyes pointer-events-auto cursor-crosshair">
                <div className="w-1 h-1 rounded-full border border-[#72FF4A] mx-auto animate-pulse" />
                <div className="absolute top-1/2 right-full w-12 h-px bg-[#72FF4A]/30 rotate-12 transform-gpu" />
                <div className="absolute -top-6 right-16 opacity-0 group-hover/eyes:opacity-100 transition-opacity bg-pure-black/90 border border-[#72FF4A] p-2 pointer-events-none w-36 z-40">
                  <div className="text-[10px] text-[#72FF4A] border-b border-[#72FF4A]/50 pb-1 mb-1 font-bold">Eyes / Traits</div>
                  <div className="text-[10px] text-off-white">Problem Solver</div>
                  <div className="text-[10px] text-off-white">Research Driven</div>
                </div>
              </div>

              {/* SHOULDER LANDMARK */}
              <div className="absolute top-[80%] left-[25%] w-4 h-4 z-30 group/shoulder pointer-events-auto cursor-crosshair">
                <div className="w-2 h-2 border border-[#72FF4A] mx-auto rotate-45 animate-pulse" />
                <div className="absolute top-1/2 right-full w-10 h-px bg-[#72FF4A]/30 -rotate-12 transform-gpu" />
                <div className="absolute top-0 right-14 opacity-0 group-hover/shoulder:opacity-100 transition-opacity bg-pure-black/90 border border-[#72FF4A] p-2 pointer-events-none w-32 z-40">
                  <div className="text-[10px] text-[#72FF4A] border-b border-[#72FF4A]/50 pb-1 mb-1 font-bold">Shoulder / Status</div>
                  <div className="text-[10px] text-off-white">Available for Opportunities</div>
                </div>
              </div>
            </>
          )}

          {/* Initial Boot Overlays */}
          {scanStep < 7 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-pure-black/80 z-20">
              <div className="w-3/4 max-w-[200px] font-mono text-[10px] md:text-xs">
                <div className="text-electric-blue mb-4 animate-pulse">AI SUBJECT ANALYSIS</div>
                <div className="space-y-1 text-muted-grey">
                  {scanStep >= 1 && <div>&gt; Scanning Subject...</div>}
                  {scanStep >= 2 && <div>&gt; Initializing Recognition...</div>}
                  {scanStep >= 3 && <div>&gt; Loading Neural Vision...</div>}
                  {scanStep >= 4 && (
                    <div className="flex justify-between text-off-white">
                      <span>&gt; Detecting Face...</span>
                      <span className="text-[#72FF4A]">{confidence.toFixed(1)}%</span>
                    </div>
                  )}
                  {scanStep >= 5 && <div>&gt; Calculating Identity...</div>}
                  {scanStep >= 6 && <div>&gt; Verifying Profile...</div>}
                </div>
              </div>
            </div>
          )}

          {/* Neon Green Face Detection Box (Appears after scan) */}
          <AnimatePresence>
            {scanStep >= 7 && (
              <motion.div 
                initial={{ opacity: 0, scale: 1.1, x: '-50%', y: '-50%' }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: ['-50%', '-51%', '-49%', '-50%'],
                  y: ['-50%', '-49%', '-50%', '-51%']
                }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5, type: 'spring' },
                  x: { repeat: Infinity, duration: 4, repeatType: 'mirror' },
                  y: { repeat: Infinity, duration: 3.5, repeatType: 'mirror' }
                }}
                className="absolute top-[60%] left-[50%] w-[45%] h-[25%] border border-[#72FF4A]/80 z-20 pointer-events-none shadow-[0_0_8px_rgba(114,255,74,0.3)] group-hover:border-[#72FF4A] group-hover:shadow-[0_0_15px_rgba(114,255,74,0.6)] transition-all"
              >
                {/* Corner Brackets */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#72FF4A]" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#72FF4A]" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#72FF4A]" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#72FF4A]" />
                
                {/* HUD Labels on detection box */}
                <div className="absolute -top-6 left-0 text-[#72FF4A] text-[9px] font-numbers tracking-widest whitespace-nowrap bg-pure-black/50 px-1 border border-[#72FF4A]/30">
                  FACE: {isGlitching ? 'ERR.##' : '99.84%'}
                </div>
                <div className="absolute -bottom-6 right-0 text-pure-black text-[9px] font-bold font-numbers tracking-widest whitespace-nowrap bg-[#72FF4A] px-2 shadow-[0_0_5px_rgba(114,255,74,0.8)]">
                  LOCKED
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
