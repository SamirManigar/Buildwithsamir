import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Stack";

export function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            kicker="Featured Architectures"
            title="Selected work"
            subtitle="Production systems where I owned architecture, AI integration, and shipping velocity."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="group relative h-full overflow-hidden rounded-2xl">
                {/* Gradient border on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.2 250 / 0.5), oklch(0.65 0.24 295 / 0.5))",
                    padding: "1px",
                    WebkitMask:
                      "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div className="glass relative flex h-full flex-col rounded-2xl p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-purple)] ring-1 ring-white/10">
                        {p.role}
                      </span>
                      <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                        {p.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-foreground/70">{p.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
