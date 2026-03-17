import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#strengths" },
  { label: "Experience", href: "#experience" },
  { label: "Engineering Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const strengths = [
  {
    title: "Integration Engineering",
    text: "Built and maintained 40+ integrations across HRMS, CRM, file storage, knowledge, and project management platforms.",
  },
  {
    title: "Backend Systems & APIs",
    text: "Designed backend services, retrieval flows, and synchronization logic for production systems used in fast-moving startup environments.",
  },
  {
    title: "AI Knowledge Systems",
    text: "Worked on permission-aware retrieval, ingestion, and filtering pipelines for AI-powered workplace knowledge products.",
  },
  {
    title: "Startup Ownership",
    text: "Comfortable owning features end-to-end across architecture, implementation, production debugging, and collaborative rollout.",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Chat Aid",
    period: "May 2025 - Present",
    summary:
      "Working across backend systems, integrations, and AI pipelines in a small engineering team.",
    bullets: [
      "Built Microsoft Teams integration using Graph APIs, OAuth, and background workers.",
      "Developed direct integrations for platforms such as Notion and Confluence, reducing dependency on external services and lowering cost.",
      "Improved AI retrieval pipelines by refining filtering logic, permission checks, and reducing noisy processing paths.",
      "Built admin-controlled knowledge workflows so teams could add trusted question-answer content without requiring external integrations.",
      "Fixed permission logic for admin-provided answers so access could be scoped to a single user, team, or channel instead of being globally available.",
      "Debugged and resolved production issues across integrations and AI workflows with a focus on reliability.",
    ],
  },
  {
    role: "Freelance Software Engineer",
    company: "Springworks",
    period: "Jan 2026 - Present",
    summary:
      "Supporting backend automation and verification workflows with a focus on clean internal operations.",
    bullets: [
      "Built automation for employment verification workflows.",
      "Implemented task routing and review flows for operational teams.",
      "Improved tooling that reduced manual processing steps.",
    ],
  },
  {
    role: "SDE Intern to SDE 1",
    company: "Springworks",
    period: "Aug 2023 - May 2025",
    summary:
      "Built integrations and data pipelines for AI and enterprise workflow products across fast-moving requirements.",
    bullets: [
      "Built and maintained 40+ third-party integrations.",
      "Standardized integration architecture, reducing new integration development time to 4-5 hours.",
      "Reduced sync timelines from days to minutes with incremental ingestion.",
      "Resolved a critical data isolation issue in multi-tenant ingestion.",
      "Built marketplace integrations for HR platforms including Keka and Zoho People.",
      "Worked with customer-facing teams during enterprise onboarding to troubleshoot integration setups.",
      "Fixed Slack integration issues including archived-channel handling to prevent data loss.",
    ],
  },
];

const caseStudies = [
  {
    eyebrow: "Springworks",
    meta: "40+ Integrations",
    title: "Integration Platform",
    description:
      "Built and maintained integrations connecting enterprise tools with AI knowledge systems across HRMS, CRM, knowledge base, and file storage platforms including Jira, Confluence, Notion, HubSpot, SharePoint and Dropbox.",
    chips: [
      "OAuth",
      "Pagination",
      "Rate Limits",
      "Sync Pipelines",
      "Multi-Tenant Isolation",
    ],
    challenges: [
      "Handling different OAuth patterns across providers",
      "Managing pagination, rate limits, and large-scale data synchronization",
      "Ensuring strict multi-tenant data isolation across ingestion flows",
    ],
    approach: [
      "Designed a modular architecture separating auth, data retrieval, sync, and AI ingestion",
      "Standardized integration patterns, reducing duplication and enabling new integrations to be built in 4–5 hours.",
      "Introduced incremental sync so only updated data was processed",
    ],
  },
  {
    eyebrow: "Chat Aid",
    meta: "Microsoft Graph",
    title: "Microsoft Teams Integration",
    description:
      "Built the Microsoft Teams integration that enabled the AI assistant to retrieve knowledge from Teams messages across private channels, public channels, group chats, and meeting chats, while enforcing strict permission controls to ensure data from private sources is only accessible to authorized users.",
    chips: [
      "Microsoft Graph APIs",
      "OAuth",
      "Queue Workers",
      "Rate Limits",
      "Incremental Sync",
      "Permission Management",
    ],
    challenges: [
      "Handling Microsoft Graph API rate limits reliably",
      "Keeping message synchronization consistent in background processing",
      "Ensuring permission-aware retrieval for enterprise data security",
    ],
    approach: [
      "Integrated Microsoft Graph APIs with OAuth authentication",
      "Built background workers to synchronize messages and files asynchronously",
      "Added permission checks so retrieved content matched user access rules",
    ],
  },
  {
    eyebrow: "Chat Aid",
    meta: "Admin Knowledge Control",
    title: "Admin-Provided Documentation and Scoped Answers",
    description:
      "Built a system that allowed admins to provide trusted question-answer documentation directly, without requiring access to their external tools, and control exactly who could access that knowledge.",
    chips: [
      "Access Control",
      "Authorization",
      "Scoped Data Access",
      "AI Knowledge Systems",
    ],
    challenges: [
      "Allowing admins to add trusted answers without the overhead of connecting external tools",
      "Scoping admin-provided knowledge to the right user, team, or channel",
      "Fixing overly broad answer visibility when users escalated incorrect AI responses",
    ],
    approach: [
      "Built admin workflows for creating structured question-answer knowledge inside the product",
      "Implemented access controls so knowledge could be targeted to a user, team, or channel",
      "Improved permission logic so admin-provided answers matched the actual sharing context",
    ],
  },
  {
    eyebrow: "Springworks Freelance",
    meta: "Verification Automation",
    title: "Automated Verification Workflow",
    description:
      "Designed backend automation for employment verification workflows, enabling AI-validated cases to progress without manual intervention and eliminating ~750 manual operations (~45% of cases) within 4 days of release.",
    chips: ["Workflow Automation", "Task Routing", "Operational Tooling"],
    challenges: [
      "Manual review steps were slowing down otherwise straightforward workflows",
      "Operational teams needed clearer routing and review paths when exceptions happened",
      "Automation had to support internal productivity without breaking verification flow correctness",
    ],
    approach: [
      "Built automation for employment verification workflow progression",
      "Implemented task routing and error review flows for operational teams",
      "Improved internal tooling to reduce repetitive processing work and clarify next actions",
    ],
  },
  {
    eyebrow: "Springworks Freelance",
    meta: "Workflow Automation",
    title: "Error Review Task System",
    description:
      "Built an automated error review task system that creates and assigns resolution tasks whenever verification errors are raised, eliminating manual follow-ups and improving turnaround for 100+ daily error cases.",
    chips: [
      "Task Allocation",
      "Workflow Automation",
      "Queue Systems",
      "Operational Tooling",
    ],
    challenges: [
      "Errors raised by QC teams were not tied to actionable tasks, leading to delays in resolution",
      "Teams relied on manual Slack follow-ups to get errors fixed, creating inefficiencies",
      "QC workflows were blocked since tasks could not be completed until errors were resolved",
    ],
    approach: [
      "Integrated error handling with the internal task allocation system to automatically create review tasks",
      "Implemented assignment logic based on agent availability, routing tasks to the responsible user or fallback team members",
      "Automated task lifecycle by closing reporter tasks on error creation and restoring them once the error was resolved",
    ],
  },
];

const skills = [
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "OAuth",
      "Webhooks",
      "Queue Workers",
    ],
  },
  {
    title: "Data",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    title: "Cloud & Ops",
    items: [
      "AWS Lambda",
      "AWS ECS",
      "AWS S3",
      "AWS SQS",
      "AWS Cloudwatch",
      "Azure DevOps",
      "Gitlab CI/CD",
    ],
  },
  {
    title: "Focus Areas",
    items: [
      "Integrations",
      "Automations",
      "AI Pipelines",
      "Production Debugging",
    ],
  },
];

const profileTags = [
  "Clean",
  "Reliable",
  "Empathetic",
  "Structured",
  "Team-Oriented",
  "Quality-Driven",
];

const principles = [
  {
    title: "Reliability First",
    text: "Backend systems should behave predictably under failure. I think carefully about edge cases like API limits, inconsistent external data, and partial failures.",
  },
  {
    title: "Simplicity",
    text: "I prefer architectures that teams can understand, maintain, and extend without unnecessary complexity.",
  },
  {
    title: "Automation",
    text: "I value automation when it clearly reduces repetitive work and improves team efficiency, but only when it keeps systems understandable and reliable.",
  },
];

const themeKey = "riya-portfolio-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = window.localStorage.getItem(themeKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeKey, theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const savedTheme = window.localStorage.getItem(themeKey);

    if (savedTheme) {
      return undefined;
    }

    const handleChange = (event) => {
      setTheme(event.matches ? "light" : "dark");
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          Riya Sethi
        </a>
        <div className={`topbar-actions ${menuOpen ? "is-open" : ""}`}>
          <nav
            className={`topnav ${menuOpen ? "is-open" : ""}`}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <main id="home">
        <section className="hero panel reveal">
          <div className="hero-copy">
            <p className="eyebrow">Backend Software Engineer</p>
            <h1>Reliable systems. Clean engineering. Thoughtful execution.</h1>
            <p className="hero-text">
              I build backend systems, integrations, and AI-powered workflows
              that help teams move faster with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View Engineering Work
              </a>
              <a className="button button-secondary" href="#contact">
                Get In Touch
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <p className="card-label">Current Focus</p>
            <ul className="focus-list">
              <li>
                40+ integrations across enterprise tools and knowledge systems
              </li>
              <li>Node.js APIs, sync pipelines, and backend services</li>
              <li>AI knowledge systems with permissions and retrieval logic</li>
              <li>
                Ownership across shipping, debugging, and reliability in small
                teams
              </li>
            </ul>
          </aside>
        </section>

        <section className="intro-grid reveal">
          <article className="panel intro-card">
            <p className="section-tag">01 / About</p>
            <h2>Backend-first, but always thinking about the whole system.</h2>
            <p>
              I enjoy building systems that remain reliable under real-world
              constraints. My work is centered on integrations, backend
              services, and AI knowledge systems that connect tools, data, and
              people in useful ways.
            </p>
          </article>
          <article className="panel intro-card signature-card">
            <p className="section-tag">Personal Signature</p>
            <div className="trait-grid">
              {profileTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        </section>

        <section id="about" className="content-section reveal">
          <div className="section-heading">
            <p className="section-tag">02 / Profile</p>
            <h2>
              Designing backend systems that feel dependable, maintainable, and
              team-friendly.
            </h2>
          </div>
          <div className="grid-two">
            <article className="panel content-card">
              <p>
                I am a backend-focused software engineer with experience in
                Node.js, integrations, automation systems, and AI-powered
                knowledge platforms. Working in startup environments has shaped
                how I build: structured, collaborative, and deeply focused on
                quality.
              </p>
              <p>
                I like untangling complex moving parts, improving reliability,
                and turning messy workflows into systems that are easier for
                teams to trust and maintain.
              </p>
            </article>
            <article className="panel detail-stack">
              <div>
                <p className="detail-label">Core Stack</p>
                <p>Node.js, Express, MongoDB, MySQL, Redis</p>
              </div>
              <div>
                <p className="detail-label">Strength Areas</p>
                <p>
                  APIs, Integrations, Enterprise Permissions, AI Pipelines,
                  Background Processing
                </p>
              </div>
              <div>
                <p className="detail-label">Work Style</p>
                <p>
                  Collaborative, detail-conscious, calm under pressure, and
                  production-minded
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="strengths" className="content-section reveal">
          <div className="section-heading">
            <p className="section-tag">03 / Strengths</p>
            <h2>A clean, organized way of building backend systems.</h2>
          </div>
          <div className="card-grid">
            {strengths.map((strength, index) => (
              <article className="panel skill-card" key={strength.title}>
                <p className="skill-number">0{index + 1}</p>
                <h3>{strength.title}</h3>
                <p>{strength.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section reveal">
          <div className="section-heading">
            <p className="section-tag">04 / Experience</p>
            <h2>
              Progress shaped by ownership, production learning, and teamwork.
            </h2>
          </div>
          <div className="timeline">
            {experiences.map((experience) => (
              <article
                className="panel timeline-card"
                key={`${experience.company}-${experience.period}`}
              >
                <div className="timeline-head">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}</p>
                  </div>
                  <span>{experience.period}</span>
                </div>
                <p>{experience.summary}</p>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="content-section reveal">
          <div className="section-heading">
            <p className="section-tag">05 / Engineering Work</p>
            <h2>
              Case studies from the backend systems I have built and improved.
            </h2>
          </div>
          <div className="project-grid">
            {caseStudies.map((project) => (
              <article
                className={`panel project-card ${project.featured ? "featured-project" : ""} ${
                  project.placeholder ? "placeholder-project" : ""
                }`}
                key={project.title}
              >
                <div className="project-topline">
                  <span>{project.eyebrow}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtext">{project.meta}</p>
                <p>{project.description}</p>
                <div className="case-study-block">
                  <p className="detail-label">Engineering Challenges</p>
                  <ul>
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="case-study-block">
                  <p className="detail-label">Approach</p>
                  <ul>
                    {project.approach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="impact-line">{project.impact}</p>
                <div className="chip-row">
                  {project.chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal">
          <div className="section-heading">
            <p className="section-tag">06 / Toolkit</p>
            <h2>Tools I trust for stable backend work.</h2>
          </div>
          <div className="tool-columns">
            {skills.map((group) => (
              <article className="panel tool-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal">
          <div className="section-heading">
            <p className="section-tag">07 / Engineering Principles</p>
            <h2>How I think when building backend systems.</h2>
          </div>
          <div className="card-grid principles-grid">
            {principles.map((principle) => (
              <article
                className="panel skill-card principle-card"
                key={principle.title}
              >
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section reveal">
          <article className="panel contact-panel">
            <p className="section-tag">08 / Contact</p>
            <h2>
              Looking for someone who builds dependable systems with care?
            </h2>
            <p>
              I enjoy working on backend platforms, integrations, workflow
              automation, and AI-driven products with collaborative teams.
            </p>
            <div className="contact-links">
              <a href="mailto:riyasethi721@gmail.com">riyasethi721@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/riya-sethi-45402522a/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/riyasethi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://flowcv.com/resume/l8jwaspqcs"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
