# Agent Instructions & Design Guidelines

This project is a React-based **Interview Preparation** web application styled with a unique **Cyberpunk / Tactical Gaming / Military Arena** theme (e.g., "READY FOR BATTLE", "Zones", "Targets", "Loot"). Any changes, modifications, or new additions to this project MUST strictly adhere to the following design system, color themes, styling conventions, and tone.

---

## 1. Core Theme & Brand Vocabulary
Maintain the "Tactical Battle Arena" tone throughout the application interface, text content, and button labels:
*   **Topics / Subjects:** Referred to as **Zones** or **Weapon Arsenal**.
*   **Questions:** Referred to as **Targets**.
*   **Completed Questions:** Referred to as **Eliminated**.
*   **Progress Percentage:** Referred to as **Survival Rate**.
*   **Favorites / Bookmarks:** Referred to as **Loot** or **Trophies**.
*   **Theme Tone:** Gaming, military, sci-fi, and action-oriented. Keep the text engaging but clean and professional for interview preparation.

---

## 2. Typography Rules
Always use the Google Fonts loaded in the application:
*   **Headings (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`):** 
    *   Must use: `font-family: 'Teko', sans-serif;`
    *   Style: `text-transform: uppercase;`
    *   Spacing: `letter-spacing: 1px;` (or larger up to `3px` for headers/buttons).
*   **Body Text & Interactive Elements:** 
    *   Must use: `font-family: 'Rajdhani', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;`

---

## 3. Colors & Theme System (CSS Variables)
Use the global CSS custom properties defined in [index.css](file:///c:/Users/user/Desktop/Agent/Gravity/interview-prep/src/index.css):

*   **Primary Accent Color:** `var(--primary)` (`#f5a623` - Cyberpunk Gold/Orange)
*   **Primary Accent Light:** `var(--primary-light)` (`#ffc857` - Highlight Yellow)
*   **Primary Background Overlay:** `var(--primary-bg)` (`rgba(245, 166, 35, 0.1)`)
*   **Borders:** `var(--border)` (`1px solid rgba(245, 166, 35, 0.15)`)
*   **Glow Effects:** `var(--glow)` (`0 0 10px rgba(245, 166, 35, 0.3)`)
*   **Semantic Colors:**
    *   **Success:** `var(--success)` (`#00e676` - Neon Green)
    *   **Warning:** `var(--warning)` (`#f5a623` - Gold/Orange)
    *   **Danger:** `var(--danger)` (`#ff3d3d` - Tactical Red)

---

## 4. Theme Modes (Light & Dark)
The application supports both Dark and Light modes. Use the context `useTheme()` from [ThemeContext.js](file:///c:/Users/user/Desktop/Agent/Gravity/interview-prep/src/context/ThemeContext.js) and conditionally append the `.dark` class to component containers (e.g., `className={`component ${darkMode ? 'dark' : ''}`}`).

### Dark Mode (Default / Immersive)
*   **Page Background:** `#0a0e17` (Deep space/cyberpunk dark navy)
*   **Card/Section Background:** `#141923` (Sleek dark panel)
*   **Borders:** `rgba(245, 166, 35, 0.08)` or `rgba(255, 255, 255, 0.05)`
*   **Primary Text:** `#e8e8e8` / `#fff` / `#cbd5e0`
*   **Muted Text:** `#8892a4`

### Light Mode
*   **Page Background:** `#f0f2f5` (Light tech gray)
*   **Card/Section Background:** `#ffffff` (Solid white panel)
*   **Borders:** `#e2e6ed` or `#cfd5de`
*   **Primary Text:** `#1a1a2e` / `#333`
*   **Muted Text:** `#6b7280`

---

## 5. UI Elements & Animations
*   **Buttons & Controls:**
    *   Use uppercase text and a font family of `'Rajdhani'` or `'Teko'`.
    *   Primary action buttons in dark mode should use a dark gold background, gold border, and gold text (`var(--primary)`).
    *   On hover: Transition to background `var(--primary)` and text `#000` (or white for danger buttons) with a shadow glow: `box-shadow: 0 4px 12px rgba(245, 166, 35, 0.3);`.
*   **Card Components:**
    *   Should transition smoothly on hover: `transition: all 0.2s ease;`.
    *   On hover: Scale/translate slightly up (`transform: translateY(-2px);`) and intensify the border glow: `border-color: var(--primary); box-shadow: 0 4px 16px rgba(245, 166, 35, 0.15);`.
*   **Border Radius:** Always use `var(--radius)` (`4px`) to maintain sharp, tactical corners instead of highly rounded elements.
*   **Icons:** Use tactical, gaming, and military-related icons from `react-icons/gi` (Game Icons) or `react-icons/ri` (Remix Icons) (e.g. `GiCrosshair`, `GiAmmoBox`, `GiMilitaryFort`, `GiTrophy`, `RiSwordFill`).

---

## 6. Coding & CSS Best Practices
*   **Naming Scheme:** Follow the CSS BEM (Block-Element-Modifier) naming convention (e.g., `.topic-card`, `.topic-card__icon`, `.topic-card--selected`).
*   **Responsive Layouts:** Ensure all layout structures adapt to mobile viewport sizes using flexbox, grid, and appropriate media queries (typically breaking at `768px`).
