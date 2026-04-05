import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Youtube, Loader2, Code2, Trophy } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "mdirfancse2023@gmail.com", href: "mailto:mdirfancse2023@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6205697622", href: "tel:+916205697622" },
    { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra", href: null },
  ];
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/mdirfancse2023" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mdirfancse2023" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@virtualgyans" },
    { icon: Code2, label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/mdirfancse2023" },
    { icon: Trophy, label: "LeetCode", href: "https://leetcode.com/u/mdirfancse2023" },
  ];

  return (
    <section id="contact" className="section-container overflow-x-hidden">
      <div className="text-center mb-8 md:mb-8">
        <span className="text-primary font-mono text-sm">06 — Contact</span>
        <h2 className="section-title mt-4">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-subtitle max-w-2xl mx-auto px-4">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-full">
        {/* Contact Form */}
        <div className="glass-card p-6 md:p-8 rounded-2xl">
          <h3 className="text-lg md:text-xl font-semibold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-base"
                placeholder="John Doe"
                required
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-base"
                placeholder="john@example.com"
                required
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none text-base"
                placeholder="Tell me about your project..."
                required
                disabled={isLoading}
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 md:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 md:space-y-8">
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <h3 className="text-lg md:text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors text-sm md:text-base truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-sm md:text-base">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <h3 className="text-lg md:text-xl font-semibold mb-6">Follow Me</h3>
            
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-secondary hover:bg-primary/10 hover:border-primary border border-transparent transition-all"
                >
                  <social.icon size={20} className="text-primary" />
                  <span className="font-medium text-sm md:text-base">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Message */}
          <div className="p-4 md:p-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-sm text-muted-foreground">
              💡 <strong className="text-foreground">Quick Response:</strong> I typically respond within 24 hours. 
              For urgent inquiries, reach out via LinkedIn or email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
