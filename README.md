# CMN Naval USA

React, Vite, and AWS Amplify Gen 2 starter for the CMN Naval USA website.

## Local Setup

Install dependencies:

```bash
pnpm install
```

Start the frontend:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Start an Amplify cloud sandbox after AWS credentials are configured:

```bash
pnpm amplify:sandbox
```

When the frontend starts using Amplify Auth, Data, or Storage, import `Amplify` in
`src/main.tsx`, import `../amplify_outputs.json`, and call
`Amplify.configure(outputs)`. Amplify generates `amplify_outputs.json` during a
sandbox or cloud deployment, and it should stay out of git.

## Deployment

1. Push the `main` branch to `camintel/cmn-naval-usa`.
2. In AWS Amplify Hosting, choose **Deploy an app**, select GitHub, authorize access, and choose this repository.
3. Use the included `amplify.yml` build settings.
4. For backend development, configure AWS credentials locally and run the sandbox command above.

## Assistant Workflow

- Codex reads `AGENTS.md`.
- Claude reads `CLAUDE.md`.
- Keep meaningful implementation notes in both files when project conventions change.
