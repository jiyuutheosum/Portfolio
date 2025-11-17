# UI/UX Designer Portfolio

A modern, responsive portfolio website showcasing UI/UX design work, built with React, TypeScript, TailwindCSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## ✨ Features

- **Smooth Animations** - Framer Motion powered transitions and interactions
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Project Showcase** - Gallery of 9 design projects with detailed case studies
- **About Section** - Professional bio, skills, and experience timeline
- **Contact Form** - Functional contact form with social media links
- **Modern UI** - Clean, minimalist design with thoughtful interactions
- **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- **Fast Performance** - Optimized with Vite and lazy loading
- **Dark Mode Ready** - Theme system prepared for light/dark modes

## 🎨 Design System

- **Typography**: DM Sans (body) and Space Grotesk (headings)
- **Color Palette**: Carefully curated primary, accent, and neutral colors
- **Animations**: Subtle, meaningful interactions using Framer Motion
- **Components**: Reusable shadcn/ui components with custom styling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/jiyuutheosum/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5000`

## 📁 Project Structure

```
Portfolio/
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── pages/         # Page components
│   │   │   └── Home.tsx
│   │   ├── lib/           # Utilities
│   │   └── App.tsx        # Root component
├── server/                # Express backend
├── shared/                # Shared types
└── attached_assets/       # Images and media
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing
- **shadcn/ui** - Component library

### Backend
- **Express** - Web server
- **Vite** - Build tool and dev server

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📸 Sections

### 1. Hero Section
Full-height introduction with animated typography and gradient background

### 2. Portfolio Gallery
Grid layout showcasing 9 design projects:
- FinanceFlow Banking App
- ShopHub E-Commerce
- FitTrack Fitness App
- TaskMaster Dashboard
- QuickBite Food Delivery
- SocialVibe Platform
- HealthConnect Portal
- Wanderlust Travel
- SoundWave Music

### 3. About Section
- Professional bio and design philosophy
- Skills tag cloud (15+ skills)
- Experience timeline (3 positions)

### 4. Contact Section
- Functional contact form
- Direct email link
- Social media links (LinkedIn, GitHub, Twitter)

## 🎯 Customization

### Update Personal Information

Edit `client/src/pages/Home.tsx`:

```typescript
// Update project data
const projects = [ /* your projects */ ];

// Update bio and experience
const aboutData = {
  bio: "Your bio here",
  philosophy: "Your design philosophy",
  skills: [ /* your skills */ ],
  experience: [ /* your experience */ ],
};

// Update contact info
const contactData = {
  email: "your@email.com",
  socialLinks: [ /* your social links */ ],
};
```

### Change Colors

Modify `client/src/index.css` to update the color scheme:

```css
:root {
  --primary: /* your primary color */;
  --accent: /* your accent color */;
  /* ... other colors */
}
```

### Add New Projects

Replace the generated images in `attached_assets/generated_images/` with your actual project images, then update the imports in `Home.tsx`.

## 📝 Code Comments

All components include detailed inline comments explaining:
- Component purpose and functionality
- Props and state management
- Animation configurations
- Accessibility considerations
- User interaction handlers

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to use the `dist` folder
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Portfolio Developer**
- GitHub: [@jiyuutheosum](https://github.com/jiyuutheosum)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Lucide Icons](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Typography from [Google Fonts](https://fonts.google.com)

---

⭐️ If you like this portfolio template, please give it a star!
