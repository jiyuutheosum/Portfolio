import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Skills and experience data structures
interface Skill {
  name: string;
  category: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface AboutProps {
  profileImage: string;
  bio: string;
  philosophy: string;
  skills: Skill[];
  experience: Experience[];
}

// About section highlighting skills, experience, and design philosophy
export default function About({
  profileImage,
  bio,
  philosophy,
  skills,
  experience,
}: AboutProps) {
  return (
    <section id="about" className="py-20 md:py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Passionate designer focused on creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Two-column layout on desktop */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left column - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Large profile avatar */}
              <Avatar className="w-64 h-80 md:w-80 md:h-96 rounded-2xl">
                <AvatarImage src={profileImage} alt="Profile" className="object-cover" />
                <AvatarFallback className="text-4xl">JD</AvatarFallback>
              </Avatar>
              {/* Decorative element behind avatar */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right column - Bio and philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Bio paragraph */}
            <div>
              <h3 className="text-2xl font-bold mb-4" data-testid="text-bio-heading">My Story</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio">
                {bio}
              </p>
            </div>

            {/* Design philosophy */}
            <div>
              <h3 className="text-2xl font-bold mb-4" data-testid="text-philosophy-heading">
                Design Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-philosophy">
                {philosophy}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills section - Tag cloud layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center" data-testid="text-skills-heading">
            Skills & Tools
          </h3>
          {/* Flexbox grid of skill badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-2"
                  data-testid={`badge-skill-${index}`}
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center" data-testid="text-experience-heading">
            Experience
          </h3>
          {/* Vertical timeline of experience cards */}
          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="p-6" data-testid={`card-experience-${index}`}>
                  {/* Experience header with company and period */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h4 className="text-xl font-bold" data-testid={`text-role-${index}`}>
                        {exp.role}
                      </h4>
                      <p className="text-primary font-semibold" data-testid={`text-company-${index}`}>
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="outline" data-testid={`badge-period-${index}`}>
                      {exp.period}
                    </Badge>
                  </div>
                  {/* Experience description */}
                  <p className="text-muted-foreground" data-testid={`text-exp-description-${index}`}>
                    {exp.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
