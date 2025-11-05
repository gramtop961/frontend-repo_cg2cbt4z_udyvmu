import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Radial glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black" />
      <div className="pointer-events-none absolute -inset-x-32 top-0 h-[60vh] rounded-b-[100%] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),rgba(14,165,233,0.25)_40%,transparent_65%)] blur-2xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          New: Agentic build + visual canvas
        </span>

        <h1 className="font-inter bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          From idea → production-ready software in minutes, not months.
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
          KRUM by Orydle AI: visual design + agentic code generation + automated DevOps — the fastest path from concept to production.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#demo"
            className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:bg-white/90"
          >
            Get a demo
          </a>
          <a
            href="#trial"
            className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Start free trial
          </a>
        </div>

        {/* Bullets */}
        <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            'Visual Canvas that turns flows into production architecture.',
            'Agentic Build that generates code, infra, pipelines and docs.',
            'Role-aware AI assistants for Analysts, PMs, Architects, Developers and QA.',
          ].map((b, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-left text-sm text-white/80 backdrop-blur"
            >
              • {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
