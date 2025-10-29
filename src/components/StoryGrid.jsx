import { BookOpen, Feather, Star } from 'lucide-react';

const stories = [
  {
    title: 'The Lantern Keeper',
    tag: 'Soothing • 6 min',
    blurb: 'A gentle guardian lights the path for wandering dreams beneath an amber moon.',
    tone: 'soothing',
  },
  {
    title: 'Ember & The Mountain',
    tag: 'Epic • 9 min',
    blurb: 'A brave whisper climbs a sleeping giant to return a spark to the sky.',
    tone: 'epic',
  },
  {
    title: 'Midnight Orchard',
    tag: 'Whimsical • 5 min',
    blurb: 'Fruit that glows with lullabies ripens only for those who listen closely.',
    tone: 'whimsical',
  },
  {
    title: 'Moth Cathedral',
    tag: 'Haunting • 7 min',
    blurb: 'A chorus of velvet wings teaches the night to breathe in harmony.',
    tone: 'haunting',
  },
];

const toneStyles = {
  soothing: 'from-emerald-400/10 to-teal-400/10 ring-emerald-400/20',
  epic: 'from-amber-400/10 to-orange-400/10 ring-amber-400/20',
  whimsical: 'from-fuchsia-400/10 to-violet-400/10 ring-fuchsia-400/20',
  haunting: 'from-blue-400/10 to-indigo-400/10 ring-blue-400/20',
};

export default function StoryGrid() {
  return (
    <section id="collection" className="relative bg-[#0b0612] py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Curated Nighttime Collection</h2>
            <p className="mt-2 text-white/70">Handpicked pieces crafted to quiet the mind and spark the imagination.</p>
          </div>
          <a href="#subscribe" className="hidden sm:inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 font-medium">
            <BookOpen className="h-5 w-5" />
            See more
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s) => (
            <article
              key={s.title}
              className={`group rounded-2xl bg-gradient-to-br ${toneStyles[s.tone]} p-5 ring-1 transition hover:translate-y-[-2px] hover:shadow-lg hover:shadow-black/20`}
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                  <Feather className="h-3.5 w-3.5 text-white/70" />
                  {s.tag}
                </div>
                <Star className="h-4 w-4 text-amber-300 opacity-80" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.blurb}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-300 hover:text-amber-200">
                <BookOpen className="h-4 w-4" /> Read now
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
