import React from 'react';
import { IconType } from 'react-icons';

type CardProps = {
  title: string;
  skills: { title: string; icon: IconType }[];
};

const SkillCard = ({ title, skills }: CardProps) => {
  return (
    <div className="space-y-4">
      {/* Minimal header */}
      <div className="flex items-center gap-3">
        <span className="text-accent/50 text-xs font-mono uppercase tracking-[0.2em] px-2 py-1 border border-accent/20 bg-accent/5">
          {title}
        </span>
        <div className="h-px flex-1 bg-accent/10" />
      </div>

      {/* Skills as inline badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map(({ title: skillTitle, icon: Icon }) => (
          <div
            key={skillTitle}
            className="flex items-center gap-2 px-3 py-1.5 bg-surface-elevated/40 border border-accent/20 text-xs text-text/70 hover:bg-accent/10 hover:border-accent/40 hover:text-accent transition-all font-mono"
          >
            <Icon className="text-sm text-accent/60" />
            <span>{skillTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;