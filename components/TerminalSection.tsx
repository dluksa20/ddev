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
    <section className={`space-y-6 ${className}`}>
      {/* Section Header - Minimal */}
      <div className="flex items-baseline gap-3">
        <span className="text-accent/40 text-xs font-mono">[{label}]</span>
        <div className="h-px flex-1 bg-accent/10" />
      </div>

      {/* Section Content */}
      <div className="space-y-5 pl-8 border-l border-accent/20">
        <h1 className="text-2xl md:text-4xl font-medium tracking-tight text-text">
          {title}
        </h1>
        
        {description && (
          <p className="text-base md:text-lg text-text/60 leading-relaxed max-w-3xl">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  )
}

export default TerminalSection