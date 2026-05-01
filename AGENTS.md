# AGENTS.md

## Dev Server

- `npm run dev` starts Vite on **port 3000** (not default 5173)
- Vite base path is `/liars-game/` (for GitHub Pages deployment)

## Build & Deploy

- `npm run build` = `tsc && vite build`
- `npm run deploy` builds and runs `gh-pages -d dist`
- CI auto-deploys to GitHub Pages on push to `main`/`master`

## Test Commands

```bash
npm run test           # all Jest tests
npm run test:unit      # tests/unit only
npm run test:integration  # tests/integration only
npm run test:e2e       # Playwright e2e tests
npm run test:ci        # CI mode: --ci --coverage --maxWorkers=2 --coverageThreshold=80%
npm run test:coverage  # generate coverage report in coverage/
```

Jest runs in Node environment (`testEnvironment: 'node'`).

## Lint & Format

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`
- Prettier: single quotes, 100 char width

## Type Check

- `npm run type-check` runs `tsc --noEmit`

## Project Structure

| Directory | Purpose |
|-----------|---------|
| `src/core/` | GameEngine.ts, GameEngineV2.ts, CardSystem.ts, GeassSystem.ts |
| `src/types/` | Unified type definitions |
| `src/ai/` | AI engine and strategies |
| `tests/unit/` | Unit tests |
| `tests/integration/` | Integration tests |
| `tests/e2e/` | Playwright tests |
| `docs/` | PRD, SRS, ARCHITECTURE, API docs |

## For AI Agents

This project is designed for seamless AI agent interaction:

1. **Clone and install**
   ```bash
   git clone https://github.com/twmissingu/liars-game.git
   cd liars-game
   npm install
   ```

2. **Configure**
   ```bash
   # No external API keys required - fully client-side game
   ```

3. **Run**
   ```bash
   npm run dev  # Starts on port 3000
   ```

4. **Test**
   ```bash
   npm run test           # All tests
   npm run type-check    # TypeScript
   ```

## Key Entry Points

- `src/App.tsx` - main component
- `src/core/GameEngine.ts` / `GameEngineV2.ts` - game logic
- `src/types/unified.ts` - core types