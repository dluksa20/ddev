import React from 'react'

const TerminalFooter = () => {
    return (
        <footer className="shrink-0 bg-surface-elevated/80 backdrop-blur-sm border-t border-accent/20 px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center gap-4">
                {/* Prompt */}
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-accent font-mono text-sm">➜</span>
                    <span className="text-accent/80 font-mono text-sm">~</span>
                </div>

                {/* Input */}
                <input
                    type="text"
                    placeholder="type command..."
                    className="bg-transparent border-none outline-none text-text font-mono text-sm w-full focus:ring-0 placeholder:text-accent/30 caret-accent"
                    autoComplete="off"
                    spellCheck="false"
                />

                {/* Status indicators */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[10px] text-accent/50 uppercase tracking-wider font-mono">
                            ready
                        </span>
                    </div>
                    <span className="text-accent/20">|</span>
                    <span className="text-[10px] text-accent/30 uppercase tracking-wider font-mono">
                        UTF-8
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default TerminalFooter