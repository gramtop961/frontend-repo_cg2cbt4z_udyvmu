import React from 'react'
import { Rocket, Shield, Coins, GitBranch, Bug, Plug, Layers, Globe, CheckCircle2 } from 'lucide-react'

const ValueCard = ({ icon: Icon, title, subtitle }) => (
  <div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 text-white transition hover:border-white/20 hover:bg-white/[0.06]">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-white">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="font-medium">{title}</h3>
    <p className="mt-1 text-sm text-white/70">{subtitle}</p>
  </div>
)

const FeatureItem = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-3 rounded-lg border border-white/10 bg-black/30 p-4">
    <div className="mt-1 text-white/80"><Icon className="h-5 w-5" /></div>
    <div>
      <h4 className="text-sm font-medium text-white">{title}</h4>
      <p className="mt-1 text-sm text-white/70">{desc}</p>
    </div>
  </div>
)

export default function ValueFeatures() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#07080b] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Value Props */}
        <div className="mb-12">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">Ship faster. Cut costs. Reduce risk.</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-white/70">Accelerate from canvas to CI/CD with automation across design, code, and DevOps.</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ValueCard icon={Rocket} title="Ship faster — 3x faster launches" subtitle="Accelerate time-to-market with flow-to-code automation and built-in CI/CD." />
            <ValueCard icon={Coins} title="Cut costs — ~40% cheaper builds" subtitle="Reduce engineering and operational costs through automation and standardized templates." />
            <ValueCard icon={Shield} title="Reduce risk — Integrated QA" subtitle="Automated user-journey tests and flaky-test detection reduce release failures and outages." />
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <FeatureItem icon={Layers} title="Visual Canvas & Architecture Board" desc="Design, iterate and collaborate visually. Flows map to production-ready modules so what you design is what you ship." />
          <FeatureItem icon={GitBranch} title="AI DevOps — Automated infra & pipelines" desc="Generates Docker config, Terraform templates and CI/CD pipelines to automate the path to production." />
          <FeatureItem icon={CheckCircle2} title="AI Code-Gen & Context-Rich Stubs" desc="LLM-powered generation that understands architecture context and produces code, interface contracts and tests." />
          <FeatureItem icon={Bug} title="Integrated QA" desc="Automated user-journey tests and flaky-test detection reduce maintenance and speed up validation." />
          <FeatureItem icon={Plug} title="Seamless Integrations" desc="Jira, Linear, Slack and more — keep your workflows unified." />
          <FeatureItem icon={Globe} title="India-optimized templates & Moat" desc="Flow VC ⇄ Code VC engine plus India-first templates for an unfair advantage in the region and enterprise." />
        </div>

        {/* Outcomes / Metrics */}
        <div className="mt-14 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold">Real results you can expect</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-black/30 p-4 text-center">
              <div className="text-3xl font-semibold">3×</div>
              <div className="mt-1 text-sm text-white/70">Faster launches</div>
            </div>
            <div className="rounded-lg bg-black/30 p-4 text-center">
              <div className="text-3xl font-semibold">~40%</div>
              <div className="mt-1 text-sm text-white/70">Cheaper builds</div>
            </div>
            <div className="rounded-lg bg-black/30 p-4 text-center">
              <div className="text-3xl font-semibold">~50%</div>
              <div className="mt-1 text-sm text-white/70">Faster QA cycles</div>
            </div>
          </div>
        </div>

        {/* Use cases */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-sm font-semibold text-white/80">Use cases / Who it’s for</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li><span className="font-medium text-white">Enterprise IT & Services</span> — accelerate delivery across mid-size Indian IT firms and reduce handoffs.</li>
              <li><span className="font-medium text-white">Product Teams</span> — move from design to deploy without losing intent in translation.</li>
              <li><span className="font-medium text-white">ML/AI Teams</span> — get models and ML infra production-ready faster.</li>
              <li><span className="font-medium text-white">Platform & DevOps</span> — standardize infra and pipelines via templates and automation.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-sm font-semibold text-white/80">Technology & security</h4>
            <p className="mt-2 text-sm text-white/75">React + WASM front‑end, LLM agents for orchestration, and automated infra generation to Docker/Terraform/GitHub Actions.</p>
            <p className="mt-3 text-sm text-white/75">Enterprise-grade security: role-based access, audit logging, and secure infra templates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
