import React from 'react'

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#07080b] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">KRUM — How it works</h2>
          <p className="mt-2 text-white/75">
            KRUM unifies visual architecture, AI-powered code generation and automated DevOps into a single platform. It’s the “Figma + Copilot + DevOps” for enterprise software — a canvas where flows become production systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-xs uppercase tracking-wide text-white/60">Step 1</div>
            <h3 className="mt-1 text-lg font-semibold">Visual Canvas</h3>
            <p className="mt-2 text-sm text-white/75">Design flows and modules visually — map user journeys, services and data flows. The canvas captures architecture intent so design translates directly into runnable components.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-xs uppercase tracking-wide text-white/60">Step 2</div>
            <h3 className="mt-1 text-lg font-semibold">Agentic Build</h3>
            <p className="mt-2 text-sm text-white/75">One-click agentic generation of code, infrastructure (Docker/Terraform), CI/CD (GitHub Actions), and docs. The engine stitches LLM agents and a WASM-based runtime to produce context-rich code stubs and infra.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="text-xs uppercase tracking-wide text-white/60">Step 3</div>
            <h3 className="mt-1 text-lg font-semibold">Role-Aware Assistants</h3>
            <p className="mt-2 text-sm text-white/75">Assistants tuned for Analysts, PMs, Architects, Developers and QA — from requirements to roadmaps, patterns, stubs and automated journey tests.</p>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-6">
          <h4 className="text-sm font-semibold">Modes supported</h4>
          <p className="mt-2 text-sm text-white/75">Greenfield, Brownfield and Hybrid migrations — works for new projects and for modernizing legacy systems.</p>
        </div>
      </div>
    </section>
  )
}
