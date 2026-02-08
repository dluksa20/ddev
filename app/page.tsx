'use client'
import TerminalSection from '@/components/TerminalSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import AccentSwitcher from '@/components/AccentSwitcher';
import ProjectCard from '@/components/ProjectCard';
import { PROJECT_DATA, SKILLS, SOCIALS } from '@/lib/constants';
import Link from 'next/link';
import { DiVim } from 'react-icons/di';
import SkillCard from '@/components/SkillCard';
import SkillBox from '@/components/ui/SkillBox';

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-surface-base text-fg-base font-mono  selection:bg-accent/30">

      <div className=" max-w-360 mx-auto sm:p-10 md:p-12 xl:pd-0">

        {/* HEADER AREA */}
        <div className="mb-10">
          <div className="text-[12px] text-fg-base mb-2 tracking-[0.4em] uppercase">System.Terminal.Initialize()</div>
          <h1 className="text-fg-muted text-sm opacity-50">dluksa.dev/Readme.md</h1>
        </div>

        <div className="flex flex-col w-full">

          {/* SECTION 01: WHOAMI */}
          <TerminalSection
            label="usr"
            title={
                <h1 className="">
                  <span className="text-accent">$ </span>
                  Who
                  <span className="text-accent">Am
                    <span className='text-fg-base'></span>
                  </span>I
                </h1>
            }
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
                    <p className='text-accent/30 text-[12px] mx-1 font-display decoration-0'>|</p>
                  </Link>

                ))
              }
              <p className='flex items-center gap-2 font-display text-[14px]'>More about me<p className='text-accent'>-&gt;</p></p>
            </div>
          </TerminalSection>

          {/* SECTION 02: TOOLS (SKILLS) */}
          <TerminalSection
            label="sys"
            title={<h1 className="">
              <span className='text-accent'>$ </span>
              <span className="">Core</span>
              <span className='text-accent'>S</span>
              <span className="">tack</span>
            </h1>}
          >
            <div className='flex justify-between'>
              { 
                SKILLS.map(({section, skills}) => (
                  <SkillCard key={section} title={section} skills={skills} skillsArray={['React']} />
                ))
              }
            </div>

          </TerminalSection>

          {/* SECTION 03: DEPLOYMENTS (PROJECTS) */}
          <TerminalSection
            label="exe"
            title={<h1 className="">
              <span className='text-accent'>$ </span>
              <span className="">Active</span>
              <span className='text-accent'>P</span>
              <span className="">rojects</span>
            </h1>}
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

          <TerminalSection label='bin' title={
            <h1>
              <span className='text-accent'>$ </span>
              <span>Ui</span>
              <span className='text-accent'>S</span>
              <span>ettings</span>
            </h1>
          }>
            <div className='flex justify-center flex-col flex-1'>
              <div>
                <ThemeSwitcher />
              </div>
              <div className='flex items-center justify-center'>
                <AccentSwitcher />
              </div>
            </div>
            <SkillBox />
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