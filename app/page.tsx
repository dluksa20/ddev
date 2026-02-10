'use client'
import TerminalSection from '@/components/TerminalSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import AccentSwitcher from '@/components/AccentSwitcher';
import ProjectCard from '@/components/ProjectCard';
import { PROJECT_DATA, SKILLS, SOCIALS } from '@/lib/constants';
import Link from 'next/link';
import { DiVim } from 'react-icons/di';
import SkillBadges from '@/components/SkillBadges';
import { Span } from 'next/dist/trace';


const Page = () => {
  return (
    <div className="min-h-screen w-full bg-surface-base text-fg-base font-mono  selection:bg-accent/30">

      <div className="@container mx-auto sm:p-10 md:p-12 xl:pd-0">

        {/* HEADER AREA */}
        <div className="mb-10">
          <div className="text-ui text-fg-base mb-2 tracking-[0.4em] uppercase">System.Terminal.Initialize()</div>
          <h1 className="text-fg-muted text-sm opacity-50">dluksa.dev/Readme.md</h1>
        </div>

        <div className="flex flex-col w-full">

          {/* SECTION 01: WHOAMI */}
          <TerminalSection
            label="usr"
            title="who am i"
          >
            <p className="text-xl font-display leading-9 text-fg-base ">
              Junior <span className='text-accent underline underline-offset-5'>Full-Stack</span> Developer crafting performance-optimized web experiences.
              My current companions <span className='text-accent underline underline-offset-5'>Next.js</span> for responsive,
              SEO-friendly frontends and <span className='text-accent underline underline-offset-5'>Django</span> for scalable API architectures.
              Always learning, always shipping

            </p>
            <div className='flex mt-10 gap-4 items-center '>
              {
                SOCIALS.map(({ title, icon: Icon }) => (
                  <Link key={title} href='/' className='flex items-center gap-2 '>
                    <Icon size={25} style={{ fill: 'none', color: 'var(--color-accent)' }} />
                    <p className='text-[14px] font-display'>{title}</p>
                    <p className='text-accent/30 text-ui mx-1 font-display decoration-0'>|</p>
                  </Link>

                ))
              }
              <p className='flex items-center gap-2 font-display text-[14px]'>More about me<span className='text-accent'>-&gt;</span></p>
            </div>
          </TerminalSection>

          {/* SECTION 02: TOOLS (SKILLS) */}
          <TerminalSection
            label="sys"
            title="core stack"
          >
            <div className='flex justify-between'>
              { 
                SKILLS.map(({section, skills}) => (
                  <SkillBadges key={section} title={section} skills={skills} skillsArray={['React']} />
                ))
              }
            </div>

          </TerminalSection>

          {/* SECTION 03: DEPLOYMENTS (PROJECTS) */}
          <TerminalSection
            label="exe"
            title="active projects"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                PROJECT_DATA.map(({ id, name, status, description, technologies }) => (
                  <ProjectCard
                    key={id}
                    name={name}
                    status={status}
                    desc={description}
                    tech={technologies}
                  />
                ))
              }
            </div>
          </TerminalSection>



          {/* UI Settings */}

          <TerminalSection label='bin' title='ui settings'>
            <div className='flex justify-center items-center h-20'>
              <div className='flex-1'>
                <ThemeSwitcher/>
              </div>
              <div className='flex h-20 w-auto'>
                <AccentSwitcher shape='square' />
              </div>
            </div>
          </TerminalSection>

          <TerminalSection label='etc' title='Helo World'>


          </TerminalSection>

        </div>
        {/* FOOTER */}
        <footer className="mt-20 flex justify-between items-center text-[9px] text-fg-base tracking-[0.2em] border-t border-zinc-900 pt-8">
          <div>END_OF_TRANSMISSION</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">GITHUB</a>
            <a href="#" className="hover:text-accent transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-accent transition-colors">MAIL</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;