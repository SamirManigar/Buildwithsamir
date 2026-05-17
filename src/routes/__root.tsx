import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Samir Ahmad Manigar | Expert Full Stack Developer & AI Engineer" },
      { name: "description", content: "Hire Samir Ahmad Manigar, an expert Full Stack Developer specializing in Next.js, React, Node.js, and Agentic AI workflows. Building high-performance web applications and AI-integrated systems." },
      { name: "keywords", content: "Full Stack Developer, AI Engineer, Next.js Developer, React Developer, Node.js, TypeScript, Agentic AI, LLM Integration, SaaS Developer, Web Developer Goa, Software Engineer Portfolio" },
      { name: "author", content: "Samir Ahmad Manigar" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "theme-color", content: "#09090b" },
      { name: "msapplication-TileColor", content: "#09090b" },
      { name: "application-name", content: "Samir Dev" },
      { name: "geo.region", content: "IN-GA" },
      { name: "geo.placename", content: "Goa" },
      { name: "geo.position", content: "15.2993;74.1240" },
      { name: "ICBM", content: "15.2993, 74.1240" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:site_name", content: "Samir Ahmad Manigar" },
      { property: "og:title", content: "Samir Ahmad Manigar | Full Stack Developer & AI Engineer" },
      { property: "og:description", content: "Building high-impact AI-integrated applications and agentic workflows." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://buildwithsamir.dev" },
      { property: "og:image", content: "https://buildwithsamir.dev/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@SamirManigar" },
      { name: "twitter:creator", content: "@SamirManigar" },
      { name: "twitter:title", content: "Samir Ahmad Manigar | Full Stack Developer & AI Engineer" },
      { name: "twitter:description", content: "Building high-impact AI-integrated applications and agentic workflows." },
      { name: "twitter:image", content: "https://buildwithsamir.dev/og-image.png" },
    ],
    links: [
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
