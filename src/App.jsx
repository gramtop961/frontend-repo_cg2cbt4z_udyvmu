import React from 'react'
import Hero from './components/Hero'
import ValueFeatures from './components/ValueFeatures'
import HowItWorks from './components/HowItWorks'
import PricingFAQ from './components/PricingFAQ'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-violet-400" /> Orydle AI — KRUM
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
            <a href="#" className="hover:text-white">Product</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">About</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden rounded-md border border-white/20 px-3 py-1.5 text-sm text-white hover:bg-white/10 sm:block">Compare plans</a>
            <a href="#demo" className="rounded-md bg-white px-3 py-1.5 text-sm font-medium text-black hover:bg-white/90">Request demo</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <ValueFeatures />
        <HowItWorks />
        <PricingFAQ />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="text-sm">© 2025 Orydle AI. All rights reserved. Privacy · Terms · Contact</div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm hover:text-white">Start free trial</a>
            <a href="#" className="text-sm hover:text-white">Contact sales</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
