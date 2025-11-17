import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Project data structure
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
}

// Portfolio gallery component showcasing UI/UX projects
export default function Portfolio({ projects }: { projects: Project[] }) {
  // Track which projects have been scrolled into view for animation
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer to trigger animations when projects scroll into view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Mark project as visible when it enters viewport
                setVisibleProjects((prev) => new Set(prev).add(index));
              }
            });
          },
          { threshold: 0.2 } // Trigger when 20% of element is visible
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [projects]);

  // Handle view project button click
  const handleViewProject = (link: string) => {
    console.log("View project:", link); // Placeholder for real navigation
    window.open(link, "_blank");
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="text-portfolio-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-portfolio-subtitle"
          >
            A selection of my recent work in UI/UX design, from mobile apps to web
            platforms
          </motion.p>
        </div>

        {/* Project grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              initial={{ opacity: 0, y: 50 }}
              animate={
                visibleProjects.has(index)
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              data-testid={`card-project-${project.id}`}
            >
              <Card className="overflow-hidden group hover-elevate active-elevate-2 h-full flex flex-col">
                {/* Project image with hover effect */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                  {/* Overlay on hover with view button */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="default"
                      onClick={() => handleViewProject(project.link)}
                      data-testid={`button-view-project-${project.id}`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Case Study
                    </Button>
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category badge */}
                  <Badge variant="secondary" className="mb-3 w-fit" data-testid={`badge-category-${project.id}`}>
                    {project.category}
                  </Badge>

                  {/* Project title */}
                  <h3 className="text-2xl font-bold mb-2" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-muted-foreground mb-4 flex-grow" data-testid={`text-description-${project.id}`}>
                    {project.description}
                  </p>

                  {/* Tools/technologies used */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge
                        key={toolIndex}
                        variant="outline"
                        className="text-xs"
                        data-testid={`badge-tool-${project.id}-${toolIndex}`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
