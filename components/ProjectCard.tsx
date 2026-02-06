import React from 'react'

const ProjectCard = ({ name, tech, status, desc }: any) => (
  <div className="border border-border/60 p-5 hover:border-accent/40 hover:bg-zinc-900/30 transition-all group/card">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-sm font-bold text-zinc-200 tracking-wider">./{name}</h3>
      <div className="flex items-center gap-2">
        <span className={`text-[8px] ${status === 'LIVE' ? 'text-emerald-500' : 'text-fg-base'}`}>●</span>
        <span className="text-[9px] text-zinc-500 tracking-tighter">{status}</span>
      </div>
    </div>
    <p className="text-xs text-zinc-500 mb-4 leading-relaxed italic">
      {desc}
    </p>
    <div className="flex gap-2 flex-wrap">
      {tech.map((t: string) => (
        <span key={t} className="text-[9px] px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 group-hover/card:border-accent/20">
          {t}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard
