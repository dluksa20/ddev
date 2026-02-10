'use client'
import TerminalSection from '@/components/TerminalSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import AccentSwitcher from '@/components/AccentSwitcher';
import ProjectCard from '@/components/ProjectCard';
import { PROJECT_DATA, SKILLS, SOCIALS } from '@/lib/constants';
import Link from 'next/link';
import SkillBadges from '@/components/SkillBadges';
import EmailForm from '@/components/EmailForm';



const Page = () => {
  return (
    <div className="min-h-screen w-full bg-surface-base text-fg-base font-display mb-20">

      <div className="max-w-360 mx-auto sm:p-10 ">

        {/* System.Terminal.Initialize() */}
        <div className="mb-10">
          <div className="text-ui text-fg-base mb-2 tracking-default uppercase">System.Terminal.Initialize()</div>
          <h1 className="text-fg-muted text-ui">dluksa.dev/Readme.md</h1>
        </div>


        <div className="flex flex-col w-full">

          {/* SECTION 01: WHO_AM_I */}
          <TerminalSection
            label="usr"
            title="who am i"
          >
            <p className="text-subheading font-display leading-10 tracking-wide text-fg-base ">
              Junior <span className='text-accent underline underline-offset-5'>Full-Stack</span> Developer crafting performance-optimized web experiences.
              My current companions <span className='text-accent underline underline-offset-5'>Next.js</span> for responsive,
              SEO-friendly frontends and <span className='text-accent underline underline-offset-5'>Django</span> for scalable API architectures.
              Always learning, always shipping

            </p>
            <div className='flex mt-10 gap-4 items-center '>
              {
                SOCIALS.map(({ title, icon: Icon }) => (
                  <Link key={title} href='/' className='flex items-center gap-2 '>
                    <Icon size={20} style={{ fill: 'none', color: 'var(--color-accent)' }} />
                    <p className='text-ui'>{title}</p>
                    <p className='text-accent/30 text-ui mx-1'>|</p>
                  </Link>

                ))
              }
            </div>
          </TerminalSection>


          {/* SECTION 02: CORE_STACK */}
          <TerminalSection
            label="sys"
            title="core stack"
          >
            <div className='flex justify-between'>
              {
                SKILLS.map(({ section, skills }) => (
                  <SkillBadges key={section} title={section} skills={skills} />
                ))
              }
            </div>
          </TerminalSection>



          {/* SECTION 03: ACTIVE_PROJECTS */}
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



          {/* SECTION 04: UI_SETTINGS */}

          <TerminalSection label='bin' title='system settings'>

            {/* Themes */}
            <div className='flex gap-2 items-stretch'>
              <div className='flex flex-col container-elevated justify-between flex-1 gap-3 p-5'>
                <ThemeSwitcher />
                <AccentSwitcher shape='square' size='auto' />
              </div>

              {/* System Status */}
              <div className='flex-1 border container-elevated p-5 '>
                <div className='space-y-3'>
                  <div className='text-[10px] uppercase tracking-wider text-accent/50 font-mono'>System Status</div>

                  <div className='space-y-2'>
                    <div className='flex items-center justify-between text-xs font-mono'>
                      <span className='text-text/60'>Services</span>
                      <div className='flex items-center gap-1.5'>
                        <span className='w-1.5 h-1.5 rounded-full bg-green-400'></span>
                        <span className='text-accent/70'>Online</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between text-xs font-mono'>
                      <span className='text-text/60'>Deploy</span>
                      <div className='flex items-center gap-1.5'>
                        <span className='w-1.5 h-1.5 rounded-full bg-green-400'></span>
                        <span className='text-accent/70'>Ready</span>
                      </div>
                    </div>

                    <div className='flex items-center justify-between text-xs font-mono'>
                      <span className='text-text/60'>Uptime</span>
                      <span className='text-accent/70'>99.8%</span>
                    </div>

                    <div className='h-px bg-accent/10 my-2'></div>

                    <div className='flex items-center justify-between text-xs font-mono'>
                      <span className='text-text/60'>Last Deploy</span>
                      <span className='text-accent/70'>2h ago</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex-1 container-elevated'>

              </div>
            </div>
          </TerminalSection>

          <TerminalSection label='etc' title='Helo World'>
              <EmailForm />

          </TerminalSection>

        </div>


        {/* System.Terminal.Initialize() */}
        <footer className="mt-10 flex border-t pt-5 justify-between items-center text-ui text-fg-base tracking-wide ">
          <div className='text-ui text-fg-base mb-2 tracking-default uppercase'>System.Terminal.End()</div>
          <div className="flex gap-4">
            {
              SOCIALS.map(({ title, icon: Icon }) => (
                <Link key={title} href='/' className='flex items-center gap-2 '>
                  <Icon size={20} style={{ fill: 'none', color: 'var(--color-accent)' }} />
                  <p className='text-ui'>{title}</p>
                  <p className='text-accent/30 text-ui mx-1'>|</p>
                </Link>

              ))
            }
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Page;