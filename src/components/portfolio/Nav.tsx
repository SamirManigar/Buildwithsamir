import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-sm font-bold text-primary-foreground shadow-[var(--glow-blue)]">
              SM
            </span>
            <span className="hidden text-sm font-medium text-foreground/90 sm:inline">
              Samir Manigar
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-foreground transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
