import React from 'react'

const TerminalFooter = () => {
    return (
        <footer className="shrink-0 bg-surface-elevated/80 backdrop-blur-sm border-t border-accent/20 px-4 py-3">
            <div className="container mx-auto flex items-center gap-4">
                {/* Prompt */}
                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-accent font-display text-sm">➜</span>
                    <span className="text-accent/80 font-display text-sm">~</span>
                </div>

                {/* Input */}
                <input
                    type="text"
                    placeholder="type command..."
                    className="bg-transparent border-none outline-none text-text font-display text-ui w-full placeholder:text-accent/30 caret-accent"
                    autoComplete="off"
                    spellCheck="false"
                />

                {/* Status indicators */}
                <div className="flex items-center justify-center gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="flex w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-ui text-accent/50 uppercase tracking-wider font-display">
                            ready
                        </span>
                    </div>
                    <span className="text-accent/20">|</span>
                    <span className="text-ui text-accent/30 uppercase tracking-wide font-display">
                        UTF-8
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default TerminalFooter