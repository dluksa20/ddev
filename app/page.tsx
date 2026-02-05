'use client'
import React from 'react';

/**
 * REFINED MINIMALISTIC TERMINAL UI
 * Focus: High legibility, sharp borders, "System 0" aesthetic.
 */

const TerminalSection = ({ label, title, children }: any) => (
  <div className="group relative border-l border-zinc-800 pl-8 pb-16 last:pb-0">
    {/* Section Indicator */}
    <div className="absolute -left-[1px] top-0 h-4 w-[2px] bg-accent shadow-[0_0_8px_#22d3ee]" />
    
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{label}</span>
        <div className="h-[1px] flex-1 bg-zinc-900" />
      </div>
      <div className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 uppercase italic">
        {title}
      </div>
    </div>
    {children}
  </div>
);

const ProjectCard = ({ name, tech, status, desc }: any) => (
  <div className="border border-zinc-800 p-5 hover:border-accent/40 hover:bg-zinc-900/30 transition-all group/card">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-sm font-bold text-zinc-200 tracking-wider">./{name}</h3>
      <div className="flex items-center gap-2">
        <span className={`text-[8px] ${status === 'LIVE' ? 'text-emerald-500' : 'text-zinc-600'}`}>●</span>
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

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-surface-base text-fg-base font-mono  selection:bg-accent/30">
      
      <div className=" max-w-360 mx-auto">
        
        {/* HEADER AREA */}
        <header className="mb-20">
          <div className="text-[12px] text-fg-base mb-2 tracking-[0.4em] uppercase">System.Terminal.Initialize()</div>
          <h1 className="text-fg-muted text-sm opacity-50">localhost:3000/portfolio.md</h1>
        </header>

        <div className="flex flex-col w-full">
          
          {/* SECTION 01: WHOAMI */}
          <TerminalSection 
            label="usr" 
            title={
              <div className="flex items-center gap-2">
                <span className="text-accent">$</span> WHO<span className="text-accent">AM</span>I
              </div>
            }
          >
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
              Full-stack architect focused on <span className="text-zinc-100 italic">performance-first</span> web applications. 
              I specialize in bridging the gap between heavy-duty backend logic and fluid, pixel-perfect interfaces. 
              Currently exploring automated CI/CD pipelines and micro-interaction design.
            </p>
          </TerminalSection>

          {/* SECTION 02: TOOLS (SKILLS) */}
          <TerminalSection 
            label="sys" 
            title="CORE_STACK"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="text-[10px] font-black text-zinc-600 mb-3 tracking-widest">FRONTEND_ENV</h4>
                <ul className="text-xs space-y-2 text-zinc-300">
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> Next.js 14 / React</li>
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> Tailwind CSS</li>
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-zinc-600 mb-3 tracking-widest">BACKEND_SRV</h4>
                <ul className="text-xs space-y-2 text-zinc-300">
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> Node / TypeScript</li>
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> Django / Python</li>
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> PostgreSQL / Redis</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-black text-zinc-600 mb-3 tracking-widest">INFRA_STRUC</h4>
                <ul className="text-xs space-y-2 text-zinc-300">
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> Docker / K8s</li>
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> AWS / Vercel</li>
                  <li className="flex items-center gap-2"><span className="text-accent">→</span> GitHub Actions</li>
                </ul>
              </div>
            </div>
          </TerminalSection>

          {/* SECTION 03: DEPLOYMENTS (PROJECTS) */}
          <TerminalSection 
            label="exe" 
            title="ACTIVE_DEPLOYMENTS"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard 
                name="AETHER_ENGINE"
                status="LIVE"
                desc="A distributed task processing engine built to handle millions of websocket events in real-time."
                tech={['Go', 'Redis', 'Next.js']}
              />
              <ProjectCard 
                name="VOID_OS"
                status="LIVE"
                desc="A browser-based terminal operating system with a custom file system and command-line parser."
                tech={['TypeScript', 'Tailwind', 'Zustand']}
              />
              <ProjectCard 
                name="SPECTER_API"
                status="OFFLINE"
                desc="High-performance GraphQL gateway for aggregating disparate microservice data sources."
                tech={['Apollo', 'Node.js', 'Postgres']}
              />
              <ProjectCard 
                name="NEBULA_DASH"
                status="LIVE"
                desc="Financial analytics dashboard with real-time SVG charting and predictive trend analysis."
                tech={['D3.js', 'React', 'FastAPI']}
              />
            </div>
          </TerminalSection>

        </div>

        {/* FOOTER */}
        <footer className="mt-20 flex justify-between items-center text-[9px] text-zinc-700 tracking-[0.2em] border-t border-zinc-900 pt-8">
          <div>END_OF_TRANSMISSION</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">GITHUB</a>
            <a href="#" className="hover:text-accent transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-accent transition-colors">MAIL</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;