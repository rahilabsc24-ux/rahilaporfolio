import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import pulseDemo from "@/assets/pulse-demo.png.asset.json";
import infinityDemo from "@/assets/infinity-store-demo.png.asset.json";

const GITHUB_URL = "https://github.com/rahilabsc24-ux";
const LINKEDIN_URL = "https://www.linkedin.com/in/rahila-shahnas24090612";
const PORTFOLIO_DOWNLOAD_URL = "/downloads/index.html";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Responsive Web Design"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "CRUD Operations"],
  },
  {
    title: "Database Management",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Authentication & Security",
    skills: ["JWT", "Authentication", "Authorization"],
  },
  {
    title: "Programming Languages",
    skills: ["Java", "C", "C++", "Python"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
  {
    title: "Core Concepts",
    skills: ["API Integration", "JSON", "Client–Server Architecture", "Frontend–Backend Integration"],
  },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Quick Learning",
  "Time Management",
];

const navLinks = [
  { label: "Stack", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rahila Shahnas | Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Rahila Shahnas, a fresher full stack developer in Tamil Nadu. Featured projects: Pulse real-time chat app and Infinity Store e-commerce platform.",
      },
      { property: "og:title", content: "Rahila Shahnas | Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Fresher full stack developer building responsive web applications with React, Node.js and MongoDB.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-32">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-heading text-xl font-bold italic tracking-tight text-foreground">
          RS<span className="text-primary">.</span>
        </a>
        <div className="hidden gap-8 text-sm font-medium uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:rahilabsc24@gmail.com"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90 md:hidden"
        >
          Hire me
        </a>
        <a
          href={PORTFOLIO_DOWNLOAD_URL}
          download="index.html"
          aria-label="Download portfolio as index.html"
          title="Download portfolio"
          className="hidden h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary md:flex"
        >
          <Download aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mb-32">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
        </span>
        Available for opportunities
      </div>
      <h1 className="mb-8 font-heading text-6xl font-bold leading-[0.9] text-foreground md:text-8xl">
        RAHILA
        <br />
        SHAHNAS
      </h1>
      <p className="mb-10 max-w-2xl font-light leading-relaxed text-muted-foreground md:text-2xl">
        Fresher Full Stack Developer based in Tamil Nadu. I build responsive, high-performance
        web applications from front to back — and I learn fast.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          href="mailto:rahilabsc24@gmail.com"
          className="rounded-lg bg-foreground px-8 py-4 font-bold text-background transition-colors hover:bg-primary"
        >
          Get in touch
        </a>
        <a
          href={PORTFOLIO_DOWNLOAD_URL}
          download="index.html"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-4 font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Download aria-hidden="true" className="h-5 w-5" />
          Download portfolio
        </a>
        <div className="flex items-center gap-4 px-6">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            GitHub
          </a>
          <span className="h-1 w-1 rounded-full bg-border"></span>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mb-32">
      <h2 className="mb-12 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
        Technical Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="mb-4 font-heading font-bold text-foreground">{group.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            {skill}
          </span>
        ))}
        <span className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
          Languages: English · Tamil
        </span>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mb-32 space-y-24">
      <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
        Featured Projects
      </h2>

      {/* Pulse — Real-Time Chat Application */}
      <article className="group grid items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-primary/20 font-heading font-bold italic text-primary">
              P
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">Pulse</span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            A real-time chat application for sending and receiving messages instantly. I designed
            a responsive UI for smooth communication and built both the frontend components and
            the backend behind them.
          </p>
          <div className="mb-8 flex gap-3">
            {["React.js", "Node.js", "Express.js"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-foreground/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/rahilabsc24-ux/Pulse"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
          >
            View GitHub Project &rarr;
          </a>
        </div>
        <div className="order-1 overflow-hidden rounded-2xl border border-border bg-card md:order-2">
          <img
            src={pulseDemo.url}
            alt="Pulse — real-time chat application demo with a dark interface and lime green accents"
            className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </article>

      {/* Infinity — E-Commerce Web Application */}
      <article className="group grid items-center gap-12 md:grid-cols-2">
        <div className="order-1 overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={infinityDemo.url}
            alt="Infinity Store — e-commerce web application demo with a navy interface and golden accents"
            className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="order-2">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded bg-gold/20 font-heading font-bold text-gold">
              ∞
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">Infinity Store</span>
          </div>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            An e-commerce web application with product listings, product details and full cart
            management — add, remove and view products. Built with a responsive React frontend
            connected to APIs for application data.
          </p>
          <div className="mb-8 flex gap-3">
            {["React.js", "Bootstrap", "REST API"].map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-foreground/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/rahilabsc24-ux/Infinity-Store"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-bold text-gold hover:underline"
          >
            Explore Repository &rarr;
          </a>
        </div>
      </article>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="grid gap-16 md:grid-cols-2">
      <div>
        <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Experience
        </h2>
        <div className="relative space-y-12 border-l border-border pl-8">
          <div className="relative">
            <div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
            <h4 className="font-heading text-lg font-bold text-foreground">
              Vebbox Software Solution
            </h4>
            <p className="mb-4 text-sm font-medium text-primary">
              Full Stack Developer Intern · Nov 2025 – Dec 2025
            </p>
            <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
              <li>Completed a 21-day internship focused on full stack web development.</li>
              <li>Gained practical experience in frontend and backend development.</li>
              <li>Worked with web technologies to understand application development workflows.</li>
              <li>Built responsive, user-friendly web applications.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Education
        </h2>
        <div className="space-y-8">
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground">
              Bachelor's Degree in Information Technology
            </h4>
            <p className="text-sm italic text-muted-foreground">
              Bon Secours College for Women (Autonomous), Thanjavur
            </p>
            <p className="text-sm text-muted-foreground/70">2024 – 2027</p>
          </div>
          <div className="border-t border-border pt-6">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">
              Certifications
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/80">Full Stack Development</span>
                <span className="text-muted-foreground">HCL GUVI</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground/80">MongoDB: From Zero to CRUD</span>
                <span className="text-muted-foreground">HCL GUVI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const details = [
    { label: "Email", value: "rahilabsc24@gmail.com", href: "mailto:rahilabsc24@gmail.com" },
    { label: "Phone", value: "+91 82481 49465", href: "tel:+918248149465" },
    { label: "LinkedIn", value: "/in/rahila-shahnas24090612", href: LINKEDIN_URL },
    { label: "GitHub", value: "@rahilabsc24-ux", href: GITHUB_URL },
  ];

  return (
    <section id="contact" className="mt-32 border-t border-border pt-20">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-heading text-5xl font-bold tracking-tight text-foreground">
            Let's build
            <br />
            something together.
          </h3>
          <a
            href="mailto:rahilabsc24@gmail.com"
            className="text-2xl font-bold text-foreground underline decoration-primary decoration-2 underline-offset-8 transition-colors hover:text-primary"
          >
            rahilabsc24@gmail.com
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Ayyampettai, Tamil Nadu, India · Open to full stack roles and internships.
          </p>
        </div>
        <div className="flex flex-col justify-end space-y-6 text-sm">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-center gap-4">
              <span className="w-24 shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {detail.label}
              </span>
              {detail.href ? (
                <a
                  href={detail.href}
                  target={detail.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  {detail.value}
                </a>
              ) : (
                <span>{detail.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading font-bold text-foreground">Rahila Shahnas</p>
          <p className="mt-1 text-xs text-muted-foreground">Ayyampettai, Tamil Nadu, India</p>
        </div>
        <div className="flex gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-card px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-card px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
          © 2026 Rahila Shahnas
        </p>
      </div>
    </footer>
  );
}
