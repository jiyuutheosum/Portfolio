import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

// Import project images using @assets alias
import bankingApp from "@assets/generated_images/Banking_app_UI_mockup_2ac98541.png";
import ecommerce from "@assets/generated_images/E-commerce_website_design_763a4df7.png";
import fitnessApp from "@assets/generated_images/Fitness_app_interface_f0c129f3.png";
import taskManagement from "@assets/generated_images/Task_management_dashboard_26bceecf.png";
import foodDelivery from "@assets/generated_images/Food_delivery_app_UI_38cce92a.png";
import socialMedia from "@assets/generated_images/Social_media_redesign_f01bb13b.png";
import healthcare from "@assets/generated_images/Healthcare_portal_design_dd89ec0a.png";
import travelBooking from "@assets/generated_images/Travel_booking_website_9c219c00.png";
import musicStreaming from "@assets/generated_images/Music_streaming_app_UI_676d238b.png";
import profileImage from "@assets/generated_images/Designer_professional_portrait_d45f798b.png";

// Portfolio projects data - showcasing UI/UX design work
// todo: remove mock functionality - Replace with real project data from CMS or database
const projects = [
  {
    id: 1,
    title: "FinanceFlow Banking App",
    category: "Mobile App",
    description: "A modern mobile banking experience with intuitive financial management, real-time transactions, and seamless card controls.",
    image: bankingApp,
    tools: ["Figma", "React Native", "FinTech"],
    link: "#",
  },
  {
    id: 2,
    title: "ShopHub E-Commerce",
    category: "Web Platform",
    description: "Complete e-commerce redesign focusing on conversion optimization, streamlined checkout, and personalized shopping experiences.",
    image: ecommerce,
    tools: ["Sketch", "Vue.js", "E-Commerce"],
    link: "#",
  },
  {
    id: 3,
    title: "FitTrack Fitness App",
    category: "Mobile App",
    description: "Comprehensive fitness tracking application with workout plans, progress analytics, and social motivation features.",
    image: fitnessApp,
    tools: ["Adobe XD", "SwiftUI", "Health & Wellness"],
    link: "#",
  },
  {
    id: 4,
    title: "TaskMaster Dashboard",
    category: "SaaS Platform",
    description: "Project management tool with kanban boards, team collaboration, and intelligent task automation for modern teams.",
    image: taskManagement,
    tools: ["Figma", "React", "Productivity"],
    link: "#",
  },
  {
    id: 5,
    title: "QuickBite Food Delivery",
    category: "Mobile App",
    description: "Food delivery app featuring restaurant discovery, real-time order tracking, and personalized recommendations.",
    image: foodDelivery,
    tools: ["Figma", "Flutter", "Food Tech"],
    link: "#",
  },
  {
    id: 6,
    title: "SocialVibe Platform",
    category: "Social Network",
    description: "Social media platform redesign emphasizing authentic connections, content discovery, and user well-being.",
    image: socialMedia,
    tools: ["Sketch", "React", "Social Media"],
    link: "#",
  },
  {
    id: 7,
    title: "HealthConnect Portal",
    category: "Healthcare",
    description: "Patient portal with appointment scheduling, medical records access, and telemedicine capabilities for better healthcare access.",
    image: healthcare,
    tools: ["Figma", "HIPAA Compliance", "Healthcare"],
    link: "#",
  },
  {
    id: 8,
    title: "Wanderlust Travel",
    category: "Travel & Tourism",
    description: "Travel booking platform with destination exploration, hotel comparisons, and seamless booking experiences.",
    image: travelBooking,
    tools: ["Adobe XD", "Next.js", "Travel"],
    link: "#",
  },
  {
    id: 9,
    title: "SoundWave Music",
    category: "Entertainment",
    description: "Music streaming app with personalized playlists, social sharing, and high-fidelity audio playback features.",
    image: musicStreaming,
    tools: ["Figma", "React Native", "Music"],
    link: "#",
  },
];

// About section data - personal information and background
// todo: remove mock functionality - Replace with real bio and experience data
const aboutData = {
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

// Contact section data - email and social media links
// todo: remove mock functionality - Replace with real contact information
const contactData = {
  email: "hello@designer.com",
  socialLinks: [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ],
};

// Main home page component assembling all portfolio sections
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed navigation bar at top */}
      <Navigation />
      
      {/* Full-height hero section with animated introduction */}
      <Hero />
      
      {/* Portfolio gallery showcasing design projects */}
      <Portfolio projects={projects} />
      
      {/* About section with bio, skills, and experience */}
      <About {...aboutData} />
      
      {/* Contact form and social media links */}
      <Contact {...contactData} />
      
      {/* Footer with copyright */}
      <footer className="bg-accent/20 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
