import { Code2, Database, Brain, Video } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Java, Spring Boot, React/Angular with RESTful APIs, JPA, Hibernate & Spring Security",
    },
    {
      icon: Database,
      title: "Enterprise Systems",
      description: "Core banking at TCS — Kafka messaging, Maker-Checker workflows & 20% query optimization",
    },
    {
      icon: Brain,
      title: "AI & ML Integration",
      description: "Spring AI, RAG pipelines, LLMs, vector embeddings & Python-based ML with Scikit-learn",
    },
    {
      icon: Video,
      title: "Content Creator",
      description: "Interview experiences, Java courses & competitive coding on VirtualGyans",
    },
  ];

  return (
    <section id="about" className="section-container overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left - Text Content */}
        <div>
          <span className="text-primary font-mono text-sm">01 — About Me</span>
          <h2 className="section-title mt-4">
            Building the future,<br />
            <span className="gradient-text">one line at a time</span>
          </h2>
          
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mt-8">
            <p>
              I'm <span className="text-foreground font-medium">Md Irfan</span>, a 
              Software Developer with 3+ years of experience building scalable backend systems using Java, Spring Boot, and microservices in a banking environment supporting 24,000+ branches and 5000+ daily transactions, along with frontend development using React and Angular.
            </p>
            <p>
              Strong foundation in <span className="text-foreground font-medium">DSA (650+ problems)</span> and system design fundamentals. Experience with Redis, Kafka, Docker, Kubernetes, AWS, GitHub Actions, and Qodana, along with AI systems (LLM, RAG, NLP).
            </p>
            <p>
              Currently pursuing an <span className="text-foreground font-medium">MBA in Data Science</span> from 
              Amity University, Noida (CGPA: 8.42). Beyond coding, I run <span className="text-foreground font-medium">VirtualGyans</span> on YouTube 
              where I share interview experiences of top companies, Java full courses, competitive coding solutions, and academic tutorials.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-10">
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">~3</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Years at TCS</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">8.88</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">B.Tech CGPA</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold gradient-text">650+</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">Problems Solved</div>
            </div>
          </div>
        </div>

        {/* Right - Highlight Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl glass-card hover-lift cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
