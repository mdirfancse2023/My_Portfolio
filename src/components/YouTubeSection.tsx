import { Youtube, Users, Video, Eye } from "lucide-react";
import virtualGyansProfile from "@/assets/virtualgyans-profile.jpeg";

const YouTubeSection = () => {
  const stats = [
    { icon: Users, value: "2K+", label: "Subscribers" },
    { icon: Video, value: "131", label: "Videos" },
    { icon: Eye, value: "Free", label: "Education" },
  ];

  const topics = [
    "Interview Experiences",
    "Java Full Course",
    "OOPs & Collection Framework",
    "Competitive Coding Questions",
    "DSA Problem Solving",
    "Class 10 Maths",
    "Class 10 Science",
    "Tech Unboxing & Reviews",
  ];

  return (
    <section id="youtube" className="relative py-20 overflow-hidden w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 section-container">
        <div className="text-center mb-8">
          <span className="text-primary font-mono text-sm">05 — Content</span>
          <h2 className="section-title mt-4">
            Teaching on <span className="gradient-text-accent">VirtualGyans</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Sharing interview experiences, Java tutorials, competitive coding solutions, and academic content
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto mb-12 md:mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 md:p-6 rounded-2xl glass-card"
            >
              <stat.icon className="mx-auto mb-2 md:mb-3 text-accent" size={24} />
              <div className="text-lg md:text-3xl font-bold gradient-text-accent">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Topics Covered */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-center mb-8">Topics I Cover</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 rounded-full bg-secondary text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Channel Card */}
        <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
            <img src={virtualGyansProfile} alt="VirtualGyans Profile" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold mb-2">VirtualGyans</h3>
          <p className="text-muted-foreground mb-6">
            Join me on YouTube where I share interview experiences of top companies like TCS, Amazon, Juspay, SAP Labs & more, along with Java full courses, competitive coding solutions, and Class 10 Maths & Science tutorials.
          </p>
          <a
            href="https://www.youtube.com/@virtualgyans"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 px-5 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-base font-semibold transition-all hover-lift"
            style={{
              background: 'linear-gradient(135deg, hsl(0 84% 60%), hsl(0 84% 50%))',
              color: 'white',
            }}
          >
            <Youtube size={20} className="md:hidden" />
            <Youtube size={24} className="hidden md:block" />
            Subscribe to VirtualGyans
          </a>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
