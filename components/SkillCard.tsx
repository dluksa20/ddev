import { IconType } from 'react-icons';

type CardProps = {
    title?: string;
    skills: { title: string; icon: IconType }[];
    filter?: boolean,
    skillsArray?: string[]

};

const SkillCard = ({ title, skills, skillsArray, filter = false }: CardProps) => {

    const filteredSkills = skills
        .filter(skill => skillsArray?.includes(skill.title))
        
    return (
        <div className="space-y-4 font-display">
            {/* Minimal header */}
            {
                !filter ? (
                    <>
                        <div className="flex items-center gap-2">
                            <span className=" rounded-md text-fg-base text-xs border border-accent/60 font-mono uppercase tracking-[0.2em] p-2 bg-accent/10">
                                {title}
                            </span>
                            <div className="h-px flex-1 bg-border/30" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(({ title: skillTitle, icon: Icon }) => (
                                <div
                                    key={skillTitle}
                                    className="flex rounded-md items-center gap-2 px-3 py-1.5 bg-surface-base border border-fg-base/40 text-xs text-text/70 hover:bg-accent/5 hover:border-accent/40 hover:text-accent transition-all"
                                >
                                    <Icon className="text-lg fill-accent/70" />
                                    <span className='text-fg-base'>{skillTitle}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {
                            filteredSkills.map(({ title, icon: Icon }) => (
                                <div className='flex rounded-md items-center gap-1 text-sm text-fg-base/60 '>
                                    <Icon className="fill-acent/20" />
                                    {title}
                                    <span className='text-fg-base/40'>/</span>
                                </div>
                            ))
                        }
                    </div>
                ) 
            }
        </div>
    );
};

export default SkillCard;