// components/TerminalSection.tsx
import { ReactNode } from "react";

const TerminalSection = ({ label, title, children }: {label: String, title: ReactNode, children: ReactNode}) => (
  <div className="font-display group relative border-l border-border/30 pl-8 pb-16">
    <div className='absolute -left-px top-0 h-4 w-0.5 bg-accent' />
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-[11px] text-fg-muted/80 font-light">{label}</span>
        <div className="h-px flex-1 bg-accent/30" />
      </div>
      <div className="font-bold text-fg-base">
        {title}
      </div>
    </div>
    {children}
  </div>
);

export default TerminalSection