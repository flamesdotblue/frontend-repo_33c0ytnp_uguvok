import Spline from '@splinetool/react-spline';
import { Sparkles, Moon, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/yJBriAlCim5ZFvlc/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0b0612] to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md ring-1 ring-white/20">
            <Sparkles className="h-4 w-4 text-amber-300" />
            New: An artisanal collection of lullabies & legends
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,200,150,0.25)]">
            Bedtime Stories Under an Orange Moon
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/85">
            Handcrafted tales to tuck you in. Haunting, gentle, and full of wonder — curated for quiet nights and curious hearts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#collection" className="group inline-flex items-center gap-2 rounded-full bg-amber-400/90 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-amber-500/25 transition hover:bg-amber-300">
              <BookOpen className="h-5 w-5" />
              Explore Stories
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20">
              <Moon className="h-5 w-5 text-amber-200" />
              Our Craft
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
