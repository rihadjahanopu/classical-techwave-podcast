# TechWave Podcast 🎙️

![TechWave Banner](/public/assets/images/hero-bg.png)

Welcome to the **TechWave Podcast** repository! This is a state-of-the-art, high-performance web application designed to serve as the digital home for the TechWave podcast.

Originally conceived as a static HTML/CSS landing page, this project has been fully migrated into a highly scalable, component-driven architecture using **Next.js 15**, **TypeScript**, and **Tailwind CSS**. It showcases modern web design trends like glassmorphism, dynamic gradients, and responsive layouts tailored to provide an exceptional user experience across all devices.

---

## Live Demo

[TechWave Podcast](https://classical-tech-wave-podcast.vercel.app/)

## 🌟 Table of Contents

- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Design Philosophy](#-design-philosophy)
- [Project Structure](#-project-structure)
- [Component Breakdown](#-component-breakdown)
- [Getting Started](#-getting-started)
- [Customization Guide](#-customization-guide)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✨ Key Features

- **Blazing Fast Performance**: Utilizes Next.js App Router and React Server Components for optimal load times and top-tier SEO performance.
- **Fluid Responsive Layout**: Flawlessly adapts from the smallest mobile screens up to ultrawide 4K monitors using Tailwind's breakpoint system.
- **Component-Driven Architecture**: The UI is broken down into modular, reusable, and easily maintainable React components (`Header`, `Hero`, `Episodes`, etc.).
- **Rich Media Integrations**:
  - Seamlessly embedded YouTube iframes for episode playback without leaving the site.
  - Highly optimized image delivery and caching via the Next.js `<Image />` component.
- **Interactive UI/UX Elements**:
  - Glassmorphic navigation bars with backdrop blurs (`backdrop-blur`).
  - Smooth animated gradients on buttons and hover states.
  - Interactive mobile hamburger menu managing state via React `useState`.

---

## 🛠 Architecture & Tech Stack

This project leverages the latest industry standards in front-end development:

- **Framework**: [Next.js](https://nextjs.org/) (App Router paradigm)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type-checking and robust code quality.
- **Styling Framework**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first, rapid UI development.
- **Font Optimization**: `@next/font` using `Geist` and `Geist_Mono` for zero layout shift.
- **Linting & Formatting**: [ESLint](https://eslint.org/) integrated for enforcing code standards.
- **Package Manager**: [npm](https://www.npmjs.com/)

---

## 🎨 Design Philosophy

The application utilizes a dark-mode first aesthetic built on a deep purple canvas (`bg-[#1a0b2e]`).
Highlights and calls-to-action are driven by a dynamic 3-stop gradient:

- **Neon Yellow** (`#f7e93f`)
- **Vibrant Pink** (`#fb09b4`)
- **Deep Violet** (`#9100f8`)

Secondary highlights and typography accents utilize a striking **Neon Green** (`#00ff88`) to establish strong visual hierarchy and ensure WCAG-compliant contrast ratios where it matters most.

---

## 📂 Project Structure

```text
├── public/
│   └── assets/
│       └── images/       # All static visual assets (logos, icons, host portraits, bgs)
├── src/
│   ├── app/
│   │   ├── favicon.ico   # Site browser tab icon
│   │   ├── globals.css   # Global styles, Tailwind imports, and @layer configurations
│   │   ├── layout.tsx    # Root layout defining the HTML structure and SEO Metadata
│   │   └── page.tsx      # Main landing page orchestrating the components
│   └── components/
│       ├── About.tsx     # Podcast statistics and mission statement section
│       ├── Episodes.tsx  # Embedded YouTube episodes grid
│       ├── Features.tsx  # Value proposition and benefits grid layout
│       ├── Footer.tsx    # Global footer with copyright and social links
│       ├── Header.tsx    # Navigation bar and responsive mobile menu
│       ├── Hero.tsx      # Above-the-fold Hero banner and CTA buttons
│       └── Host.tsx      # Host profile, biography, and personal socials
├── package.json          # Project metadata, dependencies, and npm scripts
├── tailwind.config.ts    # Custom Tailwind CSS configuration
└── tsconfig.json         # TypeScript compiler configuration
```

---

## 🧩 Component Breakdown

To make maintenance as easy as possible, the massive monolithic index file was split into logical units:

1. **`Header.tsx`**: Manages the site logo and navigation. Uses React `useState` to toggle the mobile menu drawer.
2. **`Hero.tsx`**: The main landing banner. Includes the primary "Listen on Spotify" and "Subscribe" gradient buttons.
3. **`About.tsx`**: Displays the core mission statement alongside a 4-column statistics grid (Monthly Listeners, Episodes, Rating).
4. **`Features.tsx`**: A responsive masonry-style grid on desktop that highlights the unique selling points (Premium Audio, Global Community, etc.).
5. **`Episodes.tsx`**: Fetches and displays the latest featured episodes using highly responsive `aspect-video` iframes.
6. **`Host.tsx`**: An author biography section featuring social media integrations.
7. **`Footer.tsx`**: The bottom navigation featuring platform links (Spotify, Apple Podcasts, YouTube).

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

You will need **Node.js** installed on your system.

- **Node.js** 18.17.0 or later.
- **npm** (comes bundled with Node.js)

### Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/techwave.git
   cd techwave
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will hot-reload automatically as you edit files.

---

## ⚙️ Customization Guide

### Adding a New Episode

To update the featured episodes on the homepage:

1. Navigate to `src/components/Episodes.tsx`.
2. Locate the `<iframe>` tag you wish to update.
3. Replace the `src` attribute with your new YouTube embed URL (ensure it retains the `embed/` path).
4. Update the corresponding `<h4>` title and `<p>` description tags directly below the iframe.

### Modifying Global Styles

Global overrides and custom CSS classes (like the `.btn` gradient animation) are located in `src/app/globals.css`. By leveraging Tailwind's `@layer components` directive, we keep the JSX clean while reusing complex background animations across multiple buttons.

---

## 🌐 Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect that it's a Next.js project and configure the build settings (`npm run build`).
4. Click deploy. Your site will be live and globally distributed on Vercel's Edge Network in minutes.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
If you have suggestions for improving this podcast landing page, feel free to open a Pull Request.

## 📝 License

© 2026 TechWave Podcast. All rights reserved. Built with ❤️ for the tech community.
