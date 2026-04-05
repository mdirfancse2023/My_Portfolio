import { useState, useEffect } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Trophy, Phone } from "lucide-react";

const roles = [
  { title: "Backend: Java, Spring Boot, Microservices, REST APIs, Maven, JPA, Hibernate", color: "text-rose-400" },
  { title: "Frontend: React, Angular, TypeScript, HTML, CSS", color: "text-pink-400" },
  { title: "Databases & Messaging: PostgreSQL, MySQL, MongoDB, Redis, Kafka", color: "text-violet-400" },
  { title: "Security & Testing: Spring Security, JWT, JUnit, Mockito", color: "text-emerald-400" },
  { title: "CS Fundamentals: OOP, Design Patterns, Data Structures & Algorithms", color: "text-indigo-400" },
  { title: "Data, ML & AI Tools: Python, Pandas, NumPy, Scikit-learn, LLMs, RAG", color: "text-teal-300" },
  { title: "Cloud, DevOps & Tools: Docker, Kubernetes, CI/CD, Git, AWS", color: "text-cyan-400" },
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex].title;
    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === currentRole) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-16 text-center">

        {/* Main Title */}
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 mt-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="gradient-text">Md Irfan</span>
        </h1>

        {/* Animated Role */}
        <div 
          className="h-16 md:h-20 flex items-center justify-center mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
            <span className={`${roles[currentRoleIndex].color} transition-colors duration-300`}>
              {displayText}
            </span>
            <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
          </p>
        </div>

        {/* Value Statement */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          I build scalable, production-ready web applications and data-driven systems 
          that solve real-world problems.
        </p>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all hover-lift glow-effect"
          >
            Hire Me
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="/Md_Irfan_Resume_Software_Developer_3YOE.pdf"
            download="Md_Irfan_Resume_Software_Developer_3YOE.pdf"
            className="flex items-center gap-2 px-8 py-4 border border-border rounded-xl font-semibold hover:bg-secondary transition-all hover-lift"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div 
          className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
           <a
            href="https://github.com/mdirfancse2023"
            target="_blank"
            rel="noopener noreferrer"
             className="p-2.5 sm:p-3 md:p-3 rounded-lg md:rounded-xl border border-border hover:bg-secondary hover:border-primary/50 transition-all"
            aria-label="GitHub"
          >
             <Github className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </a>
          <a
            href="https://linkedin.com/in/mdirfancse2023"
            target="_blank"
            rel="noopener noreferrer"
             className="p-2.5 sm:p-3 md:p-3 rounded-lg md:rounded-xl border border-border hover:bg-secondary hover:border-primary/50 transition-all"
            aria-label="LinkedIn"
          >
             <Linkedin className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </a>
          <a
            href="tel:+916205697622"
             className="p-2.5 sm:p-3 md:p-3 rounded-lg md:rounded-xl border border-border hover:bg-secondary hover:border-primary/50 transition-all"
            aria-label="Call Me"
          >
             <Phone className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </a>
          <a
            href="mailto:mdirfancse2023@gmail.com"
             className="p-2.5 sm:p-3 md:p-3 rounded-lg md:rounded-xl border border-border hover:bg-secondary hover:border-primary/50 transition-all"
            aria-label="Email"
          >
             <Mail className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/mdirfancse2023"
            target="_blank"
            rel="noopener noreferrer"
             className="p-2.5 sm:p-3 md:p-3 rounded-lg md:rounded-xl border border-border hover:bg-secondary hover:border-primary/50 transition-all"
            aria-label="GeeksforGeeks"
          >
             <Code2 className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </a>
          <a
            href="https://leetcode.com/u/mdirfancse2023"
            target="_blank"
            rel="noopener noreferrer"
             className="p-2.5 sm:p-3 md:p-3 rounded-lg md:rounded-xl border border-border hover:bg-secondary hover:border-primary/50 transition-all"
            aria-label="LeetCode"
          >
             <Trophy className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6" />
          </a>
        </div>

        {/* Introduction Video */}
        <div 
          className="mt-10 max-w-2xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <p className="text-sm text-muted-foreground mb-3 font-mono">▶ Watch My Introduction</p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/n2o-iEJJsRY"
              title="Md Irfan - Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
