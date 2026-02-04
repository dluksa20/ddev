import React from 'react'

const TerminalHeader = () => {
    return (
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
    )
}

export default TerminalHeader
