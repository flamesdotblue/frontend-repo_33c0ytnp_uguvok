import Hero from './components/Hero.jsx';
import StoryGrid from './components/StoryGrid.jsx';
import SubscribeCTA from './components/SubscribeCTA.jsx';
import SiteFooter from './components/SiteFooter.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0612] text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* About the craft */}
      <section id="about" className="relative bg-[#0b0612] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Artisanal storytelling for quiet nights</h2>
          <p className="mt-3 text-white/70">
            Each story is written by hand — slow, deliberate, and tuned to the rhythm of breath. We weave
            soft imagery with calm pacing to help you drift. Think warm embers, distant mountains, and that
            glowing orange moon. Close your eyes; we will take it from here.
          </p>
        </div>
      </section>

      {/* Curated collection */}
      <StoryGrid />

      {/* Subscribe CTA */}
      <SubscribeCTA />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

export default App;
