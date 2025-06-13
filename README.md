
# HyperCard AI Primer

A modern web recreation of the classic 1987 HyperCard experience, designed to teach AI fundamentals to novices through an authentic retro interface. Built with Next.js 14, React 18, and TypeScript.

## 🎯 Project Overview and Vision

This project recreates the iconic HyperCard experience from 1987, complete with authentic monochrome styling, bitmap fonts, and classic Mac interface elements. The application serves as an educational primer on Artificial Intelligence, making complex AI concepts accessible through the familiar, nostalgic HyperCard interface.

### Key Vision Points:
- **Authentic Recreation**: Pixel-perfect recreation of 1987 HyperCard aesthetics
- **Educational Focus**: Structured learning path for AI novices
- **Modern Technology**: Built with contemporary web technologies while maintaining retro feel
- **Interactive Experience**: Hands-on learning with quizzes and interactive elements
- **Responsive Design**: Works across devices while preserving the classic look

## 📈 Development Progression to MVP

### Stage 1: Foundation and Core Architecture
1. **Project Initialization**: Set up Next.js 14 project with TypeScript and Tailwind CSS
2. **Design System Creation**: Implemented authentic HyperCard components (HCButton, HCField, HCSprite)
3. **State Management**: Built React Context-based navigation system with localStorage persistence
4. **Routing System**: Implemented SPA routing for direct card access via URLs

### Stage 2: Content and Educational Structure
1. **Card Development**: Created 6-card educational deck covering AI fundamentals
   - Card 1: Welcome and introduction
   - Card 2: "What is AI?" - Core concepts and definitions
   - Card 3: "AI Tools" - Practical applications and examples
   - Card 4: Interactive quiz with progress tracking
   - Card 5: Advanced quiz with scoring and certificate
   - Card 6: Gesture and certificate instructions
2. **Content Integration**: Added educational content with proper information hierarchy
3. **Interactive Elements**: Implemented quiz functionality with answer persistence

### Stage 3: UI/UX Refinement and Layout Optimization
1. **Navigation Enhancement**: Repositioned controls below card in two-row layout
   - Row 1: Prev - Counter - Next buttons
   - Row 2: Centered Home button
2. **Responsive Scaling**: Implemented proper scaling across device sizes
3. **Content Accommodation**: Increased card dimensions from 512×342px to 640×480px
4. **Visual Polish**: Fine-tuned spacing, typography, and authentic HyperCard styling

### Stage 4: Technical Optimization and MVP Completion
1. **Performance Optimization**: Optimized component rendering and state management
2. **Keyboard Navigation**: Added arrow key and Home key shortcuts
3. **Progress Persistence**: Implemented localStorage for user progress tracking
4. **Cross-browser Testing**: Ensured compatibility across modern browsers
5. **Documentation**: Comprehensive README and code documentation
6. **Debounced Server Updates**: Progress is now sent to the server in batches,
   reducing network requests while local storage updates immediately

## ✨ Current MVP Features

### Core Functionality
- **6-Card Educational Deck**: Complete AI primer with structured learning path
- **Authentic HyperCard Design**: Pixel-perfect 1987 monochrome Mac aesthetic
- **Interactive Navigation**: Mouse, keyboard, and button-based navigation
- **Swipe Gestures**: Swipe left/right on mobile to switch cards
- **Progress Tracking**: Automatic saving of user progress and quiz answers
- **Responsive Design**: Scales appropriately across devices while maintaining authenticity

### Technical Features
- **SPA Routing**: Direct URL access to specific cards (`/card/1`, `/card/2`, etc.)
- **State Persistence**: localStorage integration for session continuity
- **Debounced Server Sync**: Progress updates are batched before hitting the API
- **Keyboard Shortcuts**: Arrow keys (←/→) for navigation, Home key for card 1
- **TypeScript Integration**: Full type safety throughout the application
- **Component Architecture**: Reusable HyperCard-style components
- **Configurable Toast Duration**: Set `NEXT_PUBLIC_TOAST_REMOVE_DELAY` to control toast removal timing (default 5000ms)

### Educational Content
- **Structured Learning**: Progressive difficulty from basic concepts to practical applications
- **Interactive Quiz**: Advanced system with multiple question types, scoring and certificates
 - **Certificate Display**: View your certificate after completing the Advanced Quiz and export it as a PDF
- **Visual Elements**: Custom sprites and icons enhancing the learning experience
- **Progress Indicators**: Clear tracking of completed sections and visited cards

## 🏗️ Architecture and Technology Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router
- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript development

### Styling and Design
- **Tailwind CSS 3**: Utility-first CSS framework
- **Custom CSS**: Authentic HyperCard styling and animations
- **VT323 Font**: Period-accurate bitmap font from Google Fonts

### State Management
- **React Context**: Global state management for navigation and progress
- **useReducer**: Predictable state updates with action-based dispatch
- **localStorage**: Client-side persistence for user progress

### Development Tools
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **PostCSS**: CSS processing and optimization

### Additional Libraries
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library for UI elements

## 📁 File Structure Overview

```
/home/ubuntu/hypercard-ai-primer/
└── app/
    ├── app/                          # Next.js App Router
    │   ├── api/                      # API routes (future expansion)
    │   ├── card/[id]/               # Dynamic card routing
    │   ├── globals.css              # Global styles and HyperCard theme
    │   ├── layout.tsx               # Root layout component
    │   └── page.tsx                 # Home page component
    ├── components/                   # React components
    │   ├── cards/                   # Individual card components
    │   │   ├── card-1-welcome.tsx   # Welcome/intro card
    │   │   ├── card-2-what-is-ai.tsx # AI concepts explanation
    │   │   ├── card-3-ai-tools.tsx  # Practical AI applications
    │   │   ├── card-4-quiz.tsx      # Interactive quiz
    │   │   ├── card-5-advanced-quiz.tsx # Advanced quiz with certificate
    │   │   └── card-6-gestures.tsx  # Gesture instructions
    │   ├── ui/                      # Radix UI components
    │   ├── card-stack.tsx           # Main card container
    │   ├── card-viewport.tsx        # Card display viewport
    │   ├── navigation-controls.tsx  # Navigation button controls
    │   ├── hc-button.tsx           # HyperCard-style button
    │   ├── hc-field.tsx            # HyperCard-style text field
    │   ├── hc-sprite.tsx           # HyperCard-style icons/sprites
    │   └── theme-provider.tsx       # Theme context provider
    ├── lib/                         # Utility libraries
    │   ├── hypercard-context.tsx    # Global state management
    │   ├── types.ts                 # TypeScript type definitions
    │   └── utils.ts                 # Utility functions
    ├── hooks/                       # Custom React hooks
    ├── prisma/                      # Database schema (future expansion)
    ├── package.json                 # Project dependencies
    ├── tailwind.config.ts           # Tailwind CSS configuration
    ├── tsconfig.json               # TypeScript configuration
    └── next.config.js              # Next.js configuration
```

## 🚀 Instructions for Saving to GitHub

### 1. Create .gitignore File
The project includes a comprehensive .gitignore file that excludes:
- Node.js dependencies (`node_modules/`)
- Next.js build artifacts (`.next/`, `out/`)
- Environment files (`.env*`)
- IDE and system files
- Log files and temporary directories

### 2. Initialize Git Repository
```bash
cd /home/ubuntu/hypercard-ai-primer
git init
git add .
git commit -m "Initial commit: HyperCard AI Primer MVP"
```

### 3. Create GitHub Repository
1. Create a new repository on GitHub named `hypercard-ai-primer`
2. Add the remote origin:
```bash
git remote add origin https://github.com/yourusername/hypercard-ai-primer.git
git branch -M main
git push -u origin main
```

### 4. Repository Setup Recommendations
- **License**: Consider MIT or Apache 2.0 for open source
- **Topics**: Add tags like `hypercard`, `ai-education`, `retro-computing`, `nextjs`
- **Description**: "A modern recreation of 1987 HyperCard for teaching AI fundamentals"

## 💻 Instructions for IDE Setup

### 1. Clone and Setup
```bash
git clone https://github.com/yourusername/hypercard-ai-primer.git
cd hypercard-ai-primer/app
yarn install
```

### 2. Recommended IDE Configuration

#### VS Code Extensions
- **ES7+ React/Redux/React-Native snippets**: React development
- **TypeScript Importer**: Auto-import management
- **Tailwind CSS IntelliSense**: CSS class suggestions
- **Prettier - Code formatter**: Consistent code formatting
- **ESLint**: Code linting and error detection

#### VS Code Settings (`.vscode/settings.json`)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### 3. Environment Setup
- **Node.js**: Version 18+ required
- **Yarn**: Preferred package manager
- **TypeScript**: Configured for strict mode
- **TypeScript target**: `es2017`

## 🛠️ Development Setup and Running

### Prerequisites
- Node.js 18 or higher
- Yarn package manager
- Modern web browser
- Audio playback requires a user interaction to start due to browser autoplay policies

### Installation and Development
```bash
# Navigate to app directory
cd hypercard-ai-primer/app

# Install dependencies
yarn install

# Generate Prisma client
npx prisma generate

# Start development server
yarn dev

# Open browser to http://localhost:3000
```

### Available Scripts
```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
```

### Development Workflow
1. **Component Development**: Create new components in `/components`
2. **Card Creation**: Add new educational cards in `/components/cards`
3. **Styling**: Use Tailwind classes with custom HyperCard CSS variables
4. **State Management**: Extend the HyperCard context for new features
5. **Testing**: Manual testing across different screen sizes

## 🔮 Next Steps and Future Enhancements

- **Advanced Quiz System** ✅ Implemented with multiple question types, scoring, and certificate display. See [docs/quiz-system.md](docs/quiz-system.md)
- **Interactive Animations** ✅ Card transitions, hover effects and loading states powered by Framer Motion
- **Sound Effects** ✅ Mac-style audio feedback for UI actions
- **Gesture Support** ✅ Swipe left/right on touch devices to navigate cards
- **See** [docs/interaction-guide.md](docs/interaction-guide.md) **for more details on interactions**
- **Cross-Browser & Accessibility Tested** ✅ Verified keyboard navigation and screen reader labels

### Phase 3: Content Expansion
- **Additional Card Decks**: Machine Learning, Neural Networks, AI Ethics
- **Branching Narratives**: Choose-your-own-adventure style learning paths
- **Multimedia Integration**: Video embeds, audio explanations
- **Glossary System**: Searchable AI terminology database

### Phase 4: Advanced Features
- **User Accounts**: Progress tracking across sessions and devices
- **Social Features**: Share progress, compare scores with friends
- **Accessibility**: Screen reader support, keyboard-only navigation
- **Offline Support**: PWA capabilities for offline learning

### Phase 5: Platform Expansion
- **Mobile Apps**: Native iOS/Android versions
- **Desktop App**: Electron-based standalone application
- **VR/AR Integration**: Immersive HyperCard experience
- **API Development**: Content management system for educators

## 🤝 Contributing Guidelines

### Code Style
- **TypeScript**: Use strict typing, avoid `any` types
- **Components**: Functional components with hooks
- **Naming**: Use kebab-case for files, PascalCase for components
- **CSS**: Prefer Tailwind classes, use custom CSS for HyperCard-specific styling

### Development Process
1. **Fork the repository** and create a feature branch
2. **Follow existing patterns** for component structure and styling
3. **Test thoroughly** across different screen sizes and browsers
4. **Maintain authenticity** to the original HyperCard experience
5. **Document changes** with clear commit messages

### Pull Request Guidelines
- **Clear description** of changes and motivation
- **Screenshots** for UI changes
- **Testing notes** for new features
- **Backward compatibility** considerations

### Areas for Contribution
- **Content Creation**: New educational cards and quizzes
- **Accessibility**: Improved screen reader and keyboard support
- **Performance**: Optimization and bundle size reduction
- **Documentation**: Tutorials, API docs, and user guides
- **Testing**: Unit tests, integration tests, and E2E testing

## 📝 Code Review Recommendations

- **Add automated testing** ✅ Implemented using Jest and React Testing Library.
- **Simplify state persistence** ✅ State now initializes directly from saved data in `hypercard-context.tsx`.
- **Lazy load cards** ✅ `CardStack` dynamically imports each card component.
- **Externalize card content** ✅ Card data moved to JSON files for easier editing.
- **Enable theming** ✅ Theme provider integrated with a toggle for dark mode.
- **Introduce error boundaries** ✅ Application wrapped with a reusable error boundary component.
- **Audit dependencies** ✅ Removed unused packages like charting and map libraries.
- **Persist progress server-side** ✅ Progress now saved to a Prisma `Progress` table via an API route.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Apple Computer**: Original HyperCard creators (1987)
- **Bill Atkinson**: HyperCard's original designer and developer
- **Retro Computing Community**: Inspiration and reference materials
- **Modern Web Community**: Tools and libraries that made this recreation possible

---

**Built with ❤️ and nostalgia for the golden age of personal computing.**
