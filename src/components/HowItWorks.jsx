import React from 'react'
import { motion } from 'framer-motion'

const Step = ({ n, title }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-6"
  >
    <div className="pointer-events-none absolute -inset-10 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.18),transparent_60%)] blur-2xl" />
    <div className="relative">
      <div className="text-6xl font-bold leading-none text-white/10">{n}</div>
      <div className="mt-4 text-lg font-medium text-white">{title}</div>
    </div>
  </motion.div>
)

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#07080b] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-semibold">Three simple moves</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Step n="01" title="Sketch on Canvas" />
          <Step n="02" title="Agentic Build" />
          <Step n="03" title="Ship with CI/CD" />
        </div>

        {/* mode chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs">
          {['Greenfield', 'Brownfield', 'Hybrid'].map((m) => (
            <span key={m} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-white/80">{m}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
