# Agent Instructions

## Project Shape

- Frontend: React + TypeScript + Vite.
- Hosting and backend: AWS Amplify Gen 2.
- Source control: GitHub repository `camintel/cmn-naval-usa`.

## Local Commands

- Install dependencies: `pnpm install`
- Start local frontend: `pnpm dev`
- Production build: `pnpm build`
- Amplify sandbox: `pnpm amplify:sandbox`

## Engineering Preferences

- Keep UI components accessible and responsive.
- Prefer existing dependencies before adding new ones.
- Do not commit generated files such as `dist/`, `node_modules/`, or `amplify_outputs.json`.
- Use Amplify Gen 2 files under `amplify/` for backend resources.
- Update this file and `CLAUDE.md` together when changing project conventions.
