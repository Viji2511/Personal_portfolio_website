"use client";

import { motion } from "framer-motion";
import { ReactNode, useState, useRef } from "react";
import { X, Maximize2, Minus } from "lucide-react";

interface WindowProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
  onClose: () => void;
  defaultPosition?: { x: number, y: number };
}

export function Window({ title, children, isActive, onClick, onClose, defaultPosition = { x: 0, y: 0 } }: WindowProps) {
  const windowRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.95, ...defaultPosition }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseDown={onClick}
      className={`absolute flex flex-col border-hud ${
        isActive ? "z-30 border-crt-cyan/50 shadow-[0_0_15px_rgba(116,249,255,0.1)]" : "z-20 border-grid-lines opacity-80"
      }`}
      style={{ minWidth: 400, minHeight: 300, maxWidth: "100%", maxHeight: "100%" }}
    >
      {/* Title Bar */}
      <div className={`flex items-center justify-between px-2 py-1 border-b border-grid-lines cursor-grab active:cursor-grabbing ${isActive ? 'bg-crt-cyan/10' : 'bg-transparent'}`}>
        <div className="flex items-center gap-2">
          <div className="text-[10px] text-muted-grey font-numbers">SYS.WIN</div>
          <h3 className={`text-xs uppercase tracking-widest ${isActive ? 'text-crt-cyan text-shadow-crt' : 'text-off-white'}`}>
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-muted-grey hover:text-off-white" title="Minimize">
            <Minus size={12} />
          </button>
          <button className="text-muted-grey hover:text-off-white" title="Maximize">
            <Maximize2 size={12} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-muted-grey hover:text-warning-red" title="Close">
            <X size={12} />
          </button>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-pure-black/90 p-4 relative group">
        {/* Tiny corner brackets */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-muted-grey opacity-50" />
        <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-muted-grey opacity-50" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-muted-grey opacity-50" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-muted-grey opacity-50" />
        
        {children}
      </div>
    </motion.div>
  );
}
