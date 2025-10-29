import { Mail, Sparkles } from 'lucide-react';

export default function SubscribeCTA() {
  return (
    <section id="subscribe" className="relative bg-gradient-to-b from-[#0b0612] to-black py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 px-4 py-2 text-xs font-medium text-amber-200 ring-1 ring-amber-400/30">
          <Sparkles className="h-4 w-4" />
          Receive one handcrafted story each week
        </div>
        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-white">Join the Night Letter</h2>
        <p className="mt-2 text-white/70">
          Subscribe for exclusive tales, behind-the-scenes notes, and sleepy sounds.
        </p>
        <form
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="you@moonmail.com"
            className="h-12 w-full rounded-full border border-white/10 bg-white/5 px-5 text-white placeholder-white/50 outline-none focus:border-amber-300/50"
          />
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 font-semibold text-black shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
          >
            <Mail className="h-5 w-5" />
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-xs text-white/60">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
