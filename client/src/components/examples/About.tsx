import About from "../About";
import profileImage from "@assets/generated_images/Designer_professional_portrait_d45f798b.png";

// Mock data for About section demonstration
const mockData = {
  profileImage,
  bio: "With over 6 years of experience in UI/UX design, I've had the privilege of working with startups and Fortune 500 companies to create digital products that users love. My journey started with a passion for solving problems through design, and it has evolved into a career dedicated to crafting intuitive, accessible, and beautiful interfaces.",
  philosophy: "I believe great design is invisible. It should guide users effortlessly toward their goals while creating delightful moments along the way. Every pixel, every interaction, and every decision should serve a purpose—making technology more human and accessible to everyone.",
  skills: [
    { name: "UI/UX Design", category: "Design" },
    { name: "User Research", category: "Research" },
    { name: "Wireframing", category: "Design" },
    { name: "Prototyping", category: "Design" },
    { name: "Figma", category: "Tools" },
    { name: "Adobe XD", category: "Tools" },
    { name: "Sketch", category: "Tools" },
    { name: "InVision", category: "Tools" },
    { name: "Design Systems", category: "Design" },
    { name: "Interaction Design", category: "Design" },
    { name: "Accessibility (WCAG)", category: "Standards" },
    { name: "HTML/CSS", category: "Development" },
    { name: "React", category: "Development" },
    { name: "Usability Testing", category: "Research" },
    { name: "Information Architecture", category: "Design" },
  ],
  experience: [
    {
      company: "TechCorp Innovation Labs",
      role: "Senior UI/UX Designer",
      period: "2022 - Present",
      description: "Leading design initiatives for enterprise SaaS products, managing a team of 4 designers, and establishing design system standards across multiple product lines.",
    },
    {
      company: "StartupHub Inc.",
      role: "UI/UX Designer",
      period: "2019 - 2022",
      description: "Designed mobile and web applications for early-stage startups, conducted user research, and collaborated with engineering teams to deliver pixel-perfect implementations.",
    },
    {
      company: "Digital Creative Agency",
      role: "Junior Designer",
      period: "2018 - 2019",
      description: "Created wireframes, mockups, and prototypes for client projects across various industries including healthcare, finance, and e-commerce.",
    },
  ],
};

// Example component showing About section with mock data
export default function AboutExample() {
  return <About {...mockData} />;
}
