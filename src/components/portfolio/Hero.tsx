import { ArrowRight, Github, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
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
        style={{ background: "radial-gradient(circle, oklch(0.65 0.24 295 / 0.7), transparent 60%)" }}
      />

      <div className="mx-auto w-full max-w-6xl px-4">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--brand-purple)]" />
            <span>Available for high-impact AI / Full Stack roles</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-gradient">{PROFILE.name}.</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-5 text-lg font-medium text-foreground/80 sm:text-xl">
            {PROFILE.role}
          </p>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {PROFILE.hook}
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--glow-blue)] transition-transform hover:scale-[1.02]"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-white/25 hover:bg-white/10"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-16 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-blue)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-blue)]" />
              </span>
              Based in {PROFILE.location}
            </span>
            <span className="hidden sm:inline">·</span>
            <a href="https://aurionstack.dev" target="_blank" rel="noopener noreferrer" className="hidden sm:inline hover:text-foreground transition-colors">Founder @ Aurion Stack</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
