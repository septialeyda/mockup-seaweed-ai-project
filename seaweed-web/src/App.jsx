import React, { useState } from 'react';
import { Shield, Target, Eye, Database, Microscope, ChevronRight, Menu, X, Landmark } from 'lucide-react';

export default function SeaweedMockup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      
      {/* HEADER & NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-950 block">SEAWEED</span>
              <span className="text-xs tracking-widest font-semibold text-emerald-600 block -mt-1">CENTRAL</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-emerald-600 transition">About Us</a>
            <a href="#mission-vision" className="hover:text-emerald-600 transition">Mission & Vision</a>
            <a href="#discovery" className="hover:text-emerald-600 transition">Our Discovery</a>
            <a href="#partners" className="hover:text-emerald-600 transition">University Partners</a>
          </nav>

          <div className="hidden md:flex">
            <a href="#discovery" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition shadow-sm">
              Explore Data
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-600 focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">About Us</a>
            <a href="#mission-vision" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Mission & Vision</a>
            <a href="#discovery" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Our Discovery</a>
            <a href="#partners" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">University Partners</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-emerald-950 to-slate-900 text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070')" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              Mapping Marine Bio-Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Unlocking the Secrets of Marine Seaweed Ecosystems
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed">
              Bridging scientific exploration and commercial sustainability by creating the most comprehensive bio-discovery pipeline for seaweed species.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg shadow-emerald-500/20 transition flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#discovery" className="bg-transparent hover:bg-white/5 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg transition">
                View Our Discovery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY COUNTER / STATS */}
      <section id="discovery" className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8 lg:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-xs font-bold tracking-widest text-emerald-600 uppercase mb-2">Our Findings</h2>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">The Seaweed Discovery Pipeline</p>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">Rigorous collection and taxonomical charting across dynamic coastlines.</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="pt-6 lg:pt-0">
              <p className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-emerald-600">4,454</p>
              <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase mt-2">Seaweed Samples</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <p className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-emerald-600">65</p>
              <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase mt-2">Unique Genera</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <p className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-emerald-600">178</p>
              <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase mt-2">Identified Species</p>
            </div>
            <div className="pt-6 lg:pt-0">
              <p className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight text-emerald-600">301</p>
              <p className="text-sm font-semibold text-slate-500 tracking-wide uppercase mt-2">Explored Sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Microscope className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-bold tracking-wider text-emerald-600 uppercase">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              A Scientific Frontier in Blue Biotech
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Inspired by deep-tech ocean exploration, our platform operates at the convergence of marine biology and industrial biotechnology. We focus on surveying, classifying, and understanding the rich biodiversity of seaweed ecosystems.
              </p>
              <p>
                By cataloging extensive chemical libraries and bioproduct matrices from native seaweed profiles, we provide our commercial and institutional partners with foundational building blocks for sustainable cosmetics, agriculture, and biomaterials.
              </p>
            </div>
          </div>
          <div className="bg-slate-900 rounded-2xl h-80 lg:h-[450px] overflow-hidden relative shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=2070" 
              alt="Marine Laboratory Research" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission-vision" className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-slate-800/50 p-8 lg:p-12 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl w-fit mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To ethically harvest and thoroughly research the extensive taxonomies of seaweed, establishing a globally recognized bio-bank repository that powers the next generation of sustainable, ocean-derived industrial applications.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 p-8 lg:p-12 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl w-fit mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To become the world's most definitive platform for marine macroalgae research, enabling a circular economy where high-value macroalgae solutions substitute petrochemical dependencies on a global scale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* UNIVERSITY PARTNER */}
      <section id="partners" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex justify-center mb-3">
              <Landmark className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Academic & Institutional Synergy</h2>
            <p className="text-slate-500 mt-3">Our discoveries are backed by rigorous peer validation and collaborative academic research.</p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-slate-200/80 p-8 flex flex-col items-center justify-center">
            {/* Generic placeholder inspired by prominent Australian marine research institutes */}
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4">
              <Landmark className="h-8 w-8" />
            </div>
            <p className="text-lg font-bold text-slate-900">Our University Partner</p>
            <p className="text-sm text-slate-500 mt-1">Joint Marine Biotech Research Initiative</p>
            <p className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full mt-4">Active Consortium Hub</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-slate-200 text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <Database className="h-5 w-5 text-emerald-600" />
            <span className="font-bold text-slate-900 tracking-tight">SEAWEED CENTRAL MOCKUP</span>
          </div>
          <p>© {new Date().getFullYear()} Seaweed Company. Inspired by Seaweed Central UI/UX. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}