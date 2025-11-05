import React from 'react'
import { motion } from 'framer-motion'

const Plan = ({ name, price, highlight }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className={`flex flex-col rounded-xl border p-6 ${highlight ? 'border-violet-400/40 bg-violet-500/5' : 'border-white/10 bg-white/[0.03]'}`}
  >
    <div className="text-sm text-white/70">{name}</div>
    <div className="mt-2 text-3xl font-semibold">{price}<span className="text-base font-normal text-white/60">{price !== 'Custom' && ' / mo'}</span></div>
    <button className={`mt-6 rounded-md px-4 py-2 text-sm font-medium ${highlight ? 'bg-white text-black' : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'}`}>Choose</button>
  </motion.div>
)

export default function PricingFAQ() {
  return (
    <section id="pricing" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Pricing</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Plan name="Free / Trial" price="Free" />
          <Plan name="Starter" price="₹999" />
          <Plan name="Pro" price="₹1,999" highlight />
          <Plan name="Enterprise" price="Custom" />
        </div>

        {/* Minimal FAQ chips */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs text-white/80">
          {['What is KRUM?', 'Integrations', 'Deploy options', 'Security'].map((q, i) => (
            <span key={i} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1">{q}</span>
          ))}
        </div>

        {/* Footer CTAs */}
        <div id="demo" className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-md bg-white px-5 py-3 text-sm font-medium text-black shadow/50 shadow-white/10 transition hover:bg-white/90">Request demo</a>
          <a id="trial" href="#" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">Start free trial</a>
        </div>
      </div>
    </section>
  )
}
