import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, CircuitBoard, Layers, Rocket, Shield, Zap } from 'lucide-react'

const IconTile = ({ icon: Icon, label }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5"
  >
    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="pointer-events-none absolute -inset-8 bg-[conic-gradient(from_180deg,rgba(124,58,237,0.18),rgba(14,165,233,0.18),transparent_60%)] blur-2xl" />
    </div>
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/30">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div className="text-sm text-white/80">{label}</div>
  </motion.div>
)

export default function ValueFeatures() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black to-[#07080b] py-16 text-white">
      {/* subtle grid */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 animate-ping rounded-full bg-violet-400" /> Visual + AI + DevOps
          </div>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">Less words. More wow.</h2>
        </div>

        {/* Icon matrix */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <IconTile icon={Layers} label="Canvas" />
          <IconTile icon={Cpu} label="Agents" />
          <IconTile icon={CircuitBoard} label="Pipelines" />
          <IconTile icon={Shield} label="QA & Guardrails" />
          <IconTile icon={Zap} label="Gen Code" />
          <IconTile icon={Rocket} label="Deploy" />
        </div>

        {/* Animated metrics */}
        <div className="mt-12 grid grid-cols-3 gap-3 text-center text-white">
          {[{k:'3×',l:'faster'},{k:'~40%',l:'cheaper'},{k:'50%',l:'less QA time'}].map((m,i)=> (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-2xl font-semibold">{m.k}</div>
              <div className="text-xs text-white/70">{m.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
