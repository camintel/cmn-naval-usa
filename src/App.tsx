import { Anchor, ChevronRight, Github, ShieldCheck, Ship, Sparkles } from 'lucide-react';

const setupSteps = [
  'Connect this repository to AWS Amplify Hosting.',
  'Run a local Amplify sandbox when backend features are needed.',
  'Use Codex and Claude guidance files to keep implementation decisions consistent.',
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="page-title">
        <nav className="topbar" aria-label="Primary">
          <a className="brand" href="/">
            <Ship aria-hidden="true" />
            <span>CMN Naval USA</span>
          </a>
          <div className="nav-actions">
            <a href="https://github.com/camintel/cmn-naval-usa">
              <Github aria-hidden="true" />
              GitHub
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Amplify-ready React starter</p>
            <h1 id="page-title">CMN Naval USA</h1>
            <p className="lead">
              A clean foundation for a modern naval website, wired for GitHub-driven Amplify
              deployments and ready for future content, forms, authentication, or data features.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#workspace">
                Open workspace
                <ChevronRight aria-hidden="true" />
              </a>
              <a className="secondary-action" href="https://docs.amplify.aws/react/start/quickstart/">
                Amplify docs
              </a>
            </div>
          </div>

          <div className="operations-panel" aria-label="Project readiness">
            <div className="panel-header">
              <ShieldCheck aria-hidden="true" />
              <span>Launch Readiness</span>
            </div>
            <dl>
              <div>
                <dt>Frontend</dt>
                <dd>React + Vite</dd>
              </div>
              <div>
                <dt>Hosting</dt>
                <dd>AWS Amplify</dd>
              </div>
              <div>
                <dt>Source</dt>
                <dd>GitHub main branch</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="workspace" className="workspace">
        <div className="section-heading">
          <Sparkles aria-hidden="true" />
          <h2>Workspace Starting Points</h2>
        </div>
        <div className="step-list">
          {setupSteps.map((step, index) => (
            <article className="step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-band" aria-label="Local commands">
        <div>
          <Anchor aria-hidden="true" />
          <h2>Local Commands</h2>
        </div>
        <code>pnpm install</code>
        <code>pnpm dev</code>
        <code>pnpm build</code>
        <code>pnpm amplify:sandbox</code>
      </section>
    </main>
  );
}

export default App;
