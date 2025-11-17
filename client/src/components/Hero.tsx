import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Hero section with animated introduction and gradient background
export default function Hero() {
  // Scroll to portfolio section when CTA is clicked
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
        delayChildren: 0.3, // Initial delay before animations start
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start below and invisible
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }, // Custom easing
    },
  };

  // Floating shapes animation
  const floatingVariants = {
    animate: {
      y: [0, -20, 0], // Move up and down
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10"
    >
      {/* Animated floating geometric shapes in background */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute top-1/2 right-1/4 w-24 h-24 rotate-45 bg-primary/5 blur-2xl"
        aria-hidden="true"
      />

      {/* Main hero content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Greeting text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground font-medium"
            data-testid="text-greeting"
          >
            Hi, I'm a UI/UX Designer
          </motion.p>

          {/* Main headline - large, bold typography */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none"
            data-testid="text-headline"
          >
            Crafting Digital
            <br />
            <span className="text-primary">Experiences</span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            data-testid="text-subtitle"
          >
            I design intuitive, user-centered interfaces that solve real problems
            and create meaningful connections between people and technology.
          </motion.p>

          {/* Call-to-action button */}
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="text-base px-8"
              onClick={scrollToPortfolio}
              data-testid="button-view-work"
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
