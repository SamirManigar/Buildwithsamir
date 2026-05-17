import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Crafted in {PROFILE.location}.
        </div>
        <address className="flex items-center gap-4 text-xs text-muted-foreground not-italic">
          <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground transition-colors" itemProp="email">
            {PROFILE.email}
          </a>
          <span className="opacity-30">·</span>
          <a
            href={PROFILE.agency}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            aurionstack.dev
          </a>
        </address>
      </div>
    </footer>
  );
}
