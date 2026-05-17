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
        title: "Samir Ahmad Manigar — Expert Full Stack Developer & AI Workflow Architect",
      },
      {
        name: "description",
        content:
          "Expert Full Stack Developer & AI Engineer shipping production-ready web apps with Next.js, React, Node.js, and LLMs. Specializing in agentic workflows and AI-integrated systems.",
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
      { property: "og:url", content: "https://buildwithsamir.dev" },
      { property: "og:image", content: "https://buildwithsamir.dev/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Samir Ahmad Manigar — Full Stack Developer & AI Workflow Builder" },
      { name: "twitter:description", content: "Specializing in rapid, AI-integrated applications and agentic workflows. Founder at Aurion Stack. Based in Goa, India." },
      { name: "twitter:image", content: "https://buildwithsamir.dev/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://buildwithsamir.dev/" },
    ],
    children: (
      <>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://buildwithsamir.dev/#person",
                "name": "Samir Ahmad Manigar",
                "url": "https://buildwithsamir.dev",
                "image": "https://buildwithsamir.dev/og-image.png",
                "jobTitle": "Expert Full Stack Developer & AI Engineer",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Goa",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://github.com/SamirManigar",
                  "https://aurionstack.dev"
                ],
                "description": "Expert Full Stack Developer & AI Engineer specializing in Next.js, React, Node.js, and Agentic AI workflows.",
                "knowsAbout": [
                  "React", "Next.js", "TypeScript", "Node.js", "AI Workflows", "LLM Integration", "Agentic AI", "Python"
                ],
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "DMC College, Assagao"
                },
                "worksFor": {
                  "@type": "Organization",
                  "name": "Aurion Stack"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://buildwithsamir.dev/#website",
                "url": "https://buildwithsamir.dev",
                "name": "Samir Ahmad Manigar",
                "description": "Portfolio of Samir Ahmad Manigar, Full Stack Developer & AI Engineer.",
                "publisher": {
                  "@id": "https://buildwithsamir.dev/#person"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://buildwithsamir.dev?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "ProfessionalService",
                "@id": "https://aurionstack.dev/#service",
                "name": "Aurion Stack",
                "description": "AI agency focused on AI automation and modern web engineering.",
                "url": "https://aurionstack.dev",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Goa",
                  "addressCountry": "IN"
                },
                "areaServed": "Worldwide"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://buildwithsamir.dev/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://buildwithsamir.dev/"
                  }
                ]
              }
            ]
          })}
        </script>
      </>
    ),
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
