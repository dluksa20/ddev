'use client'
import React, { ReactNode } from 'react';
import TerminalSection from '@/components/TerminalSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import AccentSwitcher from '@/components/AccentSwitcher';
import ProjectCard from '@/components/ProjectCard';

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-surface-base text-fg-base font-mono  selection:bg-accent/30">

      <div className=" max-w-360 mx-auto sm:p-10 md:p-12 xl:pd-0">

        {/* HEADER AREA */}
        <header className="mb-10">
          <div className="text-[12px] text-fg-base mb-2 tracking-[0.4em] uppercase">System.Terminal.Initialize()</div>
          <h1 className="text-fg-muted text-sm opacity-50">dluksa.dev/Readme.md</h1>
        </header>

        <div className="flex flex-col w-full">

          {/* SECTION 01: WHOAMI */}
          <TerminalSection
            label="usr"
            title={
              <h1 className="">
                <span className="text-accent">$ </span>
                Who
                <span className="text-accent">Am
                  <span className='text-fg-base'></span>
                </span>I
              </h1>
            }
          >
            <p className="text-xl font-displayu leading-9 text-fg-base">
              Junior <span className='text-accent underline underline-offset-5'>Full-Stack</span> Developer crafting performance-optimized web experiences.
              My current companions <span className='text-accent underline underline-offset-5'>Next.js</span> for responsive,
              SEO-friendly frontends and <span className='text-accent underline underline-offset-5'>Django</span> for scalable API architectures.
              Always learning, always shipping

            </p>
          </TerminalSection>

          {/* SECTION 02: TOOLS (SKILLS) */}
          <TerminalSection
            label="sys"
            title={<h1 className="">
              <span className='text-accent'>$ </span>
              <span className="">Core</span>
              <span className='text-accent'>S</span>
              <span className="">tack</span>
            </h1>}
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
            title={<h1 className="">
              <span className='text-accent'>$ </span>
              <span className="">Active</span>
              <span className='text-accent'>P</span>
              <span className="">rojects</span>
            </h1>}
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

          <TerminalSection label='bin' title={
            <h1>
              <span className='text-accent'>$ </span>
              <span>Ui</span>
              <span className='text-accent'>S</span>
              <span>ettings</span>
            </h1>
          }>
            <div className='flex justify-center flex-col flex-1'>
              <div>
                <ThemeSwitcher />
              </div>
              <div className='flex items-center justify-center'>
                <AccentSwitcher />
              </div>
            </div>
          </TerminalSection>

        </div>
        {/* FOOTER */}
        <footer className="mt-20 flex justify-between items-center text-[9px] text-fg-base tracking-[0.2em] border-t border-zinc-900 pt-8">
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