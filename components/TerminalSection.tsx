// components/TerminalSection.tsx
import React from 'react'

interface TerminalSectionProps {
  label: string
  title: React.ReactNode
  description?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

const TerminalSection = ({ 
  label, 
  title, 
  description, 
  className = '',
  children
}: TerminalSectionProps) => {
  return (
    <section className={`space-y-7 ${className} px-10 font-display`}>
      <div className="flex items-center gap-5 group">
          <span className="text-accent/50 font-semibold  text-xs">
          <span className='text-primary'>&gt;&gt; </span>
           /{label}
          </span>
        <div className="h-px flex-1 bg-accent/20" />
      </div>

      {/* Content area */}
      <div className="space-y-5 pl-6">
        {/* Simple monospace title */}
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-text/90 font-mono">
          {title}
        </h1>
        
        {/* Clean description box */}
        {description && (
          <div className="pl-5 py-3 border-l border-accent/30">
            <p className="text-sm md:text-base text-text/65 leading-relaxed max-w-4xl">
              {description}
            </p>
          </div>
        )}
        
        {children}
      </div>
    </section>
  )
}

export default TerminalSection