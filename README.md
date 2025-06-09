# Skip Size Page Redesign – React Coding Challenge

## ✨ Objective

Redesign the "Choose Your Skip Size" page from [RemWaste] to look **completely different** from the original while **maintaining the existing functionality**.

This challenge demonstrates my skills in:

- Clean and maintainable React code
- Responsive web design (mobile and desktop)
- Improved UI/UX
- Data rendering from external sources

---

## 🚧 My Approach

### 1. **Research and Inspiration**

- Analyzed the original UI for structure and flow
- Identified weaknesses in the original design (e.g., layout, visual hierarchy, responsiveness)

### 2. **Redesign Goals**

- Use a **fresh visual layout** with better accessibility and spacing
- Improving responsiveness specially across Progress Sidebar, Images
- Ensure smooth interaction across screen sizes
- Improve **visual feedback** (e.g., selection highlights, hover states)
- Present pricing and hire period more clearly

### 3. **Technology Stack**

- ⚛️ React (Functional Components + Hooks)
- 🎨 Styled Components / Tailwind CSS
- 🌍 Fetching data from external API

### 4. **Implementation Plan**

1. Set up the base React project (setup project structure, naming convention and so on)
2. Build a flexible and accessible layout for skip cards
3. Implement API call to dynamically populate skip data
4. Add user interaction: select, highlight, navigation
5. Make responsive adjustments (mobile-first)
6. Final polish with animations or transitions (optional)

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Tailwind CSS** – utility-first approach for complete layout control
- **Custom Components** – especially a handcrafted Progress Sidebar to demonstrate design skills
- **JavaScript** – kept it clean and fast, avoiding TS unless required
- **State Management:** Maybe using context states only (no need for complex global tools like Redux)

---

## 🚀 How to Run

```bash
npm install
npm run dev
```

## 🛠️ Implementation

### 1. 🔧 Project Initialization & Setup

- Bootstrapped the project using Vite for a fast and optimized development experience.
- Configured Tailwind CSS for utility-first styling and responsive design.
- Adopted a feature-first folder structure to enhance maintainability and separation of concerns.
  #### Project Structure
  ```
  src/
  │
  ├── components/
  │ └── ui/ # Reusable shared UI components (e.g. Button, Modal)
  │ └── Button.jsx
  │
  ├── features/ # Feature-based domain modules
  │ └── steps/ # The "steps" feature module
  │ ├── components/ # UI components specific to steps flow
  │ ├── constants/ # Feature-level constants (e.g. config, enums)
  │ ├── contexts/
  │ │ └── stepsContextProvider/ # Local context and provider for step state
  │ │ ├── StepsContext.jsx
  │ │ ├── StepsProvider.jsx
  │ │ └── StepsReducer.js
  │ ├── index.js # Re-export entry point for step feature
  │ ├── utils/ # Utility functions used in steps logic
  │ │ └── index.js
  │ └── contents/
  │ └── selectSkip/ # Sub-feature: Select/Skip functionality
  │ ├── components/
  │ │ ├── SelectSkipCard.jsx
  │ │ └── SelectSkipGrid.jsx
  │ ├── hooks/
  │ │ └── useGetSkipSteps.js
  │ └── SelectSkip.jsx
  │
  ├── hooks/ # Shared custom hooks
  │ └── useGetQuery.js
  │
  ├── layouts/ # Structural layouts of pages
  │ ├── Layout.jsx
  │ └── Sidebar.jsx
  │
  ├── App.jsx # Main application component
  ├── main.jsx # Entry point (ReactDOM.render)
  ├── App.css # Global styles
  └── index.css # Base styles / resets
  ```

### 2. 🧱 Page Layout & Structural Components

- Built a reusable `Layout` component to manage the overall page scaffold (Header, Sidebar, and Main Content).
- Implemented a `Sidebar` containing the step progress indicator to guide user interaction.
- Ensured mobile-first responsive design with accessibility best practices.

### 4. 🎨 Global Theme Support

- Used `ThemeProvider` to apply and manage global theme variables.
- Ensured consistent branding by propagating custom colors and styles throughout the application.
