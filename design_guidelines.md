# Design Guidelines: UI/UX Designer Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from award-winning portfolio sites (Awwwards, Behance featured portfolios, and modern design showcases). This portfolio must demonstrate exceptional design skills through its own execution.

## Design Principles
1. **Bold Visual Impact**: Make immediate impression through striking typography and composition
2. **Showcase Through Design**: Every section demonstrates design thinking
3. **Purposeful Motion**: Animations enhance, never distract
4. **Project-First**: Work takes center stage with minimal chrome

## Typography System
- **Headings**: Modern geometric sans-serif (e.g., DM Sans, Inter, Space Grotesk) - Bold/Extrabold weights
  - Hero: text-6xl to text-8xl (96-128px desktop)
  - Section Headers: text-4xl to text-5xl (36-48px)
  - Project Titles: text-2xl to text-3xl
- **Body**: Clean sans-serif (same family, lighter weight or complementary serif like Merriweather)
  - Base: text-base to text-lg (16-18px)
  - Captions: text-sm (14px)

## Spacing System
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component gaps: gap-6 to gap-12
- Card padding: p-6 to p-8

## Layout Architecture

### Hero Section (Full Viewport Impact)
- Height: 90vh to 100vh for dramatic entrance
- Large-scale typography with animated reveal
- Gradient background treatment or subtle pattern
- Floating geometric shapes (circles/squares) with parallax
- Scroll indicator at bottom
- **No large hero image** - typography and animation-driven

### Portfolio Gallery (Primary Focus)
- Masonry or staggered grid layout: 2 columns desktop, 1 mobile
- Large project cards with generous imagery (16:9 or 4:3 aspect ratios)
- Hover reveals: Overlay with project title, category, brief description
- Each card includes: Project image, title, role, tools/tech tags
- "View Case Study" CTA button with backdrop-blur background
- Smooth hover scale/lift effects

### About Section (2-Column Split Desktop)
- Left: Profile image or abstract representation (400x500px area)
- Right: Bio, design philosophy statement
- Skills visualization: Tag cloud or pill grid (not boring lists)
- Experience timeline: Vertical connector with company cards
- Design tools: Icon grid display

### Contact Section
- Clean, focused layout (not full viewport)
- Form: Name, Email, Message fields with modern floating labels
- Submit button: Primary accent with hover state
- Social media icons: Large, clickable (min 44x44px)
- Contact info display alongside form

## Component Library

**Navigation**
- Fixed/sticky header with backdrop blur
- Minimal logo/name left, nav links right
- Active section indicator
- Mobile: Hamburger menu with full-screen overlay

**Project Cards**
- Rounded corners (rounded-2xl)
- Drop shadow on hover
- Image: object-cover, aspect-ratio maintained
- Metadata badges: Tools, year, client (if applicable)

**Forms**
- Modern floating label inputs
- Focus states: Border accent color
- Validation states visible
- Input height: h-12 minimum

**Buttons**
- Primary: Solid fill with hover lift
- Secondary: Outline style
- All buttons: backdrop-blur-sm when over images
- Min height: h-12, padding: px-6 to px-8

**Skill Tags/Pills**
- Small, rounded badges (rounded-full)
- Light background, medium padding (px-4 py-2)
- Grouped with gap-2

## Animations (Framer Motion)
- Hero text: Staggered fade-in from bottom
- Scroll triggers: Projects fade/slide up on enter (once)
- Hover: Scale 1.02-1.05, smooth transitions
- Page load: Initial reveal sequence
- **Keep subtle** - no continuous/looping animations

## Images

**Project Screenshots**: 
- 8-12 high-quality project images needed
- Dimensions: 1200x900px or 1600x1200px recommended
- Placement: Portfolio gallery cards
- Content: UI mockups, design systems, case study visuals

**About Section**:
- Professional portrait or creative self-representation (400x500px)
- Optional: Company logos for experience timeline

**No large hero image** - Hero relies on typography, gradients, and animated elements for impact.

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids become 1-2)
- Desktop: > 1024px (full multi-column layouts)

## Accessibility Requirements
- Semantic HTML throughout
- ARIA labels for icon-only buttons
- Form labels properly associated
- Keyboard navigation functional
- Focus indicators visible
- Minimum contrast ratios maintained (WCAG AA)