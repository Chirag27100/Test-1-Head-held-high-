import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const rotating = [
  'Construction',
  'Legal Work',
  'Finance',
  'Interior Design',
  'Event Planning',
  'Property Deals',
  'Travel',
  'Fabrication',
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  useEffect(() => {
    const cur = rotating[idx];
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < cur.length) setText(cur.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), 2000);
      } else {
        if (text.length > 0) setText(cur.slice(0, text.length - 1));
        else { setDel(false); setIdx(p => (p + 1) % rotating.length); }
      }
    }, del ? 45 : 95);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950 pt-20">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Professional team"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/95 to-teal-950/80" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/25 rounded-full mb-8">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-teal-300">Bengaluru's Trusted Service Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              The Right Expert for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                {text}
                <span className="inline-block w-0.5 h-[0.85em] bg-teal-400 ml-1 animate-pulse align-middle" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              Head Held High connects you with verified, in-house approved specialists across 9 service categories — for individuals, families, and businesses alike. One call, the right expert, end-to-end support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:-translate-y-1 group text-base"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => (document.querySelector('[data-chatbot-trigger]') as HTMLButtonElement)?.click()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/8 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 text-base backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 text-teal-400" />
                Chat With Us
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-gray-400">Verified Specialists</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm text-gray-400">4.8 Avg Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">🕐 Response in 24hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">✅ Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Right — image collage */}
          <div className={`hidden lg:block transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                  <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Construction" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/10">
                  <img src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Legal" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/10">
                  <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Interior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                  <img src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Finance" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 flex items-center gap-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">2000+</div>
                <div className="text-xs text-gray-400">Projects Done</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">500+</div>
                <div className="text-xs text-gray-400">Happy Clients</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">98%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
