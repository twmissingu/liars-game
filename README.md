# Code Geass: Liar's Game

> A card battle game based on the Code Geass universe, featuring classic anime characters with the core mechanics from "Liars Bar".

[![Deploy to GitHub Pages](https://github.com/twmissingu/liars-game/actions/workflows/deploy.yml/badge.svg)](https://github.com/twmissingu/liars-game/actions/workflows/deploy.yml)
[![Version](https://img.shields.io/badge/version-4.0.0-blue.svg)](./CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Test Coverage](https://img.shields.io/badge/coverage-80%25-brightgreen)](./coverage)

---

## Play Online

**[Click to Play →](https://twmissingu.github.io/liars-game/)**

---

## Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Development Guide](#-development-guide)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

> **Tip**: Developers, see [AGENTS.md](./AGENTS.md) for quick reference on dev commands.

---

## 🤖 For AI Agents

This project is designed for seamless AI agent interaction:

```bash
# 1. Clone and install
git clone https://github.com/twmissingu/liars-game.git
cd liars-game
npm install

# 2. Configure - no external API keys required (fully client-side)
# Just run the dev server:
npm run dev

# 3. Key entry points for agents
# - src/App.tsx                  Main component
# - src/core/GameEngineV2.ts     Game logic engine
# - src/types/index.ts           Core type definitions
# - src/ai/DynamicAIEngine.ts    AI decision engine
# - tests/unit/                  Unit tests (34 files)
# - tests/integration/           Integration tests (13 files)

# 4. Common agent tasks
npm run test           # Run all tests
npm run test:unit      # Run unit tests only
npm run type-check     # TypeScript type checking
npm run lint           # Code linting
```

---

## 🎯 Overview

### Game Introduction

Code Geass: Liar's Game is a card battle game combining strategy, deception, and Geass abilities. Players take on classic Code Geass characters and face off against 3 AI opponents in intense liar battles.

### Key Features

| Feature | Description |
|---------|-------------|
| 🎭 **4 Playable Characters** | Lelouch, C.C., Suzaku, Kallen - each with unique Geass abilities |
| 🃏 **Liar's Bar Mechanic** | Each round randomly assigns a liar card; players can play honestly or bluff |
| ⚡ **Geass Judgment** | Successful challenges trigger Geass judgment with 1 damage |
| 🤖 **Smart AI Opponents** | 3 AI opponents with unique personalities for challenging battles |
| 🎵 **Complete Audio** | BGM, character skill SFX, funny action SFX |

### Quick Rules

1. **Choose Character** - Select your character
2. **Initial Deal** - Each player gets 5 cards (Q/K/A + Joker)
3. **Liar Card** - Each round randomly assigns a liar card (Q/K/A)
4. **Play Cards** - Take turns playing cards, claiming to be the liar (may bluff)
5. **Challenge** - Other players can challenge the play
6. **Geass Judgment** - Successful challenge triggers Geass judgment
7. **Win Condition** - Eliminate all opponents, be the last survivor

---

## 🛠️ Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 18.2.0 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.2.2 | Type Safety |
| [Vite](https://vitejs.dev/) | 5.0.8 | Build Tool |
| [Howler.js](https://howlerjs.com/) | 2.2.4 | Audio Management |

### Development Tools

| Tool | Purpose |
|------|---------|
| [ESLint](https://eslint.org/) | Code Linting |
| [Prettier](https://prettier.io/) | Code Formatting |
| [Jest](https://jestjs.io/) | Unit Testing |
| [Playwright](https://playwright.dev/) | E2E Testing |

### Deployment

- **Platform**: [GitHub Pages](https://pages.github.com/)
- **CI/CD**: GitHub Actions
- **Auto-deploy**: Push to main branch triggers automatic deployment

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/twmissingu/liars-game.git
cd liars-game

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
open http://localhost:3000
```

### Common Commands

```bash
# Development
npm run dev              # Start dev server on port 3000
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix        # Auto-fix ESLint issues
npm run format          # Format code
npm run type-check      # TypeScript type check

# Testing
npm run test             # Run all tests
npm run test:unit       # Run unit tests
npm run test:integration # Run integration tests
npm run test:e2e        # Run E2E tests
npm run test:coverage   # Generate coverage report

# Deployment
npm run deploy           # Deploy to GitHub Pages
```

---

## 📁 Project Structure

```
liars-game/
├── public/                    # Static assets
│   ├── assets/
│   │   ├── cards/            # Card images
│   │   ├── audio/            # Audio files
│   │   └── avatars/          # Character avatars
│   └── index.html            # HTML template
│
├── src/                       # Source code
│   ├── ai/                    # AI system
│   │   └── DynamicAIEngine.ts # Dynamic AI decision engine
│   │
│   ├── animation/             # Animation system
│   │   ├── triggers.ts       # Animation trigger engine
│   │   ├── useAnimation.ts   # Animation React hook
│   │   └── characterRegistry.ts # Character-animation mapping
│   │
│   ├── audio/                 # Audio management
│   │   ├── EnhancedSoundManager.ts # Production sound manager
│   │   └── SoundManager.ts   # Legacy sound manager
│   │
│   ├── characters/           # Character system
│   │   ├── types.ts          # Character types
│   │   ├── data.ts           # Character data
│   │   └── state.ts          # Character state management
│   │
│   ├── components/           # Shared components
│   │   ├── animations/      # Breathing, float, shake animations
│   │   ├── characters/      # ChibiAvatar, OptimizedAvatar
│   │   └── SkillEffects.tsx  # Character skill VFX
│   │
│   ├── constants/            # Game constants
│   │   ├── game.ts           # Card/Geass constants
│   │   └── animation.ts      # Animation timing constants
│   │
│   ├── core/                 # Game core logic ⭐
│   │   ├── GameEngineV2.ts   # Game engine (1220 lines)
│   │   ├── CardSystem.ts     # Card deck/shuffle/deal
│   │   ├── GeassSystem.ts    # Geass judgment system
│   │   └── PlayerIndexMapper.ts # Player index mapping
│   │
│   ├── data/                 # Game data
│   │   └── characters.ts     # Character config data
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useGeassResult.ts  # Geass result handler
│   │   ├── useAnimationSync.ts # Animation timing sync
│   │   └── useTurnOrder.ts   # Turn order management
│   │
│   ├── store/                # State management
│   │   └── CharacterStore.ts  # Zustand character store
│   │
│   ├── styles/               # Styles
│   │   ├── global.css        # Global styles
│   │   ├── responsive.css    # Responsive design
│   │   └── theme.ts          # Theme configuration
│   │
│   ├── types/                # TypeScript types ⭐
│   │   └── index.ts          # Unified type definitions
│   │
│   ├── ui/                   # Screen components
│   │   ├── MainMenu.tsx      # Main menu screen
│   │   ├── CharacterSelect.tsx # Character selection
│   │   ├── GameTable.tsx     # Game table (1896 lines)
│   │   └── ResultScreen.tsx  # Victory/defeat screen
│   │
│   ├── utils/                # Utilities
│   │   └── index.ts          # Storage utilities
│   │
│   ├── App.tsx               # Main component (973 lines)
│   └── main.tsx              # Entry point
│
├── docs/                     # Documentation ⭐
│   ├── PRD.md                # Product requirements
│   ├── SRS.md                # Software requirements
│   ├── ARCHITECTURE.md       # Architecture design
│   ├── API.md                # API documentation
│   └── ... (6 docs total)
│
├── tests/                    # Test files
│   ├── unit/                 # 34 unit test files
│   ├── integration/          # 13 integration test files
│   └── e2e/                  # Playwright E2E tests
│
├── coverage/                 # Test coverage reports
├── dist/                     # Build output
│
├── package.json              # Project config
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
├── jest.config.cjs           # Jest config
├── eslint.config.js          # ESLint config
├── AGENTS.md                 # AI agent instructions
├── CHANGELOG.md              # Release changelog
└── README.md                 # This file
```

### Key Directories

| Directory | Description |
|-----------|-------------|
| `src/core/` | Game engine, card system, Geass system |
| `src/types/` | Unified type definitions |
| `src/utils/` | Utility functions |
| `src/ai/` | AI engine and strategies |
| `docs/` | Complete project documentation |
| `tests/` | Test code |

---

## 💻 Development Guide

### Development Workflow

```
1. Create feature branch
   git checkout -b feature/your-feature-name

2. Write code
   - Follow TypeScript type conventions
   - Add necessary JSDoc comments
   - Keep code style consistent

3. Run tests
   npm run test
   npm run test:e2e

4. Commit changes
   git add .
   git commit -m "feat: describe your change"

5. Push to remote
   git push origin feature/your-feature-name

6. Create Pull Request
```

### Code Conventions

#### TypeScript Conventions

```typescript
// ✅ Use explicit type definitions
function playCards(cards: Card[]): GameState {
  // ...
}

// ✅ Use interfaces for object structures
interface PlayerStats {
  hp: number;
  maxHp: number;
}

// ✅ Use JSDoc comments
/**
 * Perform Geass judgment
 * @param target - Target player ID
 * @param stats - Target player stats
 * @returns Geass judgment result
 */
function performGeass(target: PlayerId, stats: PlayerStats): GeassResult {
  // ...
}
```

#### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component | PascalCase | `GameBoard.tsx` |
| Class | PascalCase | `GameEngine` |
| Interface | PascalCase | `GameState` |
| Function | camelCase | `playCards` |
| Constant | UPPER_SNAKE_CASE | `MAX_HP` |
| Variable | camelCase | `currentPlayer` |
| Type | PascalCase | `CardRank` |

---

## 📚 Documentation

| Document | Description | Path |
|----------|-------------|------|
| **AGENTS.md** | Dev commands quick reference | [`./AGENTS.md`](./AGENTS.md) |
| **PRD** | Product requirements | [`docs/PRD.md`](./docs/PRD.md) |
| **ARCHITECTURE** | Architecture design | [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) |
| **API** | API documentation | [`docs/API.md`](./docs/API.md) |
| **USER_GUIDE** | User manual | [`docs/USER_GUIDE.md`](./docs/USER_GUIDE.md) |
| **DEV_GUIDE** | Development guide | [`docs/DEV_GUIDE.md`](./docs/DEV_GUIDE.md) |
| **CONTRIBUTING** | Contributing guide | [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md) |

---

## 🤝 Contributing

We welcome all forms of contributions! See [`CONTRIBUTING.md`](./docs/CONTRIBUTING.md) for details.

### Quick Contribution Flow

1. **Fork** this repository
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Create** a Pull Request

### Report Bugs

If you find a bug, please report it via [GitHub Issues](https://github.com/twmissingu/liars-game/issues) with:

- Problem description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/environment info

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## ⚠️ Disclaimer

This project is a Code Geass fan work, for educational and entertainment purposes only. All rights to Code Geass belong to its original copyright holders.

---

## 🙏 Acknowledgments

- Code Geass production team - for creating this amazing work
- Open source community - for providing excellent tools and libraries
- All test players - for helping improve the game experience

---

**Enjoy the game, may Geass be with you!** 🎮✨

---

<p align="center">
  Made with ❤️ by Liars Game Team
</p>