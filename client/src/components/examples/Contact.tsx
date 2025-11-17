import Contact from "../Contact";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

// Mock contact data for demonstration
const mockData = {
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

// Example component showing Contact section with form and social links
export default function ContactExample() {
  return <Contact {...mockData} />;
}
