import { TIMELINE, EDUCATION } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Stack";
import { GraduationCap } from "lucide-react";

export function Timeline() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            kicker="Professional Execution"
            title="Track record"
            subtitle="Founding teams, shipping products, and earning competitive corporate selections."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Timeline */}
          <ol className="relative space-y-8 border-l border-white/10 pl-6">
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[var(--brand-blue)] via-[var(--brand-purple)] to-transparent opacity-60"
            />
            {TIMELINE.map((item, i) => (
              <Reveal key={item.org} delay={i * 100} as="li">
                <div className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-[34px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-[var(--brand-blue)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                  </span>
                  <div className="glass rounded-xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {item.title}
                        <span className="text-foreground/60"> · {item.org}</span>
                      </h3>
                      <span className="text-xs font-medium text-[var(--brand-blue)]">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Education */}
          <Reveal delay={200}>
            <aside className="glass-strong h-full rounded-2xl p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-purple)]">
                Education
              </span>
              <div className="mt-5 flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand/20 ring-1 ring-white/10">
                  <GraduationCap className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{EDUCATION.degree}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{EDUCATION.school}</p>
                  <p className="mt-1 text-xs text-[var(--brand-blue)]">{EDUCATION.period}</p>
                </div>
              </div>
              <div className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-muted-foreground">
                Pairing formal computer science fundamentals with hands-on shipping —
                production AI workflows, scraping pipelines, and full-stack systems.
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
