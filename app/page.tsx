import TerminalSection from '@/components/TerminalSection'
import React from 'react'

const Page = () => {
  return (
    /* FULL SCREEN TERMINAL CANVAS */
    <div className="relative h-screen w-screen bg-surface-base text-text font-mono overflow-hidden">

      {/* SCROLLABLE CONTENT */}

        {/* CRT SCANLINE OVERLAY */}
        <div
          className="
            pointer-events-none fixed inset-0 z-40
            opacity-[0.08]
            mix-blend-overlay
            bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)]
            bg-[length:100%_3px]
            animate-scan
          "
        />

        {/* CONTENT CONTAINER */}
        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32 pb-32">

          {/* SECTION — INTRO */}
          <TerminalSection
            className="pt-20"
            label="USR"
            title={
              <div className="flex items-center gap-3">
                <span className="text-accent">$</span>
                <span>WHO</span>
                <span className="text-accent">AM</span>
                <span>I</span>
                <span className="w-3 h-10 md:h-12 bg-accent animate-blink inline-block ml-2" />
              </div>
            }
            description={
              <>
                Full-stack developer building{' '}
                <span className="text-accent font-semibold">
                  robust digital architectures
                </span>
                . Based in the terminal, specializing in{' '}
                <span className="text-accent/80">Next.js</span>,{' '}
                <span className="text-accent/80">Django</span>, and the art of clean code.
              </>
            }
          />

          {/* SECTION — SYSTEM SPECS */}
          <TerminalSection
            label="SYS"
            title={
              <div className="flex items-center gap-3">
                <span className="text-accent">&gt;&gt;</span>
                <span>SYSTEM_SPECS</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
              {[
                {
                  title: 'Runtime',
                  icon: '⚡',
                  items: ['Node.js 20.x', 'Python 3.11', 'TypeScript 5.x'],
                },
                {
                  title: 'Frameworks',
                  icon: '🔧',
                  items: ['Next.js 14', 'Django 5.0', 'FastAPI', 'React 18'],
                },
                {
                  title: 'Infrastructure',
                  icon: '🏗️',
                  items: ['PostgreSQL', 'Docker', 'AWS', 'Nginx'],
                },
              ].map((spec) => (
                <div
                  key={spec.title}
                  className="
                    bg-surface-elevated/40
                    border border-accent/15
                    p-6
                    transition-all duration-300
                    hover:border-accent/50
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{spec.icon}</span>
                    <h3 className="text-accent uppercase text-xs tracking-widest font-black">
                      {spec.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {spec.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-text/70 text-sm"
                      >
                        <span className="text-accent text-xs">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TerminalSection>

          {/* SECTION — DEPLOYMENTS */}
          <TerminalSection
            label="EXE"
            title={
              <div className="flex items-center gap-3">
                <span className="text-accent">~/</span>
                <span>DEPLOYMENTS</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
              {[
                {
                  name: 'nebula-core',
                  status: 'online',
                  stack: 'Next.js / Django',
                  description:
                    'High-performance module for real-time data processing and visual synthesis.',
                  uptime: '99.8%',
                  version: 'v2.4.1',
                },
                {
                  name: 'synth-api',
                  status: 'offline',
                  stack: 'FastAPI / Redis',
                  description:
                    'Lightweight API gateway handling async task queues and caching.',
                  uptime: '94.2%',
                  version: 'v1.9.3',
                },
                {
                  name: 'void-dashboard',
                  status: 'online',
                  stack: 'React / PostgreSQL',
                  description:
                    'Real-time analytics dashboard with WebSocket streaming.',
                  uptime: '99.1%',
                  version: 'v3.0.0',
                },
                {
                  name: 'flux-engine',
                  status: 'maintenance',
                  stack: 'Python / Docker',
                  description:
                    'Containerized microservice orchestrator with auto-scaling.',
                  uptime: '97.5%',
                  version: 'v1.5.2',
                },
              ].map((proj) => (
                <div
                  key={proj.name}
                  className="
                    bg-surface-elevated/40
                    border border-accent/15
                    p-6
                    transition-all duration-300
                    hover:border-accent/40
                    hover:-translate-y-1
                  "
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-accent/60 text-sm">./</span>
                      <h3 className="text-lg font-bold">{proj.name}</h3>
                    </div>

                    <span
                      className={`
                        w-2 h-2 rounded-full
                        ${proj.status === 'online' && 'bg-green-400 shadow-[0_0_6px_#4ade80]'}
                        ${proj.status === 'maintenance' && 'bg-yellow-400 shadow-[0_0_6px_#facc15]'}
                        ${proj.status === 'offline' && 'bg-red-400'}
                      `}
                    />
                  </div>

                  <p className="text-sm text-text/60 mb-6 max-w-md">
                    {proj.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs mb-4 pb-4 border-b border-accent/10">
                    <div>
                      <div className="text-accent/40 uppercase tracking-wider">
                        Version
                      </div>
                      <div>{proj.version}</div>
                    </div>
                    <div>
                      <div className="text-accent/40 uppercase tracking-wider">
                        Uptime
                      </div>
                      <div>{proj.uptime}</div>
                    </div>
                  </div>

                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-accent/60">
                    <span>{proj.stack}</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </TerminalSection>

          {/* SECTION — CONTACT */}
          <TerminalSection
            label="NET"
            title={
              <div className="flex items-center gap-3">
                <span className="text-accent">@</span>
                <span>CONNECT</span>
              </div>
            }
            description={
              <>
                Let’s collaborate on something{' '}
                <span className="text-accent font-semibold">extraordinary</span>.
              </>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
              {[
                { label: 'GitHub', value: '@dovydas', icon: '⚡' },
                { label: 'Email', value: 'dev@terminal.io', icon: '✉' },
                { label: 'LinkedIn', value: '/in/dovydas', icon: '💼' },
                { label: 'Discord', value: 'dovydas#0001', icon: '💬' },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="
                    bg-surface-elevated/40
                    border border-accent/20
                    p-4
                    transition-all duration-300
                    hover:border-accent/60
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{contact.icon}</span>
                    <div className="text-[10px] uppercase tracking-widest text-accent/50">
                      {contact.label}
                    </div>
                  </div>
                  <div className="text-sm text-text/80">
                    {contact.value}
                  </div>
                </div>
              ))}
            </div>
          </TerminalSection>
        </div>
    </div>
  )
}

export default Page
