import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      title: "MBA in Data Science",
      company: "Amity University, Noida",
      duration: "July 2024 – June 2026",
      description: [
        "CGPA: 8.42/10",
        "Specializing in Data Analytics, Machine Learning, and AI",
      ],
    },
    {
      title: "B.Tech in Computer Science",
      company: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
      duration: "July 2019 – June 2023",
      description: [
        "CGPA: 8.88/10",
        "Department Rank 1 in 1st & 3rd Semesters",
        "Focused on Software Engineering and Database Systems",
      ],
    },
  ];

  return (
    <section id="education" className="section-container">
      <div className="text-center mb-8">
        <span className="text-primary font-mono text-sm">05 — Education</span>
        <h2 className="section-title mt-4">
          My <span className="gradient-text">Education</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {education.map((edu, index) => (
          <div key={edu.title} className="relative pl-8 pb-12 last:pb-0 group">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-primary font-mono text-sm">{edu.duration}</span>
                <GraduationCap size={16} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{edu.title}</h3>
              <p className="text-muted-foreground mb-4">{edu.company}</p>
              <ul className="space-y-2">
                {edu.description.map((point, i) => (
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

export default EducationSection;
