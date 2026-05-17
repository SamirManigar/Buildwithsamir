import { Code2, Cloud, Brain } from "lucide-react";
import { STACK } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

const ICONS = [Code2, Cloud, Brain];

export function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-24 py-10 sm:py-20 lg:py-24" aria-label="Core Technology Stack">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <SectionHeading
            kicker="Core Stack"
            title="Tools I ship with"
            subtitle="A focused toolbox spanning modern web, cloud infrastructure, and applied AI."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-14 md:grid-cols-3">
          {STACK.map((group, i) => {
            const Icon = ICONS[i] ?? Code2;
            return (
              <Reveal key={group.title} delay={i * 120}>
                <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[var(--shadow-card-hover)]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand/20 text-foreground ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        itemProp="knowsAbout"
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground/90"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
        {kicker}
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:mt-3 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
