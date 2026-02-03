const Page = () => {
  return (
    <div className="flex flex-col gap-12 max-w-5xl w-full h-full p-5 mx-auto">

      {/* SECTION 1 — INTRO */}
      <section className="relative w-full h-100 p-6 font-mono tracking-tight text-accent bg-background-elevated border-l-4 border-accent shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        <h1 className="text-xl mb-4">
          <span className="text-accent">$</span>{' '}
          <span className="opacity-90">Hey! I&apos;m</span>
          <span className="font-semibold"> Dovydas</span>
        </h1>

        <p className="leading-relaxed text-text max-w-prose">
          <span className="text-primary mr-1">&gt;</span>
          I’m an aspiring full-stack developer building modern and scalable web applications
          using Next.js and Django. I enjoy working across the stack—from crafting intuitive
          user interfaces to designing clean, reliable backend systems—and I care deeply about
          performance, maintainability, and developer experience.
        </p>

        <span className="inline-block mt-4 text-accent opacity-80">█</span>

        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,255,120,0.05)]" />
      </section>

      {/* SECTION 2 — SKILLS */}
      <section className="relative p-6 font-mono text-accent bg-background-elevated border-l-4 border-accent shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        <h2 className="text-lg mb-4">
          <span className="text-accent">$</span>{' '}
          <span className="opacity-80">ls skills/</span>
        </h2>

        <div className="space-y-3 text-text">
          <p>
            <span className="text-primary mr-2">&gt;</span>
            <span className="opacity-80">frontend:</span>{' '}
            <span className="text-accent">Next.js, React, TypeScript, Tailwind CSS</span>
          </p>

          <p>
            <span className="text-primary mr-2">&gt;</span>
            <span className="opacity-80">backend:</span>{' '}
            <span className="text-accent">Django, Django REST Framework, FastAPI</span>
          </p>

          <p>
            <span className="text-primary mr-2">&gt;</span>
            <span className="opacity-80">databases:</span>{' '}
            <span className="text-accent">PostgreSQL, SQLite</span>
          </p>

          <p>
            <span className="text-primary mr-2">&gt;</span>
            <span className="opacity-80">tooling:</span>{' '}
            <span className="text-accent">Git, Docker, Linux, GitHub Actions</span>
          </p>
        </div>

        <span className="inline-block mt-4 text-accent opacity-80">█</span>
      </section>

      {/* SECTION 3 — PROJECTS */}
      <section className="relative p-6 font-mono text-accent bg-background-elevated border-l-4 border-accent shadow-[0_0_20px_rgba(0,0,0,0.4)]">
        <h2 className="text-lg mb-6">
          <span className="text-accent">$</span>{' '}
          <span className="opacity-80">ls projects/</span>
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          
          {/* PROJECT CARD */}
          <div className="border border-accent/30 p-4">
            <h3 className="text-base mb-2 text-accent font-semibold">
              next-dashboard
            </h3>

            <p className="text-text text-sm mb-3">
              A full-stack analytics dashboard built with Next.js, Django REST,
              and PostgreSQL. Focused on performance and clean API design.
            </p>

            <div className="flex gap-4 text-xs text-accent/80">
              <span>★ 124</span>
              <span>⑂ 32</span>
              <span>PRs 14</span>
            </div>
          </div>

          {/* PROJECT CARD */}
          <div className="border border-accent/30 p-4">
            <h3 className="text-base mb-2 text-accent font-semibold">
              api-starter
            </h3>

            <p className="text-text text-sm mb-3">
              Opinionated Django + FastAPI starter template with authentication,
              Docker setup, and CI workflows.
            </p>

            <div className="flex gap-4 text-xs text-accent/80">
              <span>★ 89</span>
              <span>⑂ 21</span>
              <span>PRs 9</span>
            </div>
          </div>

          {/* PROJECT CARD */}
          <div className="border border-accent/30 p-4">
            <h3 className="text-base mb-2 text-accent font-semibold">
              portfolio-v3
            </h3>

            <p className="text-text text-sm mb-3">
              Personal portfolio built with Next.js and Tailwind, inspired by
              terminal interfaces and documentation layouts.
            </p>

            <div className="flex gap-4 text-xs text-accent/80">
              <span>★ 56</span>
              <span>⑂ 12</span>
              <span>PRs 4</span>
            </div>
          </div>

        </div>

        <span className="inline-block mt-6 text-accent opacity-80">█</span>
      </section>

    </div>
  )
}

export default Page
