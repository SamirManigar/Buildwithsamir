import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Samir Ahmad Manigar — Full Stack Developer & AI Workflow Builder",
      },
      {
        name: "description",
        content:
          "Samir Ahmad Manigar — Full Stack Developer & AI Workflow Builder shipping AI-integrated apps, agentic workflows, and production systems with Next.js, Python, and LLMs.",
      },
      {
        name: "author",
        content: "Samir Ahmad Manigar",
      },
      {
        property: "og:title",
        content: "Samir Ahmad Manigar — Full Stack Developer & AI Workflow Builder",
      },
      {
        property: "og:description",
        content:
          "Specializing in rapid, AI-integrated applications and agentic workflows. Founder at Aurion Stack. Based in Goa, India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://samirmanigar.dev/" },
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
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Stack />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
