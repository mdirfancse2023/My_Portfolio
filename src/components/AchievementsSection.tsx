import { Award } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    "⭐ 5 Star on first anniversary & A Band in both financial years at TCS",
    "🏆 Department Rank 1 in B.Tech CSE (1st & 3rd Semesters)",
    "🥈 Rank 2 in CodeOn-2022 competitive programming contest, IIT Kanpur",
    "💻 650+ Coding questions solved across multiple platforms",
    "✅ Qualified HackWithInfy (Infosys) and TCS NQT",
    "🎯 Vice President, Student Clubs – led activities for 100+ students",
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="text-center mb-16">
        <span className="text-primary font-mono text-sm">06 — Achievements</span>
        <h2 className="section-title mt-4">
          My <span className="gradient-text">Achievements</span>
        </h2>
      </div>

      <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-secondary/50 text-sm text-muted-foreground hover:bg-secondary transition-colors"
            >
              {achievement}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
