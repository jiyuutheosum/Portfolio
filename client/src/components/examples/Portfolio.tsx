import Portfolio from "../Portfolio";
import bankingApp from "@assets/generated_images/Banking_app_UI_mockup_2ac98541.png";
import ecommerce from "@assets/generated_images/E-commerce_website_design_763a4df7.png";
import fitnessApp from "@assets/generated_images/Fitness_app_interface_f0c129f3.png";
import taskManagement from "@assets/generated_images/Task_management_dashboard_26bceecf.png";
import foodDelivery from "@assets/generated_images/Food_delivery_app_UI_38cce92a.png";
import socialMedia from "@assets/generated_images/Social_media_redesign_f01bb13b.png";
import healthcare from "@assets/generated_images/Healthcare_portal_design_dd89ec0a.png";
import travelBooking from "@assets/generated_images/Travel_booking_website_9c219c00.png";
import musicStreaming from "@assets/generated_images/Music_streaming_app_UI_676d238b.png";

// Mock project data for demonstration
const mockProjects = [
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

// Example component showing Portfolio gallery with mock projects
export default function PortfolioExample() {
  return <Portfolio projects={mockProjects} />;
}
