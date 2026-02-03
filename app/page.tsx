import React from 'react';

const Page = () => {
  return (
    /* FULL SCREEN WRAPPER */
    <div className="h-screen w-screen bg-background text-text selection:bg-accent/30 font-mono overflow-hidden flex flex-col">
      
      {/* 1. FIXED WINDOW HEADER */}
      <div className="flex items-center justify-between px-5 py-3 bg-background-elevated border-b border-accent/10 z-10 shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-inner" />
        </div>
        <div className="hidden md:block text-[11px] uppercase tracking-[0.2em] text-accent/40 font-bold">
          dovydas — zsh — 144x60
        </div>
        <div className="text-[10px] text-accent/60 md:w-12 text-right">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT AREA */}
      <main className="flex-1 overflow-y-auto relative p-6 md:p-12 custom-scrollbar">
        {/* CRT Scanline Overlay */}
        <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.03)_50%),linear-gradient(90deg,rgba(255,0,0,0.005),rgba(0,255,0,0.002),rgba(0,0,255,0.005))] bg-[length:100%_4px,4px_100%] z-50" />

        <div className="max-w-7xl mx-auto space-y-24 pb-20">
          
          {/* SECTION 1 — INTRO */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-accent/30 text-xs font-bold">USR</span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                <span className="text-accent">$</span> WHOAMI
              </h1>
              <p className="text-xl md:text-2xl text-text/70 leading-relaxed max-w-4xl border-l-4 border-accent pl-6">
                Full-stack developer building <span className="text-white font-semibold">robust digital architectures</span>. 
                Based in the terminal, specializing in Next.js, Django, and the art of clean code.
              </p>
            </div>
          </section>

          {/* SECTION 2 — SYSTEM SPECS (SKILLS) */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-accent/30 text-xs font-bold">SYS</span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Runtime', items: ['Node.js', 'Python 3.11', 'TypeScript'] },
                { title: 'Frameworks', items: ['Next.js 14', 'Django', 'FastAPI', 'React'] },
                { title: 'Infrastructure', items: ['PostgreSQL', 'Docker', 'AWS', 'Nginx'] }
              ].map((spec) => (
                <div key={spec.title} className="space-y-3">
                  <h3 className="text-accent uppercase text-xs tracking-widest font-black italic">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.items.map(item => (
                      <li key={item} className="text-text/80 flex items-center gap-2">
                        <span className="w-1 h-1 bg-accent rounded-full" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 — DEPLOYMENTS (PROJECTS) */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="text-accent/30 text-xs font-bold">EXE</span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { name: 'nebula-core', status: 'online', stack: 'Next.js / Django' },
                { name: 'synth-api', status: 'offline', stack: 'FastAPI / Redis' },
              ].map((proj) => (
                <div key={proj.name} className="bg-background-elevated border border-accent/10 p-6 hover:border-accent/40 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">./{proj.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${proj.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                      <span className="text-[10px] uppercase opacity-50">{proj.status}</span>
                    </div>
                  </div>
                  <p className="text-text/60 text-sm mb-6">
                    A high-performance module designed for real-time data processing and visual synthesis.
                  </p>
                  <div className="text-[10px] font-mono text-accent/60 tracking-widest uppercase">
                    Build: {proj.stack}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* 3. FIXED COMMAND INPUT */}
      <footer className="shrink-0 bg-background-elevated border-t border-accent/10 p-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-accent font-bold shrink-0">λ dovydas ~</span>
          <input 
            type="text" 
            placeholder="enter command (try 'help')..." 
            className="bg-transparent border-none outline-none text-text w-full focus:ring-0 placeholder:text-accent/20"
          />
          <div className="hidden md:block text-[10px] text-accent/30 uppercase tracking-tighter">
            UTF-8
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;