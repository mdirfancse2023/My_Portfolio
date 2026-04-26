import { Award } from "lucide-react";

const CertificationSection = () => {
  const certifications = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      duration: "2026",
      certificateLink: "https://www.credly.com/badges/432ed1ed-16ed-43dd-9864-aa8b17dfb2a0/linked_in_profile",
      description: [
        "Validated expertise in building, deploying, and debugging cloud applications on AWS.",
        "Covered EC2, S3, IAM, RDS, and serverless development best practices.",
      ],
    },
    {
      title: "Spring Boot 0 to 100 Cohort 4.0 [AI + DevOps]",
      issuer: "Coding Shuttle",
      duration: "2026",
      certificateLink: "https://app.codingshuttle.com/certificate/verify/LPC123XT",
      description: [
        "Completed hands-on training in Spring Boot application development with DevOps and AI integrations.",
        "Learned production-ready deployment workflows, CI/CD, and scalable microservices design.",
      ],
    },
  ];

  return (
    <section id="certifications" className="section-container">
      <div className="text-center mb-8">
        <span className="text-primary font-mono text-sm">05 — Certifications</span>
        <h2 className="section-title mt-4 whitespace-nowrap">
          Professional Certifications
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {certifications.map((cert) => (
          <div key={cert.title} className="relative pl-8 pb-12 last:pb-0 group">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />
            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
            <div className="glass-card p-6 rounded-xl hover-lift">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-primary font-mono text-sm">{cert.duration}</span>
                <Award size={16} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.issuer}</p>
              <ul className="space-y-2">
                {cert.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              {cert.certificateLink && (
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-foreground"
                >
                  View Certification
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
