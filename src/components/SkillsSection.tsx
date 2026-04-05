const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 95 },
        { name: "Spring Boot", level: 92 },
        { name: "Microservices Architecture", level: 90 },
        { name: "RESTful API Design", level: 95 },
        { name: "Maven", level: 85 },
        { name: "Spring Data JPA & Hibernate", level: 88 },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 88 },
        { name: "Angular", level: 82 },
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "HTML / CSS", level: 90 },
      ],
    },
    {
      title: "Databases & Messaging",
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 82 },
        { name: "Redis", level: 80 },
        { name: "Apache Kafka", level: 78 },
      ],
    },
    {
      title: "Security & Testing",
      skills: [
        { name: "Spring Security", level: 88 },
        { name: "JWT", level: 88 },
        { name: "JUnit", level: 85 },
        { name: "Mockito", level: 85 },
      ],
    },
    {
      title: "CS Fundamentals",
      skills: [
        { name: "OOP Principles (SOLID)", level: 88 },
        { name: "Design Patterns", level: 85 },
        { name: "Data Structures & Algorithms", level: 90 },
      ],
    },
    {
      title: "Data, ML & AI Tools",
      skills: [
        { name: "Python", level: 80 },
        { name: "Pandas & NumPy", level: 75 },
        { name: "Scikit-learn", level: 72 },
        { name: "LLMs, RAG & NLP", level: 80 },
      ],
    },
    {
      title: "Cloud, DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Git & GitHub", level: 92 },
        { name: "AWS (EC2, IAM, S3, RDS)", level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">04 — Skills</span>
          <h2 className="section-title mt-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Primary Skills reflecting the tech stack across Backend, Frontend, Cloud, and AI Data workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl glass-card md:col-span-1 col-span-1 ${categoryIndex < 3 ? 'lg:col-span-4' : 'lg:col-span-3'}`}
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
