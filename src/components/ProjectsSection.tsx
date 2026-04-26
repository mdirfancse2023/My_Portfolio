import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Codexa AI (Lovable Inspired)",
      subtitle: "Ready to Use App Builder",
      points: [
        "Designed and developed an AI-powered full-stack application generator that converts natural language prompts into production-ready applications using Spring Boot, React, and LLMs, reducing manual development effort by ~70%",
        "Architected the system using microservices (HLD + LLD) with clearly defined service boundaries (Intelligence, Workspace, Account), enabling independent scaling, modular development, and efficient deployment",
        "Implemented event-driven architecture using Kafka to handle asynchronous AI workflows (file generation → storage → preview execution), improving system responsiveness by ~60%",
        "Designed optimized data storage using PostgreSQL (metadata) and MinIO (object storage), applied indexing and query optimization strategies to reduce file retrieval latency by ~40%",
        "Built a dynamic preview infrastructure using Kubernetes where each project runs in isolated pods, and implemented Redis-based routing with a custom reverse proxy to map subdomains to ephemeral containers in real-time",
        "Enforced production-ready coding standards using Spring AI with RAG, and deployed on GKE using GitHub Actions CI/CD and Qodana for code quality",
      ],
      tech: ["Spring Boot", "React", "Spring AI", "RAG", "Kafka", "PostgreSQL", "MinIO", "Kubernetes", "Redis", "Docker", "GitHub Actions"],
      github: "https://github.com/mdirfancse2023/distributed-codexaai",
      liveLink: "https://codexa.34.10.18.19.sslip.io/",
      youtubeEmbed: "g3I1pIe1oFU",
      featured: true,
    },
    {
      title: "AI Health Assistant",
      subtitle: "24/7 Personal Health Coach",
      points: [
        "Designed and developed this system using Angular and FastAPI, enabling real-time conversational support for users",
        "Implemented NLP-based emotion detection pipeline, classifying user inputs into emotional categories (e.g., stress, sadness) to drive context-aware response generation",
        "Engineered a personalization and memory system by leveraging user interaction history in PostgreSQL, improving response relevance and increasing user engagement by ~30%",
        "Built a data-driven analytics dashboard using Chart.js, visualizing emotion distribution, user activity trends, and stress vs productivity correlations",
        "Designed and analyzed a feedback-driven evaluation system, achieving ~68% positive response rate and generating actionable insights on user behavior patterns",
      ],
      tech: ["Angular", "FastAPI", "Python", "NLP", "PostgreSQL", "Chart.js"],
      github: "https://github.com/mdirfancse2023/AI_Health_Assistent",
      liveLink: "https://mental-health-app-c6g1.onrender.com/",
      youtubeEmbed: "DZSC1apUFfI",
      featured: true,
    },
    {
      title: "SGAD Frontend",
      subtitle: "Render-hosted frontend demo",
      points: [
        "Built a modern, responsive frontend interface deployed to Render",
        "Designed intuitive navigation and interactive UI components for better user engagement",
        "Optimized the demo for accessibility and mobile-first browsing",
      ],
      tech: ["Frontend", "Responsive Design", "Render", "User Experience"],
      liveLink: "https://frontend-sgad.onrender.com/",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="section-container overflow-hidden">
      <div className="text-center mb-12 md:mb-8">
        <span className="text-primary font-mono text-sm">03 — Projects</span>
        <h2 className="section-title mt-4">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle max-w-2xl mx-auto">
          AI-powered applications and enterprise systems built with modern technologies
        </p>
      </div>

      {/* Featured Projects */}
      <div className="space-y-16 md:space-y-24 mb-12 md:mb-20">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`grid lg:grid-cols-2 gap-6 md:gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Demo Video or Live Demo Placeholder */}
            <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                {project.youtubeEmbed ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeEmbed}`}
                    title={`${project.title} Demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full aspect-video"
                  />
                ) : (
                  <div className="min-h-[18rem] flex items-center justify-center bg-secondary/10 text-muted-foreground text-sm md:text-base px-6 py-8">
                    <div className="text-center">
                      <p className="font-medium">Live demo available</p>
                      <p className="mt-2 text-xs text-muted-foreground">Open the project link to view the frontend demo.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <span className="text-primary font-mono text-sm">Featured Project</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-1 flex items-center gap-3">
                {project.title}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="Source Code"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </h3>
              {project.subtitle && (
                <p className="text-muted-foreground font-medium mb-4">{project.subtitle}</p>
              )}
              <ul className="space-y-2 mb-6">
                {project.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-secondary rounded-lg text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
