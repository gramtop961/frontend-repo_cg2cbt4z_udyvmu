import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Waves } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Radial glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />
      <div className="pointer-events-none absolute -inset-x-32 top-0 h-[65vh] rounded-b-[100%] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),rgba(14,165,233,0.25)_40%,transparent_65%)] blur-2xl" />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-10 top-24 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl"
        animate={{ y: [0, -14, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-16 top-40 h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl"
        animate={{ y: [0, 18, 0], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Live AI Agent Canvas
        </div>

        <h1 className="font-inter bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          KRUM — Build, Ship, Repeat
        </h1>

        {/* Compact CTAs */}
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

        {/* Minimal badges */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-3 gap-3 text-xs">
          {[
            { Icon: Sparkles, label: 'Agentic' },
            { Icon: Zap, label: 'Fast' },
            { Icon: Waves, label: 'Smooth' },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white/80 backdrop-blur"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
