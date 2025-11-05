import React from 'react'

export default function PricingFAQ() {
  return (
    <section id="pricing" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Pricing */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Simple, predictable SaaS pricing</h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-white/75">Per active developer, month-to-month or annual discounts available.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {[
            {
              name: 'Free / Trial',
              price: 'Free',
              desc: 'Start building with limited projects.',
              cta: 'Start free trial',
              highlight: false,
            },
            {
              name: 'Starter',
              price: '₹999',
              desc: 'Ideal for small teams and pilot projects.',
              cta: 'Choose Starter',
              highlight: false,
            },
            {
              name: 'Pro',
              price: '₹1,999',
              desc: 'Extended templates, premium AI compute add-ons.',
              cta: 'Choose Pro',
              highlight: true,
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              desc: 'Dedicated templates, premium support, on‑prem/VPC options.',
              cta: 'Contact sales',
              highlight: false,
            },
          ].map((p, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl border ${p.highlight ? 'border-violet-400/40 bg-violet-500/5' : 'border-white/10 bg-white/[0.03]'} p-6`}
            >
              <div className="text-sm text-white/70">{p.name}</div>
              <div className="mt-2 text-3xl font-semibold">{p.price}<span className="text-base font-normal text-white/60">{p.price !== 'Custom' && ' / mo'}</span></div>
              <p className="mt-2 text-sm text-white/75">{p.desc}</p>
              <button className={`mt-6 rounded-md px-4 py-2 text-sm font-medium ${p.highlight ? 'bg-white text-black' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}>{p.cta}</button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold">FAQ</h3>
          <dl className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              { q: 'What is KRUM?', a: 'KRUM combines a visual canvas, AI-driven code generation, and automated DevOps so teams can design and ship production systems faster.' },
              { q: 'Which projects is KRUM best for?', a: 'Greenfield, Brownfield, and Hybrid projects — from new apps to modernization efforts.' },
              { q: 'How does KRUM handle existing codebases?', a: 'KRUM supports brownfield workflows and can generate migration plans, stubs and infra to accelerate refactors and incremental modernization.' },
              { q: 'What integrations are available?', a: 'Native connectors for Jira, Linear, Slack, plus CI/CD and VCS integration (e.g., GitHub Actions).' },
              { q: 'How is KRUM priced?', a: 'Per-active-developer SaaS pricing with Starter at ₹999/mo and Pro at ₹1,999/mo. Enterprise pricing is custom.' },
              { q: 'Does KRUM provide automated testing?', a: 'Yes — integrated automated user-journey tests and flaky-test detection are built in.' },
              { q: 'Is KRUM available internationally or India-first?', a: 'KRUM targets a global developer audience but has an India-first beachhead and India-optimized templates.' },
              { q: 'How can I try KRUM?', a: 'Start with the Free Trial or request a demo via the product page.' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <dt className="text-sm font-medium text-white">{item.q}</dt>
                <dd className="mt-2 text-sm text-white/75">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Footer CTAs */}
        <div id="demo" className="mt-16 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:bg-white/90">Request demo</a>
          <a id="trial" href="#" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">Start free trial</a>
          <a href="#pricing" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">Compare plans</a>
        </div>
      </div>
    </section>
  )
}
