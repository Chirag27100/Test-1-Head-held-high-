import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, MessageCircle, Clock, BadgeCheck } from 'lucide-react';
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
  'Industrial Visits',
  'Pet Services',
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
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
          alt="Professional services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/95 to-teal-950/80" />
      </div>

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
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
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Head Held High connects you with verified, in-house approved specialists across 12 service categories — for individuals, families, and businesses alike. One call, the right expert, end-to-end support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            {/* Stats bar — inline below CTAs */}
            <div className="flex items-stretch gap-3 mb-8">
              <div className="flex-1 flex flex-col items-center justify-center py-5 px-3 rounded-2xl border border-amber-400/40 shadow-lg shadow-amber-500/20" style={{background: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)'}}>
                <span className="text-3xl font-black text-white leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">2000+</span>
                <span className="text-[11px] font-bold text-amber-100 uppercase tracking-widest text-center">Projects Done</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-5 px-3 rounded-2xl border border-violet-400/40 shadow-lg shadow-violet-500/20" style={{background: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)'}}>
                <span className="text-3xl font-black text-white leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">500+</span>
                <span className="text-[11px] font-bold text-violet-200 uppercase tracking-widest text-center">Happy Clients</span>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-5 px-3 rounded-2xl border border-rose-400/40 shadow-lg shadow-rose-500/20" style={{background: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)'}}>
                <span className="text-3xl font-black text-white leading-none mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">98%</span>
                <span className="text-[11px] font-bold text-rose-200 uppercase tracking-widest text-center">Satisfaction</span>
              </div>
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
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400">Response in 24hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-gray-400">Free Consultation</span>
              </div>
            </div>
          </div>

          {/* RIGHT — image collage, no floating stat card */}
          <div className={`hidden lg:block transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Swimming Pool Construction"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Legal Assistance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Interior Design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/3321793/pexels-photo-3321793.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Event Management"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
