import React from 'react'
import { IconType } from 'react-icons'
import { SKILLS } from '@/lib/constants'
import SkillCard from '@/components/SkillCard';
import { log } from 'console';



const SkillBox = () => {

    const skillsToShow = ['React', 'Next.js', 'TypeScript', 'Docker'];

    const filteredSkills = SKILLS
        .flatMap(section => section.skills)
        .filter(skill => skillsToShow.includes(skill.title))

    return (
        <div>
            {
                filteredSkills.map((skill) => (
                    <div>
                        {skill.title}
                    </div>
                ))
            }
        </div>
       
    )
}

export default SkillBox
