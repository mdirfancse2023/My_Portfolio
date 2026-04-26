const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "SQL", level: 88 },
        { name: "Python", level: 85 },
      ],
    },
    {
      title: "Backend & Frameworks",
      skills: [
        { name: "Spring Boot", level: 93 },
        { name: "Spring MVC", level: 90 },
        { name: "Microservices", level: 90 },
        { name: "REST APIs", level: 95 },
        { name: "Spring Data JPA", level: 90 },
        { name: "Hibernate", level: 88 },
        { name: "Maven", level: 88 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 82 },
      ],
    },
    {
      title: "Architecture",
      skills: [
        { name: "Distributed Systems", level: 88 },
        { name: "Event-Driven Architecture", level: 86 },
        { name: "API Gateway", level: 84 },
        { name: "Spring Cloud", level: 82 },
        { name: "Resilience4j", level: 80 },
      ],
    },
    {
      title: "Databases & Messaging",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 80 },
        { name: "Apache Kafka", level: 82 },
        { name: "RabbitMQ", level: 78 },
      ],
    },
    {
      title: "Security & Testing",
      skills: [
        { name: "Spring Security", level: 90 },
        { name: "JWT", level: 88 },
        { name: "OAuth2 / OpenID Connect", level: 82 },
        { name: "JUnit", level: 88 },
        { name: "Mockito", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (EC2, S3, RDS, IAM)", level: 82 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "GitHub Actions", level: 82 },
        { name: "Postman", level: 80 },
      ],
    },
    {
      title: "AI / ML & CS",
      skills: [
        { name: "LLM & RAG", level: 85 },
        { name: "NLP", level: 82 },
        { name: "Scikit-learn", level: 78 },
        { name: "Pandas & NumPy", level: 80 },
        { name: "DSA / Design Patterns", level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm">04 — Skills</span>
          <h2 className="section-title mt-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Primary Skills reflecting the tech stack across Backend, Frontend, Cloud, and AI Data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl glass-card"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: 'var(--gradient-primary)',
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
