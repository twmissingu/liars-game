# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-03-16

### Major Update - System Optimization

#### AI System
- **Dynamic AI Engine**: Replaced difficulty-based strategies with intelligent dynamic decision-making
- **Character Personality**: Each AI character has unique decision-making style
  - Lelouch: High intelligence, good at calculation and deception
  - C.C.: Mysterious, conservative but decisive at critical moments
  - Suzaku: Upright, less bluffing but brave in challenging
  - Kallen: Aggressive, willing to take risks
- **Probability-based Decision**: Automatic game situation analysis and expected value calculation
- **Removed**: Difficulty selection and character style configuration

#### Audio System
- **Enhanced Sound Manager**: Complete BGM and SFX management system
- **Background Music**: 8 scene-based music tracks (menu, selection, battle, victory, etc.)
- **Game Sound Effects**: 20+ sound effects covering cards, events, Geass, UI interactions
- **Character Voice Library**: 12 situational voices per character (3+ variations each)
- **Volume Control**: Independent control for master, BGM, SFX, and voice volumes

#### State Management
- **React Context + useReducer**: Replaced complex state management
- **Simplified Architecture**: Single Context manages all game states
- **Removed**: Asynchronous state judgment mechanisms
- **Added**: Convenient methods and custom hooks

#### Mobile Adaptation
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Touch Optimization**: 44×44px minimum touch targets, touch feedback effects
- **Performance**: Reduced animations on mobile, simplified effects for 30fps stable performance
- **Multi-device Support**: Small/large phones, tablets, desktops
- **Landscape Mode**: Optimized for horizontal screen
- **Safe Area**: Notch screen adaptation

#### Build Process
- **Simplified CI/CD**: Streamlined GitHub Actions workflow
- **Test Coverage**: Set 80% threshold for branches, functions, lines, statements

---

## [2.0.0] - 2025-03-02

### Added
- 1v3 human-AI battle mode
- Standard 52-card poker system
- Liar card mechanism (randomly designated each round)
- Unique skills for 4 characters
- "Back to main page" button
- Improved character selection interface with skill information
- Permanent liar card display on game page
- Complete sound effect system
- Improved game logic and AI behavior

---

## [1.0.0] - 2025-02-28

### Added
- Initial version release
- Basic game gameplay
- 4 chibi characters
- Simple AI opponents

---

## Project Milestones

### Phase 1 (v1.0.0) - Foundation
- Basic game mechanics
- Character system
- Simple AI

### Phase 2 (v2.0.0) - Enhancement
- 1v3 battle mode
- Complete card system
- Sound effects
- UI improvements

### Phase 3 (v3.0.0) - Optimization
- Intelligent AI system
- Enhanced audio
- Mobile adaptation
- State management refactor
- Build process optimization

---

*Last updated: 2026-03-16*
