# ZenAI Portfolio Website

A modern, animated portfolio website for ZenAI - Creative x Tech Studio, inspired by Chainzoku.io design principles.

## 🚀 Features

- **Hero Section**: Fullscreen hero with fluid text animations and parallax background
- **Our Work**: Showcase of reels, design portfolio, and web/app projects
- **Services**: Pick Your Clan-style service cards with hover animations
- **Testimonials**: Auto-sliding carousel with 3D tilt effects
- **Custom Cursor**: Animated cursor with glow effects
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Mobile-first responsive layout

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **GSAP** (optional for advanced animations)
- **Lenis** (optional for smooth scroll)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Brand Colors

- Primary: `#7e22ce` (Purple)
- Secondary: `#0a0a0a` (Black)
- Accent: `#ffffff` (White)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── work/
│   │   └── [project]/      # Dynamic project pages
│   └── services/
│       └── [service-type]/ # Dynamic service pages
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── OurWork.tsx         # Work showcase
│   ├── Services.tsx        # Services section
│   ├── Testimonials.tsx    # Testimonials slider
│   ├── Footer.tsx          # Footer component
│   ├── CustomCursor.tsx    # Custom cursor
│   ├── PageTransition.tsx  # Page transitions
│   └── MagneticButton.tsx  # Magnetic button effect
└── public/                 # Static assets
```

## 🎯 Key Components

### Hero Section
- Fluid text animation with warp/stretch effects
- Parallax background with particles
- Magnetic CTA buttons
- Smooth scroll indicator

### Our Work
- Reels showcase with hover unmute
- Design portfolio cards with overlay reveals
- Web/app project cards

### Services
- Full-height service cards
- Hover zoom and title reveal
- Gradient backgrounds

### Testimonials
- Auto-sliding carousel
- 3D tilt effects on hover
- Neon border animations

## 🔧 Customization

Update brand colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: '#7e22ce',
  secondary: '#0a0a0a',
  accent: '#ffffff',
}
```

## 📝 Notes

- Replace placeholder images with actual project images
- Update social media links in Footer component
- Add actual video elements for reels section
- Configure contact form integration

## 📄 License

MIT License

