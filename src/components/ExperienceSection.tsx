import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "System Engineer",
      company: "Tata Consultancy Services (TCS)",
      duration: "June 2023 – Present",
      description: [
        "Worked on core banking transactions like Branch Creation and CCPC Inward Clearing in a live production system supporting 24,000+ branches and 2 lakh+ users worldwide, handling 5000+ transactions daily",
        "Built and improved a Kafka-based flow to process cheque data asynchronously, reducing processing time by ~30% and enabling smooth integration with ML models for validation and fraud checks",
        "Developed REST APIs using Spring Boot in microservices architecture with proper validations, exception handling, and secure transaction logic, supporting high concurrent users with stable performance",
        "Implemented Maker–Checker functionality to ensure transactions are approved before saving, reducing incorrect entries and improving audit compliance by ~40%",
        "Improved performance by optimizing SQL queries and backend logic, reducing API response time by ~20% in high-load scenarios",
        "Led a team of 5 developers in Agile setup, handling sprint planning and production issues, and reduced bug resolution time by ~25% through better coordination and mentoring",
        "Worked on frontend transaction screens with dynamic forms, validations, and API integration, reducing manual errors and improving user efficiency by ~30%",
      ],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <span className="text-primary font-mono text-sm">02 — Experience</span>
        <h2 className="section-title mt-4">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={exp.title} className="relative pl-8 pb-12 last:pb-0 group">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-primary font-mono text-sm">{exp.duration}</span>
                <Briefcase size={16} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
              <p className="text-muted-foreground mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
