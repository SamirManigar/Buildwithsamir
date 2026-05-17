import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      itemScope
      itemType="https://schema.org/Person"
      className="relative isolate flex min-h-[100dvh] items-start overflow-hidden pt-36 pb-10 sm:items-center sm:pt-24 sm:pb-12 lg:pt-28"
    >
      {/* Grid background */}
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />

      {/* Radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[640px] w-[640px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.2 250 / 0.7), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 -z-10 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.24 295 / 0.7), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-4">
        <Reveal>
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
            role="status"
            aria-label="Availability status"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-purple)]" aria-hidden="true" />
            <span>Available for high-impact AI / Full Stack roles</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight min-[380px]:text-5xl sm:mt-6 sm:text-6xl sm:leading-[1.05] md:text-7xl">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient" itemProp="name">
              <span className="whitespace-nowrap">Samir Manigar </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <h2
            className="mt-4 text-lg font-medium text-foreground/80 sm:mt-5 sm:text-xl"
            itemProp="jobTitle"
          >
            {PROFILE.role}
          </h2>
        </Reveal>

        <Reveal delay={320}>
          <p
            className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 sm:mt-5 sm:text-lg"
            itemProp="description"
          >
            {PROFILE.hook}
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-blue)] transition-transform hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={PROFILE.resume}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-white/25 hover:bg-white/10"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-muted-foreground sm:mt-16">
            <span
              className="flex items-center gap-2"
              itemProp="homeLocation"
              itemScope
              itemType="https://schema.org/Place"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-blue)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-blue)]" />
              </span>
              Based in <span itemProp="name">{PROFILE.location}</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://aurionstack.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              itemProp="worksFor"
              itemScope
              itemType="https://schema.org/Organization"
            >
              Founder @ <span itemProp="name">Aurion Stack</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
