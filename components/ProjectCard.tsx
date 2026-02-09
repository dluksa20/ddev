import { SKILLS } from '@/lib/constants';
import SkillBadges from './SkillBadges';

type ProjectCardProps = {
  name: string;
  tech: string[];
  status: string;
  desc: string;
}

const ProjectCard = ({ name, tech, status, desc }: ProjectCardProps) => {
  return (
    <div className="bg-surface-elevated/70 rounded-md border border-accent/50 p-4 hover:border-accent/30 hover:bg-surface-elevated/30 transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-3 pb-2 border-b border-accent/10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-accent/50 text-xs font-mono">./</span>
            <h3 className="text-sm font-semibold text-text/85 font-mono">
              {name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className={`w-1.5 h-1.5 rounded-full ${status === 'LIVE' ? 'bg-green-400' :
              status === 'MAINTENANCE' ? 'bg-yellow-400' :
                'bg-red-400'
            }`} />
          <span className="text-[9px] uppercase tracking-wider text-text/40 font-mono">
            {status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-text/60 leading-relaxed mb-3">
        {desc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {
          SKILLS.map(({ skills }) => (
            <SkillBadges key={skills[0]?.title} filter={true} skills={skills} skillsArray={tech} />
          ))
        }
      </div>
    </div>
  );
};

export default ProjectCard;