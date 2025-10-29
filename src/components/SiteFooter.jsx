import { Moon, Github, Star } from 'lucide-react';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 ring-1 ring-amber-400/30">
            <Moon className="h-5 w-5 text-amber-300" />
          </div>
          <div>
            <p className="font-semibold text-white">Orange Moon Stories</p>
            <p className="text-xs text-white/60">Handcrafted bedtime tales • Since {year}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#collection" className="hover:text-white">Collection</a>
          <a href="#subscribe" className="hover:text-white">Subscribe</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10 hover:bg-white/10"
          >
            <Star className="h-3.5 w-3.5 text-amber-300" />
            Leave a star
          </a>
        </div>
      </div>
    </footer>
  );
}
